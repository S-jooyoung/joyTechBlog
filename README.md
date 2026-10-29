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

글쓴이(author) 정보는 메인 페이지 상단의 ‘Bio’ 섹션에 사용되며, 이 섹션에서는 글쓴이를 소개하는 내용이 표시됩니다. description에 자신을 설명하는 문구를 입력하면 해당 문구가 표시됩니다. Bio에 표시되는 이미지를 변경하려면 assets 폴더에 원하는 파일을 추가한 후, 파일 이름을 thumbnail 및 thumbnailSmall 항목에 입력해 주시면 됩니다.

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
