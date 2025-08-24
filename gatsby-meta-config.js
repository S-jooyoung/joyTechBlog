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
      role: `개발자`,
      description:
        '사용자의 행동 한 조각에도 이유가 있다고 믿는 프론트엔드 개발자입니다. 온라인에서는 조이라는 닉네임으로 활동하고 있습니다.',
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
      '스타트업의 빠른 개발 환경 속에서 웹 기반 제품을 기획부터 출시까지 주도하며 성장해온 프론트엔드 개발자입니다. UI/UX 설계, 성능 최적화, 기술적 문제 해결까지 전방위적으로 고민하며 사용자 중심의 웹 서비스를 만드는 일에 집중해왔습니다.',
      '현재는 럭셔리 여행 플랫폼 ‘아모트래블’의 초기 개발팀 멤버로 합류, 프론트엔드 개발 전반을 책임지고 있습니다. 맞춤형 여행 일정을 제공하는 웹사이트를 설계·개발하며, 사용자 경험과 비즈니스 목표를 함께 달성하는 데 기여하고 있습니다.',
      '이전에는 공유 별장 스타트업 ‘스테이빌리티’에서 프론트엔드를 단독으로 전담하며 예약 시스템과 내부 관리 백오피스를 설계 및 개발했습니다. 예약·결제 오류율 1% 미만, 신규 브랜드 런칭과 동시에 전 예약 마감이라는 실질적인 성과를 만들어냈습니다.',
      '저는 빠른 실행력과 데이터 기반 개선을 통해 더 나은 결과물을 만드는 일에 보람을 느낍니다. 문제 해결을 통해 제품의 핵심 가치를 강화하고, 팀과 함께 의미 있는 서비스를 만들어가는 일을 좋아합니다.',
    ],
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      { activity: '', activityDescription: '', job: '', jobDescriptions: [''], date: '', link: '' },
      // ========================================================
      // ========================================================
      {
        activity: '(주)심플사파리 (아모트래블)',
        activityDescription:
          '맞춤형 여행 일정을 제공하는 럭셔리 여행 플랫폼으로, 고급스러운 사용자 경험과 효율적인 예약 프로세스를 제공하는 프리미엄 오지 여행 스타트업. MYSC로부터 투자 유치 및 TIPS R&D 선정',
        job: 'Frontend Developer',
        jobDescriptions: [
          '아모트래블의 초기 멤버로 합류해 웹사이트 및 내부 시스템의 프론트엔드 개발을 전담하고 있으며, 사용자에게 맞춤형 여행 경험을 제공하는 서비스를 기획 단계부터 함께 고민하며 구현하고 있습니다.',
          '웹사이트 리뉴얼 및 UX/UI 개선: 디자인 시스템을 도입하고, UI를 전면 재설계하여 접근성과 일관성을 확보했습니다. 반복 작업을 줄이고 협업 속도를 향상시켜 프로젝트 일정 준수율을 개선했습니다.',
          '고객 분석 도구 도입: Google Analytics 및 광고 추적 태그 설정을 통해 고객 행동 분석 체계를 구축하고, 마케팅 성과 측정 및 타겟팅 전략 수립에 기여했습니다.',
          'Next.js 14 및 TypeScript 마이그레이션: 기존 프로젝트를 최신 스택으로 전환하여 유지보수성과 타입 안정성을 확보했습니다.',
          '인프라 개선: 기존 S3 + CloudFront 기반의 정적 배포 구조에서 AWS Amplify로 이전하고, Next.js의 SSR 기능을 적용하여 동적 페이지 지원과 기능 확장성을 강화했습니다.',
          '배포 전략 및 협업 체계 개선: Git Flow 기반 브랜치 전략을 도입하여 안정적인 배포 환경과 코드 리뷰 문화를 정착시켰습니다.',
        ],
        date: '2024.09 ~ ',
        link: 'https://www.ahmotravel.com/',
      },
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
        links: { post: '', github: '', googlePlay: '', appStore: '', demo: '' },
      },
      // ========================================================
      // ========================================================
      {
        title: '모바일 청첩장 생성 서비스 "아름"',
        subTitle: '청첩장 제작부터 공유까지, 예비 부부를 위한 감각적인 모바일 청첩장',
        affiliation: '개인 프로젝트 (개발 1, 디자이너 1)',
        descriptions: [
          '기획부터 개발, 배포, 마케팅까지 전 과정을 1인으로 수행하며 실사용자 중심의 제품을 직접 운영',
          '청첩장을 직접 생성해 사용한 커플들이 증가하고 있으며, 사용자 피드백을 바탕으로 서비스 지속 개선 중',
          'Next.js 기반 SSR 환경에서 SEO, 성능 최적화를 고려해 설계하고, Supabase를 이용해 인증 및 데이터 관리 구현',
          'Framer Motion으로 부드러운 애니메이션과 테마별 감성 UX를 구성하여 모바일 퍼널 전환 최적화',
          'PostHog 기반 A/B 테스트와 세션 리플레이 분석을 통해 사용자 행동을 데이터 기반으로 개선',
        ],
        techStack: ['typescript', 'react', 'next.js', 'tanstack-query', 'tailwindcss', 'supabase'],
        thumbnailUrl: 'project_areum.png',
        links: { demo: 'https://www.areum.co.kr/' },
      },
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
        links: { github: 'https://github.com/WEPIK-Team/frontend', demo: 'https://www.wepik.kr/' },
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
        links: { github: 'https://github.com/S-jooyoung/joyTechBlog', demo: 'https://joy.pe.kr/' },
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
