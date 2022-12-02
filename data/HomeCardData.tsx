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
export const homeObjSix: HomeCardData = {
  id: "",
  lightBg: false,
  lightText: false,
  lightTextDesc: true,
  topLine: "2021-2022",
  title: "React.js / Next.js Project",
  description:
    "In the course of of my academic period, I have built some real life React projects using create-react-app or Next.js.",
  imgStart: false,
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  imageSrc: "/homeCard/bgp_react.svg",
  iFrame: "",
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
};
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
  imageSrc: "/homeCard/bgp_camera.svg",
  iFrame: "",
  links: [    {
    id: 1,
    title: "View More",
    direct: "/photography",
  }],
};
export const homeObjTwo: HomeCardData = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Poem Collection",
  title: "Alfaaz-e-Sukhan",
  description: "Emotions can make people extremely vulnerable. My personal philosophy to overcome emotions is to express them in some form. That's why I express my feelings, emotions via my poems. ",
  imgStart: true,
  // imageSrc: require('../media/photography.jpg'),
  altText: "Car",
  dark: false,
  dark2: false,
  primary: true,
  darkText: false,
  imageSrc: "/homeCard/bgp_car.svg",
  iFrame: "",
  links: [
    {
      id: 1,
      title: "View More",
      direct: "/poem",
    }
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
  imageSrc: "/homeCard/html-css-js.jpeg",
  iFrame: "https://html-css-js-iota.vercel.app/index.html",
  links: [
    {
      id: 1,
      title: "explore Html-Css-Javascript",
      direct: "https://html-css-js-iota.vercel.app/index.html",
    }
  ],
};

export const homeObjFive: HomeCardData = {
  id: "netflix-clone",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "React Website",
  title: "Netflix Clone",
  description:
    "Netflix clone build using React and REST api.",
  imgStart: false,
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  imageSrc: "/homeCard/netflix.png",
  iFrame: "https://react-netflix-clone-6fa02.web.app/",
  links: [
    {
      id: 1,
      title: "Go to Netflix Clone",
      direct: "https://react-netflix-clone-6fa02.web.app/",
    }
  ],
};

export const homeObjOne: HomeCardData = {
  id: "amazon-clone",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "React Website",
  title: "Amazon Clone",
  description:
    "Fully responsive Amazon clone build using React. Has implemented sorting, search, add to wish list, add to bag features. I tried to make it as similar as real Amazon website",
  imgStart: false,
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  imageSrc: "/homeCard/amazon.png",
  iFrame: "https://react-website-amazon-clone.vercel.app/",
  links: [
    {
      id: 1,
      title: "Go to Amazon Clone",
      direct: "https://react-website-amazon-clone.vercel.app/",
    }
  ],
};

