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
    },
    social: {
      github: `https://github.com/S-jooyoung`,
      linkedIn: `https://www.linkedin.com/in/joy-shin/`,
      email: `jooyoung.dev@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        link: '',
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.11 ~ ',
        activity: 'Staybility Frontend Developer',
        link: 'https://www.millionground.com/',
      },
      {
        date: '2022.07 ~ 2022.09',
        activity: 'Star Law Firm Frontend Developer',
        link: 'https://www.star-law.com/',
      },
      {
        date: '2021.09 ~ 2022.02',
        activity: '대구 ICT 산업 혁신아카데미 4기',
      },
      {
        date: '2015.03 ~ 2021.08',
        activity: '영남대학교 정보통신공학과',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
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
    ],
  },
};
