---
emoji: 👰🏻‍♀️
title: 모바일 청첩장 만들기 회고
date: '2022-05-26 17:00:00'
author: 키맨
tags: 프로젝트 github-pages gatsby
categories: 프로젝트
---

> 올가을 우리 형이 결혼식을 하게 되는데, 조금 특별한 선물을 해주고 싶다는 생각에 모바일 청첩장을 만들어주자고 생각하였다. 기존 모바일 청첩장은 결혼식이 끝나면 사이트도 없어지기에 내가 직접 만들어서 평생 간직할 수 있는 사이트를 선물하면 조금 더 특별할 거로 생각했다.

## 📝 모바일 청첩장 요구사항

- 처음 보이는 화면에는 동영상을 넣어 시각적으로 더 좋은 느낌을 연출하자.

- 대중적인 모바일 청첩장을 본 결과 배경은 종이 질감을 사용하여 편안한 느낌을 연출하였다. 따라 하자 😁

- 계좌번호 복사 기능, 카카오톡 지도를 사용하여 위치정보 제공하자

- 요즘 대부분 카카오톡을 이용하여 모바일 청첩장을 공유하므로 카카오톡 링크 기능 및 일반 링크 복사기능을 만들자

## 🛠 모바일 청첩장 사용 기술

우선 기술 블로그를 만들 때 사용했던 거와 같이 정적 사이트 생성기인 `Gatsby`를 사용하였고 React, Ant Design, Styled-Components를 사용하여 만들었다. 갤러리 부분은 `react-image-gallery`라이브러리를 사용하였으며, 계좌번호 및 링크 복사 기능은 `react-copy-to-clipboard`라이브러리를 사용하였다. 배포는 `netlify`를 채택하였다. 기본적인 디자인을 제외하고는 거의 모든 기능들을 라이브러리를 이용하였기에 어려운 점은 없었으나 배포까지 진행하면서 어려웠던 점 몇 가지를 적어보고자 한다.

## ❗️ 고민했던 부분

### 🗾 Kakao Map 사용하기

결혼식 장소 정보를 제공하기 위하여 KakaoMap을 사용하였다 이미지파일이 아니라 움직일 수 있는 지도가 필요하였기에
<img alt="wedding-image-01.png" src="./wedding-image-01.png" style="width: 80%;">

위의 화면에서 `소스 생성하기` 버튼을 클릭하면 아래와 같은 코드를 제공한다. 이 코드를 삽입하면 위의 지도가 나타나게 된다.

```html
<!-- * 카카오맵 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div
  id="daumRoughmapContainer1653547385965"
  class="root_daum_roughmap root_daum_roughmap_landing"
></div>

<!--
	2. 설치 스크립트
	* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
-->
<script
  charset="UTF-8"
  class="daum_roughmap_loader_script"
  src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
></script>

<!-- 3. 실행 스크립트 -->
<script charset="UTF-8">
  new daum.roughmap.Lander({
    timestamp: '1653547385965',
    key: '2adxz',
    mapWidth: '640',
    mapHeight: '360',
  }).render();
</script>
```

여기서부터 문제가 시작되는데 나의 프로젝트는 `Gatsby/React`이기 때문에 이거를 바로 집어넣을 수가 없다는 것이었다. 방법을 찾기 위해 열심히 검색하던 중 [타사 스크립트 로드](https://betterprogramming.pub/loading-third-party-scripts-dynamically-in-reactjs-458c41a7013d) 의 글을 읽고 결국 리액트에서 동적으로 카카오 스크립트를 로드해야 한다는 걸 알게 되었다.

```javascript
const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1652464367301",
    "key" : "2a8fe",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
      <div
        id="daumRoughmapContainer1652464367301"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></div>
  );
```

위와 같이 수정하니 정상적으로 동작하였다. react에서 외부 라이브러리를 이런 식으로 사용했던 경험이 특별했다.

### 🖥 배포할 때의 몇 가지 에러

1.  "build.command" failed 에러 해결하기

```cmd
6:48:44 PM: failed Building production JavaScript and CSS bundles - 42.123s
6:48:44 PM: error Generating JavaScript bundles failed
6:48:44 PM: Can't resolve '../components/Greeting' in '/opt/build/repo/src/pages'
6:48:44 PM: If you're trying to use a package make sure that '../components/Greeting' is installed. If you're trying to use a local file make sure that the path is correct.
6:48:44 PM: ​
6:48:44 PM: ────────────────────────────────────────────────────────────────
6:48:44 PM:   "build.command" failed
6:48:44 PM: ────────────────────────────────────────────────────────────────
6:48:44 PM: ​
6:48:44 PM:   Error message
6:48:44 PM:   Command failed with exit code 1: CI= npm run build (https://ntl.fyi/exit-code-1)
6:48:44 PM: ​
6:48:44 PM:   Error location
6:48:44 PM:   In Build command from Netlify app:
6:48:44 PM:   CI= npm run build
6:48:44 PM: ​
6:48:44 PM:   Resolved config
6:48:44 PM:   build:
6:48:44 PM:     command: CI= npm run build
6:48:44 PM:     commandOrigin: ui
6:48:44 PM:     publish: /opt/build/repo/public
6:48:44 PM:     publishOrigin: ui
6:48:44 PM:   plugins:
6:48:44 PM:     - inputs: {}
6:48:44 PM:       origin: ui
6:48:44 PM:       package: '@netlify/plugin-gatsby'
```

이 문제는 처음 나왔을 때 뭐지? 싶었는데 정말 어이없는 실수였다 에러 내용을 읽어본 결과 Greeting 경로가 이상하다고 하는 내용이었고 혹시나 하고 코드를 하나하나 본 결과 index.js에서 Greeting 컴포넌트를 불러오는 과정에서 경로를 잘못 적어준 것이었다. 분명 로컬에서 테스트할 때는 정상적으로 동작했기에 단순 실수를 찾는데도 조금의 시간을 들였던 거 같다. 아직도 왜 로컬에서는 정상적으로 동작했는지는 모르겠지만 에러 내용을 믿고 다음부터는 실수를 더욱 빠르게 잡도록 노력해야겠다.

2.파일 크기 초과 에러

이것 또한 단순한 문제인데 간과해서 생긴 문제였다. 정적인 사이트에서 지원하는 용량보다 더 큰 파일을 넣었기 때문에 생긴 에러인데 확인해보니 동영상파일 크기 하나가 너무 컷기 때문에 리사이즈하여 빠르게 해결할 수 있었다.

```cmd
6:56:09 PM: The function zip ../../../tmp/zisi-628dfc8c696ab60008c7d3be/__ssr.zip size is 105 MB, which is larger than the maximum supported size of 52.4 MB.
6:56:09 PM: There are a few reasons this could happen, such as accidentally bundling a large dependency or adding lots of files to "included_files".
6:56:09 PM: Contains 43 files
6:56:09 PM:
6:56:09 PM:
6:56:09 PM: These are the largest files in the zip:
```

## 🧑🏻‍💻 후기

### 👏 의미 있는 토이프로젝트

이번 프로젝트는 의미가 있어서 좋았다. 간단한 정적인 사이트지만 누군가를 위해서 열심히 만들었고 또 디자인 가안을 형에게 보여주었을 때 좋아하는 모습을 보면서 다시 한번 개발자로 직업을 정한 것에 뿌듯함을 느꼈다. 아마 나 뿐만이 아니라 모든 개발자분이 사람들에게 행복을 주는 프로젝트를 하고 싶을 것인데 이번 프로젝트는 그 니즈를 완벽히 충족한 프로젝트였다고 생각한다. 다음에도 이런 의미 있는 프로젝트를 진행할 기회가 있다면 주저 없이 시작할 것 같다.

### 🤔 개발회고

사실 입사하기 전 빠르게 만들려고 하다 보니 100% 만족스럽지는 않았다. 디자인도 만들면서 더 욕심이 났지만 절충했던 부분도 있고 외부 라이브리를 사용하여 빠르게 만들었지만 직접 기능들을 만들었으면 더 의미 있는 프로젝트였겠다라는 생각도 하였다.

하지만, 이번 프로젝트로 인하여 큰 프로젝트가 아니어도 사용자에게 좋은 가치를 줄 수 있다라는 자신감을 얻을 수 있엇고, 다음에 내 주변 사람들이 결혼식을 할 때 지금보다 조금 더 당당히 "내가 만들어 줄게!!" 라고 할 수 있을 거 같다.✌️

<br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**

```toc

```
