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
      role: `프론트엔드 엔지니어`,
      description:
        '사용자의 행동 한 조각에도 이유가 있다고 믿는 프론트엔드 엔지니어입니다. 문제를 정의하고 빠르게 배포한 뒤 데이터로 다음 개선을 찾습니다. 온라인에서는 조이라는 닉네임으로 활동하고 있습니다.',
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
      '무엇을 풀지 정하는 단계부터 참여합니다. 출시한 뒤 실제로 나아졌는지 확인하는 일까지 함께 하고 있습니다.',
      '현재는 맞춤형 여행 플랫폼 ‘아모트래블’에서 고객 홈페이지와 상담 운영 어드민, 신규 서비스의 프론트엔드를 담당하고 있습니다. 이전에는 상담·견적·예약을 세 곳에서 각각 수기로 만들었습니다. 이 흐름을 고객에게 전달되는 일정표 하나를 단일 기준으로 삼는 구조로 바꿨습니다. 견적과 예약은 이제 일정표에서 자동으로 따라옵니다.',
      '홈페이지는 광고 유입에 크게 의존하던 구조였습니다. 보유한 여행지와 숙소를 문의 전에 충분히 탐색할 수 있도록 문의용 랜딩을 탐색형으로 전면 리뉴얼했습니다. 고객 후기와 뉴스레터를 사이트 안에 들인 뒤 한·영 다국어와 영문 SEO를 붙였습니다. 이 변화들이 함께 작동하면서 검색으로 들어오는 방문자가 늘고 머무는 시간도 길어졌습니다.',
      '필요하면 프론트엔드 밖으로도 나갑니다. 외국인 대상 내한여행 서비스의 초기 버전을 디자이너와 둘이서 5일 만에 출시했습니다. 비개발 직군의 반복 확인을 줄이는 사내 AI 봇도 제안해 만들었습니다. 계측을 직접 붙여 두어야 개선했다는 말 대신 무엇이 어떻게 나아졌는지 이야기할 수 있다는 것을 이 과정에서 배웠습니다. 그전에는 공유 별장 예약 플랫폼 ‘스테이빌리티’에서 프론트엔드를 전담했습니다.',
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
          '아모트래블의 초기 멤버로 합류해 고객 홈페이지와 상담 운영 어드민, 신규 서비스의 프론트엔드를 맡고 있습니다. 필요한 범위에서는 API와 인프라, AI 도구까지 직접 붙여 제품이 끝까지 굴러가게 만듭니다.',
          '트래블러리 운영 어드민 구축: 상담·견적·예약을 세 곳에서 각각 수기로 만들고 변경마다 맞춰야 했습니다. 고객에게 전달되는 일정표 하나를 단일 기준으로 삼고 견적과 예약이 자동으로 파생되도록 바꿨습니다. 사내 작업 로그 실측 기준으로 작성 시간이 단일국가 일정은 약 83%, 다국가 일정은 약 80% 줄었습니다. 도입 후 확인된 싱크 실패는 0건입니다. 드래그 앤 드롭 멀티선택·이동과 Tiptap 에디터를 구현했습니다.',
          '문의 직후 AI 샘플 일정과 계정 연결: 문의를 마친 고객이 상담 전까지 아무 정보도 받지 못하던 구간에, 기존 일정 중 가장 유사한 사례를 AI가 찾아 바로 전달하고 일정표를 고객 계정과 연결했습니다. 배포 전후 각 28일을 비교했을 때 문의량은 거의 같았지만 문의 고객의 계정 연결률은 40.7%p 높아졌습니다.',
          '홈페이지 탐색형 리뉴얼과 검색 노출 확장: 광고 유입 의존도를 낮추기 위해 문의용 랜딩을 여행지·숙소·고객 후기를 탐색하는 구조로 전면 리뉴얼했습니다. 운영자가 직접 발행하는 사내 CMS도 구축해 연결했습니다. 이어서 한·영 다국어와 영문 SEO를 붙였습니다. 이 변화들의 복합 기여로 검색 노출 페이지가 초기 기준 대비 약 4,100% 늘었습니다(GSC 기준).',
          '데이터로 검증한 전환 개선: 문의 폼을 단일 스텝에서 멀티스텝으로 바꾸는 안을 A/B 테스트로 검증했습니다. 전환율이 16.7% 개선되는 것을 확인한 뒤 적용했습니다. 지금은 최종 개인정보 입력 단계의 이탈 원인을 다음 검증 과제로 두고 있습니다.',
          '운영을 멈추지 않는 점진 이관: Next.js 12에서 14로, JavaScript에서 TypeScript로, Fetch에서 TanStack Query로 기능 단위로 옮겨 배포를 멈추지 않았습니다. 계측 인프라도 직접 구축해 운영했습니다.',
          '신규 서비스와 사내 도구: 외국인 대상 내한여행 서비스의 초기 버전을 디자이너와 2인으로 5일 만에 출시했습니다(개발 단독). 퍼널을 Compound Component로 패턴화하고 Figma 토큰과 코드의 이름을 맞춘 규칙은 이후 다른 화면과 동료 개발자가 그대로 채택해 팀 공통 규약이 됐습니다. 사내에서는 Slack 자연어 요청을 Jira 티켓과 사내 지표 조회로 잇는 AI 봇을 제안해 만들고, 그룹투어 호스트 모집과 추천 링크 기반 문의 귀속 흐름도 구현했습니다.',
        ],
        date: '2024.09 ~ ',
        link: 'https://www.ahmotravel.com/',
      },
      {
        activity: '(주)스테이빌리티',
        activityDescription:
          '하이엔드 숙박 예약 플랫폼 ‘스테이그라운드’와 공유 별장 플랫폼 ‘밀리언그라운드’를 서비스하는 공유 별장 스타트업. 수이제네리스, 인포뱅크, 제노인베스트먼트 등으로부터 투자 유치.',
        job: 'Frontend Developer',
        jobDescriptions: [
          '프론트엔드를 전담하며 밀리언그라운드에 필요한 서비스를 만들었습니다. 별장을 구매한 오너분들과 일반 고객이 모두 편하게 예약하실 수 있도록 예약 서비스를 개발하고, 그 서비스를 운영하는 데 필요한 내부 관리 시스템까지 함께 개발했습니다.',
          '아키텍처 설계 및 컨벤션 정립: 기술 스택 선정부터 시작해 아키텍처를 설계했습니다. 코드 컨벤션을 정립해 코드 스타일을 통일하고 유지 보수성을 높였습니다.',
          '예약 서비스 개발: 밀리언그라운드에 필요한 예약 서비스 전체를 설계하고 개발해 별장 구매자와 일반 사용자가 간편하게 예약할 수 있도록 했습니다. 예약·결제 오류율은 1% 미만으로 유지했습니다. 신규 브랜드 ‘어나더 빌라’의 예약 서비스를 출시해 첫해 예약 전량 마감에 기여했습니다.',
          '종합 예약관리 시스템 개발 및 운영: 예약 관리, 유저 관리, 오너 관리, 요금 관리, 문자 전송, 대시보드 등 전반적인 기능을 포함한 종합 예약 관리 시스템을 개발하고 운영했습니다. 시스템 도입 후 서비스 응대팀의 업무를 줄이며 고객 문의 응답 시간을 50% 단축했습니다.',
          '광고 효율성 분석을 위한 이벤트 추적 시스템 구축: 채널별 성과를 측정할 수 있게 만들어 광고 효율 120% 개선과 예약률 52% 상승에 기여했습니다.',
          '검색엔진 최적화(SEO) 개선: 테크니컬 SEO를 적용해 사이트의 검색엔진 노출을 개선했습니다. 동적 사이트맵과 robots.txt 파일을 생성·관리해 검색엔진 크롤러의 효율적인 접근을 지원했고, Lighthouse SEO 및 성능 점수 평균 95점과 구글 검색엔진 평균 게재 순위 8위를 달성했습니다.',
        ],
        date: '2022.11 ~ 2024.08',
        link: 'https://www.staybility.co.kr/',
      },
      {
        activity: '스타법무법인',
        activityDescription: '누적 6만 명이 넘는 고객 상담, 성장률 100% 종합 법률 서비스 ',
        job: '개발팀 인턴',
        jobDescriptions: [
          '상담 배정 백오피스 개발: 지원팀은 전화로 응대 가능한 변호사를 찾고 메신저로 상담 내용을 전달했습니다. 이 흐름을 하나의 백오피스에서 이어지게 하는 프로젝트에서 지원팀·변호사 화면을 개발했습니다. 상담을 입력하면 응대 가능한 변호사가 자동으로 집계되고 정리된 정보가 바로 인계되게 했습니다. 업무량 추산 기준 주 약 30시간의 수동 업무를 절감했습니다.',
          'UI/UX 디자인 개선: 각종 페이지의 UI/UX 디자인을 개선해 사용자 경험을 높였습니다.',
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
          '월간 이용 약 6만 (PostHog·Google Analytics 계측, 2026.07 기준)',
          '폼 편집이 즉시 반영되는 실시간 미리보기 에디터와 여러 디자인을 공통 구조에서 파생시키는 템플릿·테마 시스템 설계',
          'Next.js 기반 SSR 환경에서 SEO, 성능 최적화를 고려해 설계하고, Supabase를 이용해 인증 및 데이터 관리 구현',
          'Motion으로 스크롤 애니메이션과 테마별 UX를 구성하고, PostHog A/B 테스트·세션 리플레이 분석으로 사용자 행동을 데이터 기반으로 개선',
          '운영을 자동화해 서버 비용을 자체 충당하는 구조로 부담 없이 지속 운영 중',
        ],
        techStack: [
          'typescript',
          'react',
          'next.js',
          'tanstack-query',
          'tailwindcss',
          'motion',
          'supabase',
        ],
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
          '3박 4일간 진행된 카카오와 구름 주최 해커톤에서 6개 팀 중 대상 수상',
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
          'Gatsby v4에서 v5로 마이그레이션 진행',
          '학습한 내용과 실무에서 마주친 문제의 해결 과정을 글로 정리해 꾸준히 발행',
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
          '실제 결혼하시는 분들이 깃허브에서 포크하여 사용하는 것을 보며 간단한 프로젝트라도 목표가 명확하면 성과를 낼 수 있다는 것을 느낌',
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
