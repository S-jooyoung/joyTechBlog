<h1 align="center">
  Joy tech,
</h1>

## 🔍 미리보기

[Click here](https://s-jooyoung.github.io/)

## ✨ 기능

- 🔍 포스팅 검색 지원
- 🌘 다크모드 지원
- 💅 코드 하이라이팅 지원
- 💬 Utterances 댓글 기능 지원
- ⚙️ meta-config를 통한 세부 설정 가능
- 👨‍💻 자기 소개 페이지 내용 변경 가능
- 📚 포스트 페이지 자동 생성
- 🛠 sitemap.xml, robots.txt 자동 생성
- 📈 Google Analytics 지원
- 🧢 Emoji 지원

### ❌ 주의 사항

루트 경로에 있는 `google5328b2a536d6a438.html` 및 `naverbc25b2b9e393602f1725b77eff612304.html` 파일은 제가 Google Search Console과 Naver Search Advisor에 등록하기 위해 설정한 파일입니다. 이 파일들은 삭제 후 사용하시면 됩니다.

### 🔧 Netlify로 만들기

아래 버튼을 활용하면 개인 계정에 `joyTechBlog`를 사용하고 있는 Repository 생성과 Netlify에 배포를 동시에 진행할 수 있습니다.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/S-jooyoung/joyTechBlog)

### 🏃‍♀️ 실행하기

아래 명령어를 실행하여 로컬 환경에 블로그를 실행합니다.

```bash
# Install dependencies
$ yarn
or
$ yarn install

# Start development server
$ yarn develop
```

<br/>

위 명령어가 문제 없이 실행됐다면 [http://localhost:8000](http://localhost:8000)에서 블로그를 확인하실 수 있습니다.

## ⚙️ 블로그 정보 입력하기

배포와 개발 환경 설정이 완료되었습니다! 🙌

- 이제 `gatsby-meta-config.js` 파일에서 블로그 정보를 입력하여 나만의 블로그를 완성하세요.

### 1. 블로그 기본 정보

```shell
title: '', // oy
type: '', // tech
logo: '', // /logo.svg
description: '', // 웹 프론트엔드 개발과 관련한 포스트를 작성하고 있습니다.
language: '', // `ko`, `en` => currently support versions for Korean and English
siteUrl: '', // https://joy.pe.kr
siteMap: '', // https://joy.pe.kr//sitemap-pages.xml
ogImage: '', // Path to your in the 'static' folder, /ogImage.png
```

### 2. 댓글 설정

블로그 글에 댓글 기능을 추가하고 싶다면, Utterances를 통해 설정할 수 있습니다.

> utterances 사용방법은 [링크](https://utteranc.es/)를 참고하세요.

```shell
comments: {
  utterances: {
    repo: '', // S-jooyoung/joyTech-comments
  },
},
```

### 3. 글쓴이 정보

글쓴이(author) 정보는 메인 페이지와 소개 페이지 상단의 ‘Bio’ 섹션에 사용되며, 이 섹션에서는 글쓴이를 소개하는 내용이 표시됩니다. description에 자신을 설명하는 문구를 입력하면 해당 문구가 표시됩니다. Bio에 표시되는 이미지를 변경하려면 assets 폴더에 원하는 파일을 추가한 후, 파일 이름을 thumbnail 및 thumbnailSmall 항목에 입력해 주시면 됩니다.

```shell
author: {
  name: '', // 신주영
  bio: {
    role: '', // 개발자
    description: '',// 디자인과 성능 최적화에 관심이 많은 프론트엔드 개발자입니다. 온라인에서는 조이라는 닉네임으로 활동하고 있습니다.
    thumbnail: '', // Path to the image in the 'asset' folder, myPicture.jpg
    thumbnailSmall: '', // myPicture_small.jpg
  },
  social: {
    github: '', // https://github.com/S-jooyoung
    linkedIn: '', // https://www.linkedin.com/in/joy-shin/
    email: '', // jooyoung.dev@gmail.com
  },
},
```

## ⚙️ 자기 소개 페이지 만들기

소개 페이지 역시 gatsby-meta-config.js 파일을 통해 생성됩니다. about 하위에 있는 introduce, timestamps, projects 항목에 각각 정보를 입력하면, 소개 페이지가 자동으로 생성됩니다.

### 1. timestamps

timestamp 항목에 이력을 아래와 같이 작성하시면, 입력한 순서에 따라 해당 내용이 표시됩니다.

```shell
{
  activity: '(주)스테이빌리티',
  activityDescription:
    '2023년 서비스 출시 이후 주간 거래액 1억 원을 돌파한 하이엔드 숙박 예약 플랫폼 ‘스테이그라운드’.',
  job: 'Frontend Developer',
  jobDescriptions: [
    '프론트엔드 개발을 책임지며 밀리언그라운드에 필요한 모든 서비스를 만들고 있습니다. 별장을 구매한 오너분들과 일반 인분들이 편하게 예약하실 수 있게 예약 서비스를 개발하고 사용자에게 서비스를 제공하는 데 필요한 내부 관리 시스템을 개발하고 있습니다.',
    '아키텍처 설계 및 컨벤션 정립: 기술 스택 선정부터 시작하여 아키텍처를 설계하고, 코드 컨벤션을 정립하여 일관된 코드 스타일과 유지 보수성을 높였습니다.',
    '예약 서비스 개발: 밀리언그라운드 서비스에 필요한 예약 서비스 전체를 설계하고 개발했습니다. 이를 통해 별장 구매자와 일반 사용자가 간편하게 예약을 진행할 수 있도록 하였습니다.',
    '종합 예약관리 시스템 개발 및 운영: 예약 관리, 유저 관리, 오너 관리, 요금 관리, 문자 전송, 대시보드 등 전반적인 기능을 포함한 종합 예약 관리 시스템을 개발 및 운영했습니다. 시스템 도입 후 서비스 응대팀의 업무를 줄이며, 고객 문의 응답 시간을 50% 단축하는 성과를 이루었습니다.',
    '광고 효율성 분석을 위한 이벤트 추적시스템 구축: 광고 효율을 120% 개선하고 예약률을 52% 상승시키는데 기여 했습니다.',
    '검색엔진 최적화(SEO) 개선: 테크니컬 SEO를 적용하여 사이트의 검색엔진 노출을 개선했습니다. 동적 사이트맵과 robots.txt 파일을 생성 및 관리하여 검색엔진 크롤러의 효율적인 접근을 지원했습니다. Lighthouse SEO 및 성능 점수에서 평균 95점을 달성했으며, 구글 검색엔진에서 평균 게재 순위 8위를 달성하였습니다.',
  ],
  date: '2022.11 ~ ',
  link: 'https://www.staybility.co.kr/',
},
```

### 2. projects

마찬가지로, 개인 프로젝트를 배열 형태로 제공해주시면, 입력한 순서에 따라 해당 내용이 표시됩니다.

```shell
{
  title: '제주 청년 정책 통합 플랫폼 "뿌리"',
  subTitle: '제주 청년들을 위한 정책 정보를 한눈에 볼 수 있도록 설계된 통합 플랫폼',
  affiliation: '팀 프로젝트 (프론트엔드 2, 백엔드 1, 디자이너 1, 기획자 1)',
  descriptions: [
    '카카오와 구름에서 주최한 해커톤에서 4일간 개발한 프로젝트로 6개 팀 중 대상 수상',
    '프론트엔드를 리드하며 화면 퍼블리싱과 API 연동 작업 진행',
  ],
  techStack: ['typescript', 'react', 'next.js', 'tanstack-query', 'zustand', 'tailwindcss'],
  thumbnailUrl: 'project_ppoori.png',
  links: {
    github: 'https://github.com/9OORMTHON-PPOORI/ppoori-front',
    post: 'https://joy.pe.kr/9oormthon-10th-review/',
    demo: 'https://ppoori.vercel.app',
  },
},
```

## ⚙️ 글 쓰기

블로그에 글을 작성하려면 /content 폴더 아래에 디렉토리를 생성하고, 그 안에 index.md 파일을 만들어 마크다운 문법을 사용하여 작성하시면 됩니다.

> 이 때, 폴더의 이름이 글 경로가 됩니다.

### 메타 정보

index.md 파일의 상단에는 아래와 같이 emoji, title, date, author, tags, categories 정보를 포함해야 합니다.

> 현재 이모지는 별도로 표시되는 화면이 없으므로, 원하는 이모지를 자유롭게 선택하시면 됩니다. (추후 삭제 예정입니다.)

```shell
---
emoji: ⛅️
title: 구름톤 10기 참가 대상 후기
date: '2024-06-30 22:30:00'
author: 조이
tags: 에세이 github-pages gatsby
categories: 에세이
thumbnail: './thumbnail.png'
---
```

### 이미지 경로

```shell
![사진](./[이미지 파일명])
```

### 💡 버그 리포트 & 문의

궁금하신 점이 있으시면 [이슈](https://github.com/S-jooyoung/joyTechBlog/issues/new)에 남겨주세요. 최대한 빠르게 답변 드리겠습니다.🙋‍♂️

> 🤔 특정 기능이 없어서 테마 사용을 망설이시거나, 제안하고 싶은 기능이 있으시면,  
> 👉 [여기](https://github.com/S-jooyoung/joyTechBlog/issues)에 남겨주세요! 적극적으로 반영하겠습니다 :)
