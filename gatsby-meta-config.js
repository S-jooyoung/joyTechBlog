module.exports = {
  logo: `/logo.png`,
  description: `웹 프론트엔드 개발과 관련한 포스트를 작성하고 있습니다.`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://joy.pe.kr`, // https://s-jooyoung.github.io
  siteMap: `https://joy.pe.kr//sitemap-pages.xml`, // https://s-jooyoung.github.io/sitemap-pages.xml
  ogImage: `/ogImage.png`, // Path to your in the 'static' folder
  comments: {
    giscus: {
      repo: 'S-jooyoung/joyTech-comments',
      repoId: 'R_kgDOJBiFqg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJBiFqs4CuiOB',
      mapping: 'pathname',
    },
  },
  ga: 'G-BE92GNG3XF', // Google Analytics Tracking ID
  as: 'ca-pub-4083591465738564',
  author: {
    name: `신주영`,
    bio: {
      role: `Product Engineer`,
      description: '만들면서 배운 것을 기록하는 프로덕트 엔지니어 조이입니다.',
      thumbnail: 'myPicture.jpg', // Path to the image in the 'asset' folder
      thumbnailSmall: 'myPicture_small.jpg',
    },
    social: {
      github: `https://github.com/S-jooyoung`,
      linkedIn: `https://www.linkedin.com/in/joy-shin/`,
      email: `jooyoung.dev@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    introduce: [
      '회사 안팎에서 제품을 만들고 있습니다. 이 블로그에는 그 과정에서 부딪힌 문제와 풀어 간 방법을 적습니다.',
    ],
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      { activity: '', activityDescription: '', job: '', date: '', link: '' },
      // ========================================================
      // ========================================================
      {
        activity: '(주)심플사파리 · 아모트래블',
        activityDescription: '맞춤형 여행을 설계해 주는 여행 서비스',
        job: 'Frontend Engineer',
        date: '2024.09 — 현재',
        link: 'https://www.ahmotravel.com/',
      },
      {
        activity: '(주)스테이빌리티',
        activityDescription: '별장 조각 소유·예약 서비스',
        job: 'Frontend Developer',
        date: '2022.11 — 2024.08',
        link: 'https://www.staybility.co.kr/',
      },
      {
        activity: '스타법무법인',
        activityDescription: '종합 법률 서비스',
        job: 'Frontend Developer (인턴)',
        date: '2022.07 — 2022.09',
        link: 'https://www.star-law.com/',
      },
      // {
      //   date: '2021.09 ~ 2022.02',
      //   activity: '대구 ICT 산업 혁신아카데미 4기',
      // },
      // {
      //   date: '2015.03 ~ 2021.08',
      //   activity: '영남대학교 정보통신공학과',
      // },
    ],
    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        subTitle: '',
        affiliation: '',
        descriptions: ['', ''],
        techStack: ['', ''],
        thumbnailUrl: '',
        links: { post: '', github: '', googlePlay: '', appStore: '', demo: '' },
      },
      // ========================================================
      // ========================================================
      {
        title: '모바일 청첩장 생성 서비스 "아름"',
        subTitle: '예비부부가 테마를 고르고 내용을 편집해 만드는 무료 모바일 청첩장 서비스',
        affiliation: '개인 프로젝트 (1인 기획·개발·운영)',
        descriptions: [
          '결혼 비용의 불투명함을 다룬 기사를 보고 시작해, 고객이 어떻게 골라도 예쁘게 나오는 편한 편집을 목표로 설계',
          '공통 구조에서 디자인을 파생하는 테마 시스템과 실시간 미리보기 에디터 개발',
          '웨딩 카페·단체 카톡방에 직접 소개하며 알리기 시작해 이용자 입소문으로 확산',
        ],
        techStack: ['typescript', 'next.js', 'tailwindcss', 'motion', 'supabase'],
        thumbnailUrl: 'project_areum.png',
        links: { demo: 'https://www.areum.co.kr/' },
      },
    ],
  },
};
