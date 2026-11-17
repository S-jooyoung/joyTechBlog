#!/usr/bin/env python3
"""조이기술블로그 글의 기계 판정 항목을 검사한다.

사용법: python3 check_post.py <post.md> [--baseline <git-rev> | --baseline-file <path>] [--allow-removal]
종료 코드: 0 모두 PASS, 1 FAIL 있음, 2 baseline을 읽지 못함
"""
import argparse
import os
import re
import subprocess
import sys
import unicodedata

ALLOWED_YO = ("데요", "고요", "게요", "세요")
QUESTION_YO = ("까요", "나요", "가요")
BANNED = (
    "🙏",
    "👇",
    "<br",
    "댓글로 남겨주세요",
    "궁금하신 점이 있다면",
    "읽어주셔서 감사합니다",
    "AI의 도움을 받아",
    "HUMANIZE-SUMMARY",
)
YO_CAP = 0.20
MAX_SENTENCES = 5

FENCE_RE = re.compile(r"^\s*(```|~~~)")
HEADING_RE = re.compile(r"^\s*#{1,6}\s")
IMAGE_RE = re.compile(r"^\s*!\[.*\]\(.*\)\s*$")
LIST_RE = re.compile(r"^\s*(?:[-*+]|\d+\.)\s+")
CODE_SPAN_RE = re.compile(r"(`+)(.+?)\1")
NUMBER_RE = re.compile(r"\d+(?:[.,]\d+)?")
SENTENCE_END_RE = re.compile(r"[.?!](?:\*\*|[\"'”’)\]])*(?=\s|$)")
LINK_RE = re.compile(r"\[([^\]]*)\]\([^)]*\)")
LINK_TARGET_RE = re.compile(r"\]\([^)]*\)")


def is_punct(ch):
    return unicodedata.category(ch)[0] in ("P", "S")


def split_frontmatter(lines):
    if lines and lines[0].strip() == "---":
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                return lines[: i + 1], i + 1
    return [], 0


def classify(lines, start):
    """본문 줄마다 종류를 붙인다: blank, heading, table, image, code, comment, text, list."""
    kinds = {}
    in_fence = False
    in_comment = False
    for idx in range(start, len(lines)):
        raw = lines[idx]
        line = raw.strip()
        if in_fence:
            kinds[idx] = "code"
            if FENCE_RE.match(raw):
                in_fence = False
            continue
        if in_comment:
            kinds[idx] = "comment"
            if "-->" in line:
                in_comment = False
            continue
        if FENCE_RE.match(raw):
            kinds[idx] = "code"
            in_fence = True
            continue
        if line.startswith("<!--"):
            kinds[idx] = "comment"
            if "-->" not in line:
                in_comment = True
            continue
        content = re.sub(r"^\s*>\s?", "", raw).strip() if line.startswith(">") else line
        if not content:
            kinds[idx] = "blank"
        elif HEADING_RE.match(raw):
            kinds[idx] = "heading"
        elif content.startswith("|"):
            kinds[idx] = "table"
        elif IMAGE_RE.match(content):
            kinds[idx] = "image"
        elif LIST_RE.match(content):
            kinds[idx] = "list"
        else:
            kinds[idx] = "text"
    return kinds


def strip_quote(raw):
    return re.sub(r"^\s*>\s?", "", raw) if raw.lstrip().startswith(">") else raw


def paragraphs(lines, kinds, start):
    """문단 목록: [(시작 줄 idx, [(줄 idx, 텍스트)])]. 목록 항목은 줄마다 한 문단."""
    result = []
    cur = []
    for idx in range(start, len(lines)):
        kind = kinds[idx]
        if kind == "text":
            cur.append((idx, strip_quote(lines[idx]).strip()))
            continue
        if cur:
            result.append(cur)
            cur = []
        if kind == "list":
            text = LIST_RE.sub("", strip_quote(lines[idx]), count=1).strip()
            result.append([(idx, text)])
    if cur:
        result.append(cur)
    return result


def prose(text):
    text = CODE_SPAN_RE.sub("CODE", text)
    return LINK_RE.sub(r"\1", text)


def sentences(para):
    """문단을 문장으로 나눈다: [(끝나는 줄 idx, 문장)]."""
    joined = ""
    owners = []
    for idx, text in para:
        piece = prose(text)
        if joined:
            joined += " "
            owners.append(idx)
        joined += piece
        owners.extend([idx] * len(piece))
    result = []
    pos = 0
    for m in SENTENCE_END_RE.finditer(joined):
        chunk = joined[pos : m.end()].strip()
        if chunk:
            result.append((owners[m.end() - 1], chunk))
        pos = m.end()
    rest = joined[pos:].strip()
    if rest:
        result.append((owners[-1], rest))
    return result


def ending(sentence):
    """(종결 문자열, 마지막 문장부호)를 돌려준다."""
    s = sentence.rstrip()
    mark = ""
    while s and (s[-1].isspace() or is_punct(s[-1]) or unicodedata.category(s[-1]) in ("Mn", "Me", "Cf")):
        if s[-1] in ".?!" and not mark:
            mark = s[-1]
        s = s[:-1]
    return s, mark


def is_yo_or_jyo(word):
    return word.endswith("요") or word.endswith("죠")


def t1_violation(word, mark):
    if not word.endswith("요"):
        return False
    if word.endswith("더라고요"):
        return True
    if word.endswith(ALLOWED_YO):
        return False
    if word.endswith(QUESTION_YO) and mark == "?":
        return False
    return True


def excerpt(text, width=60):
    text = text.strip()
    return text if len(text) <= width else "…" + text[-width:]


def bold_runs(text):
    """코드 스팬 밖의 `**` 위치."""
    masked = list(text)
    for m in CODE_SPAN_RE.finditer(text):
        for i in range(m.start(), m.end()):
            masked[i] = "\0"
    masked = "".join(masked)
    runs = []
    i = 0
    while i < len(masked):
        if masked[i] == "*":
            j = i
            while j < len(masked) and masked[j] == "*":
                j += 1
            if j - i == 2:
                runs.append(i)
            i = j
        else:
            i += 1
    return runs


def flanking(text, pos):
    prev = text[pos - 1] if pos > 0 else " "
    nxt = text[pos + 2] if pos + 2 < len(text) else " "
    left = not nxt.isspace() and (not is_punct(nxt) or prev.isspace() or is_punct(prev))
    right = not prev.isspace() and (not is_punct(prev) or nxt.isspace() or is_punct(nxt))
    return left, right


def sections(lines, kinds, start):
    """리드와 `## ` 섹션별 줄 idx 목록."""
    result = [[]]
    for idx in range(start, len(lines)):
        if kinds[idx] == "heading" and lines[idx].startswith("## "):
            result.append([])
            continue
        result[-1].append(idx)
    return result


def inline_codes(lines, kinds, start, skip=()):
    codes = {}
    for idx in range(start, len(lines)):
        if kinds[idx] in ("code", "comment") or idx in skip:
            continue
        for m in CODE_SPAN_RE.finditer(lines[idx]):
            codes.setdefault(m.group(0), idx)
    return codes


def banned_lines(lines, start):
    hits = []
    for idx in range(start, len(lines)):
        norm = re.sub(r"\s+", " ", lines[idx].replace("`", "").replace("**", ""))
        for term in BANNED:
            if term in norm:
                hits.append((idx, term))
    return hits


def numbers(lines, kinds, start):
    found = {}
    for idx in range(start, len(lines)):
        if kinds[idx] == "comment":
            continue
        for m in NUMBER_RE.finditer(LINK_TARGET_RE.sub("]", lines[idx])):
            found.setdefault(m.group(0), idx)
    return found


def table_rows(lines, kinds, start):
    rows = []
    for idx in range(start, len(lines)):
        if kinds[idx] == "table":
            cells = [c.strip() for c in strip_quote(lines[idx]).strip().strip("|").split("|")]
            rows.append((idx, "|".join(cells)))
    return rows


def image_lines(lines, kinds, start):
    return {strip_quote(lines[i]).strip(): i for i in range(start, len(lines)) if kinds[i] == "image"}


class Report:
    def __init__(self):
        self.failed = False
        self.out = []

    def check(self, rule, fails, note=""):
        if fails:
            self.failed = True
            for line_no, msg in fails:
                where = f"L{line_no}" if line_no else "-"
                self.out.append(f"FAIL {rule} {where}: {msg}")
        else:
            self.out.append(f"PASS {rule}" + (f" ({note})" if note else ""))


def load_baseline(args, post_path):
    if args.baseline_file:
        try:
            return open(args.baseline_file, encoding="utf-8").read()
        except (OSError, UnicodeDecodeError) as e:
            sys.stderr.write(f"baseline 파일을 읽지 못함: {e}\n")
            sys.exit(2)
    post_dir = os.path.dirname(os.path.abspath(post_path)) or "."
    try:
        root = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            cwd=post_dir, capture_output=True, text=True, encoding="utf-8", check=True,
        ).stdout.strip()
        rel = os.path.relpath(os.path.abspath(post_path), root)
        return subprocess.run(
            ["git", "show", f"{args.baseline}:{rel}"],
            cwd=root, capture_output=True, text=True, encoding="utf-8", check=True,
        ).stdout
    except subprocess.CalledProcessError as e:
        sys.stderr.write(f"baseline을 읽지 못함 ({args.baseline}): {e.stderr.strip()}\n")
        sys.exit(2)
    except (OSError, UnicodeDecodeError) as e:
        sys.stderr.write(f"baseline을 읽지 못함 ({args.baseline}): {e}\n")
        sys.exit(2)


def main():
    parser = argparse.ArgumentParser(description="조이기술블로그 글 기계 검사")
    parser.add_argument("post")
    group = parser.add_mutually_exclusive_group()
    group.add_argument("--baseline")
    group.add_argument("--baseline-file")
    parser.add_argument("--allow-removal", action="store_true", help="baseline의 숫자·인라인 코드·이미지 줄·표 행이 빠지는 것은 허용(추가·변경은 FAIL)")
    args = parser.parse_args()

    try:
        text = open(args.post, encoding="utf-8").read()
    except (OSError, UnicodeDecodeError) as e:
        sys.stderr.write(f"글을 읽지 못함: {e}\n")
        sys.exit(2)
    baseline_text = load_baseline(args, args.post) if (args.baseline or args.baseline_file) else None

    lines = text.split("\n")
    fm, start = split_frontmatter(lines)
    kinds = classify(lines, start)
    paras = paragraphs(lines, kinds, start)
    sents = [(p, s) for p in paras for s in sentences(p)]
    report = Report()

    t1 = []
    yo = 0
    for _, (idx, sentence) in sents:
        word, mark = ending(sentence)
        if is_yo_or_jyo(word):
            yo += 1
        if t1_violation(word, mark):
            t1.append((idx + 1, excerpt(sentence)))
    report.check("T1", t1)

    total = len(sents)
    ratio = yo / total if total else 0.0
    note = f"{yo}/{total}={ratio:.1%}"
    report.check("T2", [(None, f"요·죠 종결 {note} > {YO_CAP:.0%}")] if ratio > YO_CAP else [], note)

    p1 = []
    for para in paras:
        count = len(sentences(para))
        if count > MAX_SENTENCES:
            p1.append((para[0][0] + 1, f"{count}문장: {excerpt(para[0][1], 40)}"))
    report.check("P1", p1)

    b1 = []
    for sec in sections(lines, kinds, start):
        text_idx = [i for i in sec if kinds[i] in ("text", "list")]
        pairs = sum(len(bold_runs(lines[i])) for i in text_idx) // 2
        if pairs >= 2:
            first = next(i for i in text_idx if bold_runs(lines[i]))
            b1.append((first + 1, f"굵게 {pairs}개"))
    report.check("B1", b1)

    b2 = []
    for para in paras:
        opener = True
        for idx, _ in para:
            raw = strip_quote(lines[idx])
            if kinds[idx] == "list":
                raw = LIST_RE.sub("", raw, count=1)
            for pos in bold_runs(raw):
                left, right = flanking(raw, pos)
                if opener and not left:
                    b2.append((idx + 1, f"여는 ** 깨짐: {excerpt(raw[max(0, pos - 15):pos + 17], 40)}"))
                if not opener and not right:
                    b2.append((idx + 1, f"닫는 ** 깨짐: {excerpt(raw[max(0, pos - 15):pos + 17], 40)}"))
                opener = not opener
    report.check("B2", b2)

    report.check("E1", [(idx + 1, f"금지 문구 '{term}'") for idx, term in banned_lines(lines, start)])

    first_block = next((i for i in range(start, len(lines)) if kinds[i] not in ("blank", "comment")), None)
    l1 = []
    if first_block is None or not lines[first_block].lstrip().startswith(">"):
        l1.append(((first_block + 1) if first_block is not None else None, "본문 첫 블록이 > 리드가 아님"))
    report.check("L1", l1)

    h2 = [i for i in range(start, len(lines)) if kinds[i] == "heading" and lines[i].startswith("## ")]
    h1 = []
    if not h2:
        h1.append((None, "## 제목이 없음"))
    elif lines[h2[-1]][3:].strip() != "마치며":
        h1.append((h2[-1] + 1, f"마지막 ## 제목이 '{lines[h2[-1]][3:].strip()}'"))
    report.check("H1", h1)

    if baseline_text is not None:
        b_lines = baseline_text.split("\n")
        b_fm, b_start = split_frontmatter(b_lines)
        b_kinds = classify(b_lines, b_start)

        new_nums = numbers(lines, kinds, start)
        old_nums = numbers(b_lines, b_kinds, b_start)
        n1 = [(new_nums[t] + 1, f"추가된 숫자 '{t}'") for t in sorted(set(new_nums) - set(old_nums))]
        dropped = set(old_nums) - set(new_nums)
        if not args.allow_removal:
            n1 += [(None, f"사라진 숫자 '{t}' (baseline L{old_nums[t] + 1})") for t in sorted(dropped)]
        report.check("N1", n1, f"허용된 삭제 {len(dropped)}개" if args.allow_removal and dropped else "")

        f1 = []
        if fm != b_fm:
            diff_at = next(
                (i for i in range(max(len(fm), len(b_fm))) if (fm[i] if i < len(fm) else None) != (b_fm[i] if i < len(b_fm) else None)),
                0,
            )
            f1.append((diff_at + 1, "frontmatter가 baseline과 다름"))
        report.check("F1", f1)

        new_img = image_lines(lines, kinds, start)
        old_img = image_lines(b_lines, b_kinds, b_start)
        i1 = [(new_img[k] + 1, f"추가/변경된 이미지 줄 {excerpt(k, 40)}") for k in new_img if k not in old_img]
        if not args.allow_removal:
            i1 += [(None, f"사라진 이미지 줄 {excerpt(k, 40)} (baseline L{v + 1})") for k, v in old_img.items() if k not in new_img]
        report.check("I1", i1)

        banned_b = {idx for idx, _ in banned_lines(b_lines, b_start)}
        old_codes_kept = inline_codes(b_lines, b_kinds, b_start, skip=banned_b)
        new_codes = inline_codes(lines, kinds, start)
        c1 = [(new_codes[c] + 1, f"추가된 인라인 코드 {c}") for c in sorted(set(new_codes) - set(old_codes_kept))]
        if not args.allow_removal:
            c1 += [(None, f"사라진 인라인 코드 {c} (baseline L{old_codes_kept[c] + 1})") for c in sorted(set(old_codes_kept) - set(new_codes))]
        report.check("C1", c1)

        new_rows = table_rows(lines, kinds, start)
        old_rows = table_rows(b_lines, b_kinds, b_start)
        tb1 = []
        if args.allow_removal:
            remaining = iter([r for _, r in old_rows])
            for line_idx, row in new_rows:
                if not any(row == o for o in remaining):
                    tb1.append((line_idx + 1, f"추가/변경된 표 행: {excerpt(row, 40)}"))
                    break
        elif [r for _, r in new_rows] != [r for _, r in old_rows]:
            for k in range(max(len(new_rows), len(old_rows))):
                nr = new_rows[k][1] if k < len(new_rows) else None
                orow = old_rows[k][1] if k < len(old_rows) else None
                if nr != orow:
                    tb1.append(((new_rows[k][0] + 1) if k < len(new_rows) else None, f"표 행 다름: {excerpt(nr or '(없음)', 40)}"))
                    break
        report.check("TB1", tb1)

    print("\n".join(report.out))
    sys.exit(1 if report.failed else 0)


if __name__ == "__main__":
    main()
