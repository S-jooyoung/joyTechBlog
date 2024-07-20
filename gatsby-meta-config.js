module.exports = {
  title: `oy`,
  type: `tech`,
  logo: `/logo.svg`,
  description: `웹 프론트엔드 개발과 관련한 포스트를 작성하고 있습니다.`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://joy.pe.kr`, // https://s-jooyoung.github.io
  siteMap: `https://joy.pe.kr//sitemap-pages.xml`, // https://s-jooyoung.github.io/sitemap-pages.xml
  ogImage: `/ogImage.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: 'S-jooyoung/joyTech-comments',
    },
  },
  ga: 'G-BE92GNG3XF', // Google Analytics Tracking ID
  as: 'ca-pub-4083591465738564',
  author: {
    name: `신주영`,
    bio: {
      role: `개발자`,
      description:
        '디자인과 성능 최적화에 관심이 많은 프론트엔드 개발자입니다. 온라인에서는 조이라는 닉네임으로 활동하고 있습니다.',
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
      '사용자 중심의 소프트웨어 개발을 통해 비즈니스 성장을 이끌어가는 프론트엔드 개발자입니다. 2022년부터 다양한 스타트업에서 활동하며 여러 프로젝트를 성공적으로 수행해 왔습니다.',
      '공유 별장 스타트업 스테이빌리티에서는 프론트엔드 업무를 혼자 담당하며 밀리언그라운드 서비스의 모든 IT 기능을 개발 및 운영했습니다. 현재 예약 오류율과 결제 오류율을 1% 미만으로 유지하고 있으며, 2024년 초에 오픈한 “어나더 빌라”는 2024년 예약을 모두 완료했습니다.',
      '스타법무법인에서는 단순 업무를 자동화하는 백오피스를 기획 및 개발하여 서비스팀의 주당 업무 시간을 30시간 이상 절감했습니다. 또한, 각종 페이지의 UI/UX 디자인을 개선하여 사용자 경험을 향상한 경험이 있습니다.',
      '저는 문제를 해결하며 비즈니스 성장에 기여하는 것을 최우선으로 생각합니다. 이를 위해 빠른 개발과 배포를 통해 신속하게 결과물을 전달하고, 데이터를 활용해 사용자 이해도를 높이는 역량을 지속적으로 키워왔습니다.',
    ],
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        activity: '',
        activityDescription: '',
        job: '',
        jobDescriptions: [''],
        date: '',
        link: '',
      },
      // ========================================================
      // ========================================================
      {
        activity: '(주)스테이빌리티',
        activityDescription:
          '2023년 서비스 출시 이후 주간 거래액 1억 원을 돌파한 하이엔드 숙박 예약 플랫폼 ‘스테이그라운드’. LG전자, 유니콘 창업자, 외국계 임원들이 소유한 공유 별장 플랫폼 ‘밀리언그라운드’를 서비스하는 인스타그램 13만 팔로워를 보유한 공유 별장 스타트업. 수이제네리스, 인포뱅크, 제노인베스트먼트 등으로부터 투자 유치.',
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
      {
        activity: '스타법무법인',
        activityDescription: '누적 6만 명이 넘는 고객 상담, 성장률 100% 종합 법률 서비스 ',
        job: 'Frontend Developer',
        jobDescriptions: [
          '업무 자동화 백오피스 개발: 단순 업무를 자동화하는 백오피스를 기획 및 개발하여 서비스팀의 주당 업무 시간을 30 시간 이상 절감했습니다.',
          'UI/UX 개선 디자인 개선: 각종 페이지의 UI/UX 디자인을 개선하여 사용자 경험을 크게 향상시켰습니다.',
        ],
        date: '2022.07 ~ 2022.09',
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
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '연인, 친구들을 위한 문답서비스 "위픽"',
        subTitle: '서로 알아가고 싶은 상대가 있는 사람들을 위한 문답 서비스',
        affiliation: '팀 프로젝트 (프론트엔드 3, 백엔드 2, 디자이너 1)',
        descriptions: [
          '프론트엔드 개발자로 기획부터 참여하여 메인 페이지와 SNS 공유 화면, 질문 작성 페이지 기능 등을 개발',
          '동적 메타데이터와 사이트맵 설정 등 테크니컬 SEO 최적화 작업 진행',
          '일일 최고 방문자 수 1,012명, 질문 작성 수 76개',
        ],
        techStack: ['typescript', 'react', 'next.js', 'tanstack-query', 'zustand', 'tailwindcss'],
        thumbnailUrl: 'project_wepik.png',
        links: {
          github: 'https://github.com/WEPIK-Team/frontend',
          demo: 'https://www.wepik.kr/',
        },
      },
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
      {
        title: '기술 블로그 "조이 테크"',
        subTitle: 'Gatsby를 이용해 Netlify에 개인 블로그를 구축하여, 콘텐츠를 운영',
        affiliation: '개인 프로젝트',
        descriptions: [
          'Gatsby v4 to v5 마이그레이션 진행',
          '누적 방문자 수 10,210명, 월간 방문자 수 320명',
        ],
        techStack: ['javascript', 'react', 'gatsby', 'graphql', 'scss'],
        thumbnailUrl: 'project_blog.png',
        links: {
          github: 'https://github.com/S-jooyoung/joyTechBlog',
          demo: 'https://joy.pe.kr/',
        },
      },
      {
        title: '모바일 청첩장 템플릿',
        subTitle: '친형의 결혼식을 위해 짧은 기간동안 만든 모바일 청첩장',
        affiliation: '개인 프로젝트',
        descriptions: [
          '실제 결혼하시는 분들이 깃허브에서 포크 하여 사용하는 것을 보며, 간단한 프로젝트라도 목표가 명확하면 성과를 낼 수 있다는 것을 느낌',
        ],
        techStack: ['javascript', 'react', 'gatsby', 'styled-components'],
        thumbnailUrl: 'project_wedding.png',
        links: {
          github: 'https://github.com/S-jooyoung/WEDDING_INVITATION',
          post: 'https://joy.pe.kr/gatsby-wedding-deploy/',
          demo: 'https://wedding-templete.netlify.app',
        },
      },
    ],
  },
};
