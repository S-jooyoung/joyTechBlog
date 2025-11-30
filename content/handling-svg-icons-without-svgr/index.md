---
emoji: 🧑🏻‍💻
title: SVGR 없이도 SVG 아이콘을 잘 다룰 수 있을까?
date: '2025-11-30 23:00:00'
author: 조이
tags: Next.js SVG Turbopack 프론트엔드 최적화
categories: 개발
thumbnail: './thumbnail.png'
---

> Next.js 프로젝트에서 SVG 아이콘을 다룰 때 SVGR을 많이 사용하시죠. 저도 한동안 그랬습니다. SVG를 React 컴포넌트로 변환해주니까 사용법도 직관적이고, CSS로 색상 바꾸기도 편하고, 뭐 하나 불편한 게 없었거든요.
>
> 그런데 아이콘이 수십 개, 수백 개로 늘어나니까 번들 사이즈가 눈에 띄게 커지더라고요. 생각해보면 당연한 거였어요. SVGR은 SVG 마크업 전체를 JavaScript로 변환하니까, 아이콘 하나하나가 전부 JS 번들에 들어가는 셈이거든요. 정적 에셋으로 처리할 수 있는 걸 굳이 JS로 끌어오고 있었던 거죠.
>
> 한번 인지하고 나니 찜찜하더라고요. 이번 글에서는 SVGR 없이 SVG 아이콘을 어떻게 더 잘 다룰 수 있을지 고민하고, 그 과정에서 개선했던 포인트들을 공유해보려 합니다.

![svg-bundle-size.png](./svg-bundle-size.png)

---

## 내가 원하는 조건

대안을 찾기 전에 먼저 제가 원하는 조건을 정리해봤습니다.

1. 추가 네트워크 요청 없이 **즉시 렌더링**될 것
2. **JavaScript 번들 비대화 없이** 정적 에셋으로 처리할 것
3. **CSS로 아이콘 색상**을 바꿀 수 있을 것
4. Next.js 16의 기본 번들러인 **Turbopack에서 동작**할 것

SVGR은 1, 3번은 만족하지만 2번에서 탈락입니다. 그럼 다른 방법들은 어떨까요?

---

## 대안들을 찾아봤지만

### Next.js `<Image />` 컴포넌트

가장 먼저 시도한 건 Next.js가 기본 제공하는 방식이었습니다.

```tsx
import Image from 'next/image';
import myIcon from './icon.svg';

export default function Page() {
  return <Image src={myIcon} alt="my icon" />;
}
```

Turbopack이 SVG를 해시된 파일명으로 복사해주고, width/height도 자동 추출해주니 편하긴 합니다. 로고나 큰 일러스트에는 좋은 방법이에요.

하지만 아이콘 용도로는 맞지 않았습니다. 아이콘마다 별도 HTTP 요청이 발생해서 즉시 표시가 안 되고, 무엇보다 CSS로 색상을 바꿀 수가 없었거든요. 1번과 3번에서 탈락.

### SVG 스프라이트

다음으로 시도한 건 전통적인 스프라이트 방식이었습니다. 여러 SVG를 하나의 파일로 합치고 `<use>` 태그로 참조하는 거죠.

```tsx
<svg>
  <use href="/sprite.svg#icon1" />
</svg>
```

Turbopack 환경에서 스프라이트를 만들려면 두 가지 방법이 있는데요. 프리빌드 스크립트로 전체 아이콘을 합치거나, 로더가 임포트된 것만 모아서 자동 생성하거나.

전자는 사용하지 않는 아이콘까지 전부 포함되는 게 마음에 안 들었고, 후자는 현재 Turbopack 로더가 `this.emitFile()` 메서드를 지원하지 않아서 아예 불가능했습니다.

거기다 치명적인 문제가 하나 더 있었는데, Safari에서 SVG 필터가 포함된 스프라이트 아이콘이 렌더링되지 않는 버그가 있더라고요. 스프라이트 방식은 여기서 포기했습니다.

---

![svg-alternatives.png](./svg-alternatives.png)

## 그래서 직접 만들기로 했습니다

기존 방법들이 전부 어딘가 하나씩 부족하니, 결국 직접 만들어보기로 했습니다.

아이디어는 단순했어요. **작은 SVG를 Data URI로 인라인**하면 어떨까?

```javascript
{
  src: "data:image/svg+xml,...",
  width: 32,
  height: 32
}
```

이렇게 하면 네트워크 요청 없이 즉시 렌더링되고, SVG가 JS 번들에 React 컴포넌트로 들어가는 게 아니라 정적 문자열로만 존재하니 SVGR의 성능 문제도 피할 수 있습니다. 게다가 `<Image />` 컴포넌트와 동일한 인터페이스를 유지할 수 있어서 사용법도 일관되고요.

다행히 원하는 게 명확해지니 구현은 어렵지 않았습니다. 요즘은 Claude Code한테 이런 거 시키면 뚝딱 만들어주거든요. 🤖

### 커스텀 Turbopack 로더 구현

로더가 해야 할 일은 세 가지입니다.

1. SVG 콘텐츠를 최적화된 Data URI로 변환
2. SVG의 고유 width, height 추출
3. `{ src, width, height }` 객체로 반환

다행히 이 작업들은 기존 패키지들로 쉽게 처리할 수 있었습니다.

- `svgo`: SVG 마크업 최적화
- `mini-svg-data-uri`: 압축된 Data URI 생성
- `image-size`: 이미지 크기 추출 (Next.js 내부에서도 쓰는 라이브러리)

그래서 로더 코드가 생각보다 짧게 나왔어요.

```javascript
// inline-svg-loader.js
const { optimize } = require('svgo');
const svgToMiniDataURI = require('mini-svg-data-uri');
const { imageSize } = require('image-size');

module.exports = function (content) {
  this.cacheable?.();

  const optimized = optimize(content);
  const src = svgToMiniDataURI(optimized.data);
  const { width, height } = imageSize(Buffer.from(content));
  const result = { src, width, height };

  return `export default ${JSON.stringify(result)};`;
};
```

참고로 Turbopack은 아직 ESM 로더를 지원하지 않아서 CommonJS로 작성해야 합니다.

이 로더를 `next.config.js`에 등록하면 끝이에요.

```javascript
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['./inline-svg-loader.js'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
```

---

## 해결해야 할 문제들

로더를 만들고 나니 아이콘이 잘 표시됐습니다. 하지만 여기서 끝이 아니었어요. 실제로 쓰려다 보니 추가로 해결해야 할 문제가 두 가지 있었습니다.

### 문제 1: 큰 SVG까지 전부 인라인된다

위 설정대로면 크기가 큰 SVG도 전부 인라인됩니다. 42KB짜리 로고 이미지까지 Data URI로 변환되면 오히려 JS 번들이 비대해지는 역효과가 나거든요. 애초에 번들 사이즈를 줄이려고 시작한 건데 원래 생각이 무색해지게 되는 셈이죠.

다행히 Next.js 16에 추가된 Turbopack의 condition rules 기능으로 해결할 수 있었습니다. 파일 내용을 정규식으로 매칭해서 조건부로 로더를 적용하는 거예요.

```javascript
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['./inline-svg-loader.js'],
        condition: {
          content: /^[\s\S]{0,4000}$/, // 약 4KB 이하만 인라인
        },
        as: '*.js',
      },
    },
  },
};
```

`[\s\S]`는 줄바꿈을 포함한 모든 문자를 매칭하는 패턴입니다. `{0,4000}`으로 대략 4KB 이하의 파일만 매칭되도록 했어요.

이렇게 하면 작은 아이콘은 Data URI로 인라인되고, 큰 이미지는 기본 Next.js 동작대로 외부 파일로 처리됩니다. 둘 다 동일한 `{ src, width, height }` 인터페이스를 반환하니까 사용하는 쪽에서는 신경 쓸 필요가 없고요.

### 문제 2: CSS로 색상을 바꾸고 싶다

Data URI 방식은 SVG가 `<img>` 태그로 렌더링되기 때문에 SVGR처럼 CSS로 내부 색상을 직접 바꿀 수가 없습니다. 처음에 세웠던 조건 중 3번을 아직 만족하지 못하는 거죠.

SVG 내부를 세밀하게 스타일링해야 한다면 어쩔 수 없이 DOM에 직접 렌더링해야 합니다. 하지만 대부분의 UI 아이콘은 단색인 경우가 많잖아요. 그런 경우라면 **CSS 마스킹**으로 해결할 수 있습니다.

원리는 간단해요. SVG를 직접 보여주는 대신, SVG 모양으로 배경색을 잘라내는 거예요.

이걸 React 컴포넌트로 만들면 이렇게 됩니다.

```tsx
import { type ComponentProps } from 'react';
import { type StaticImageData } from 'next/image';

type IconProps = Omit<ComponentProps<'img'>, 'src'> & {
  src: StaticImageData;
};

const EMPTY_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E`;

export default function Icon({ src, width, height, style, ...props }: IconProps) {
  return (
    <img
      width={width ?? src.width}
      height={height ?? src.height}
      src={EMPTY_SVG}
      style={{
        ...style,
        backgroundColor: 'currentcolor',
        mask: `url("${src.src}") no-repeat center / contain`,
      }}
      {...props}
    />
  );
}
```

빈 SVG를 `src`에 넣고, 실제 아이콘은 CSS `mask`로 적용하는 방식이에요. `backgroundColor`를 `currentcolor`로 설정했기 때문에 부모의 `color` 값을 그대로 따라갑니다.

사용법은 이렇습니다.

```tsx
import Icon from './Icon';
import myIcon from './icon.svg';

// style로 색상 지정
<Icon src={myIcon} style={{ color: 'red' }} />

// Tailwind로 색상 지정
<Icon src={myIcon} className="text-green-600" />

// 크기와 색상 함께 지정
<Icon src={myIcon} width={64} height={64} className="text-blue-600" />
```

---

## 정리하며

처음에 세웠던 조건을 다시 점검해볼게요.

1. 추가 네트워크 요청 없이 즉시 렌더링 → Data URI로 해결
2. JavaScript 번들 비대화 방지 → 정적 문자열로만 존재
3. CSS로 아이콘 색상 변경 → CSS 마스킹으로 해결
4. Turbopack 호환 → 커스텀 로더로 해결

물론 이 방식이 모든 상황에 맞는 건 아닙니다. SVG 내부를 세밀하게 제어해야 하거나, 애니메이션을 넣어야 하거나, 멀티 컬러 아이콘이라면 여전히 SVGR이나 인라인 SVG가 필요해요.

하지만 단색 아이콘을 많이 쓰는 프로젝트라면 이 방식이 꽤 실용적인 대안이 될 수 있을 것 같습니다. 혹시 비슷한 고민을 하고 계셨다면 한번 시도해보세요!

<br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**
