interface SectionWrapper {
  topLine: string;
  title: string;
  description: string;
  imageFirst: boolean;
  mockupImg: string;
  bannerSVG: {
    banner: string;
    primaryColor?: string;
    secondryColor?: string;
    rotate?: number;
  };
  dark: boolean;
  links: Array<{
    status?: boolean;
    id?: number;
    title?: string;
    direct?: string;
  }>;
}
export const SectionWrapperData: Array<SectionWrapper> = [
  {
    topLine: "Poem Collection",
    title: "Alfaaz-e-Sukhan",
    description:
      "Emotions can make people extremely vulnerable. My personal philosophy to overcome emotions is to express them in some form. That's why I express my feelings via my poems. It allows me to touch the sky with my bare hands.",
    imageFirst: false,
    mockupImg: "/svg/i-mind.svg",
    bannerSVG: {
      banner: "",
      primaryColor: "#073D52",
      secondryColor: "#164E63",
    },
    dark: true,
    links: [
      {
        id: 1,
        title: "View More",
        direct: "/poem",
      },
    ],
  },
  {
    topLine: "React Website",
    title: "Netflix Clone",
    description:
      "Experience Netflix clone built with React.js and open source Rest API. Project is more focused on API integration rather than features.",
    imageFirst: false,
    dark: true,
    mockupImg: "/images/netflix.webp",
    bannerSVG: {
      banner: "",
      primaryColor: "#012233",
      secondryColor: "#051A28",
    },
    links: [
      {
        id: 1,
        title: "Go to Netflix Clone",
        direct: "https://react-netflix-clone-6fa02.web.app/",
      },
    ],
  },
  {
    topLine: "React Website",
    title: "Amazon Clone",
    description:
      "Fully responsive Amazon clone build using React. Has implemented sorting, search, add to wish list, add to bag features. I tried to make it as similar as real Amazon website",
    imageFirst: true,
    dark: true,
    mockupImg: "/images/amazon.webp",
    bannerSVG: {
      banner: "/svg/motion-downcurve.svg",
      primaryColor: "#073D52",
      secondryColor: "#012233",
    },
    links: [
      {
        id: 1,
        title: "Go to Amazon Clone",
        direct: "https://react-website-amazon-clone.vercel.app/",
      },
    ],
  },
  {
    topLine: "2021-2022",
    title: "React & Next Project",
    description:
      "In the course of of my academic period, I have built some real life React projects using create-react-app or Next.js.",
    imageFirst: false,
    dark: true,
    mockupImg: "/svg/m-car.svg",
    bannerSVG: {
      banner: "/svg/bgb-tilt.svg",
      primaryColor: "#012233",
      secondryColor: "#051A28",
    },
    links: [
      {
        id: 1,
        title: "Next-Mixed-Project",
        direct: "https://next-mixed-project.vercel.app/",
      },
      {
        id: 2,
        title: "React-Shopping-Cart",
        direct: "https://react-shopping-cart-7f4fc.web.app/",
      },
    ],
  },
  {
    topLine: "Static Website",
    title: "Html-Css-Js",
    description:
      "This is my static website which contains some of my CSS and Javascript components",

    imageFirst: true,
    dark: true,
    mockupImg: "images/anime-girl.png",
    bannerSVG: {
      banner: "/svg/wave.svg",
      primaryColor: "#012233",
      secondryColor: "#051A28",
    },
    links: [
      {
        id: 1,
        title: "explore Html-Css-Javascript",
        direct: "https://html-css-js-iota.vercel.app/index.html",
      },
    ],
  },
  {
    topLine: "Click to CheckOut!",
    title: "Photography/Video",
    description:
      "Collection of my photos, vector, posters, videos and many more",
    imageFirst: true,
    mockupImg: "/svg/m-camera.svg",
    dark: true,
    bannerSVG: {
      banner: "/svg/diagonal.svg",
      primaryColor: "#012233",
      secondryColor: "#051A28",
    },
    links: [
      {
        id: 1,
        title: "View More",
        direct: "/photography",
      },
    ],
  },
];

interface HomeCardData {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  title: string;
  description: string;
  imgStart: boolean;
  altText: string;
  dark: boolean;
  dark2: boolean;
  primary: boolean;
  darkText: boolean;
  imageSrc: string;
  iFrame: string;
  links: Array<{
    status?: boolean;
    id?: number;
    title?: string;
    direct?: string;
  }>;
}

export const homeObjFour: HomeCardData = {
  id: "contact",
  lightBg: false,
  lightText: false,
  lightTextDesc: true,
  topLine: "Click to CheckOut!",
  title: "Photography/Video",
  description: "Collection of my photos, vector, posters, videos and many more",
  imgStart: true,
  // imageSrc: require('../media/photography.jpg'),
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  imageSrc: "/svg/m-camera.svg",
  iFrame: "",
  links: [
    {
      id: 1,
      title: "View More",
      direct: "/photography",
    },
  ],
};

export const homeObjThree: HomeCardData = {
  id: "HTML-CSS-JS",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Static Website",
  title: "Html-Css-Js",
  description:
    "This is my static website which contains some of my CSS and Javascript components",
  imgStart: false,
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  imageSrc: "/images/html-css-js.png",
  iFrame: "https://html-css-js-iota.vercel.app/index.html",
  links: [
    {
      id: 1,
      title: "explore Html-Css-Javascript",
      direct: "https://html-css-js-iota.vercel.app/index.html",
    },
  ],
};
