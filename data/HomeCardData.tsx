interface HomeCardData {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: true;
  topLine: string;
  title: string;
  description: string;
  imgStart: boolean;
  imgSrc: string;
  altText: string;
  dark: true;
  dark2: true;
  primary: true;
  darkText: false;
  svgSrc: string;
  iFrame: string;
  links: Array<{
    status?: boolean;
    id?: number;
    title?: string;
    direct?: string;
  }>;
}
export const homeObjOne: HomeCardData = {
  id: "",
  lightBg: false,
  lightText: false,
  lightTextDesc: true,
  topLine: "2020-2022",
  title: "React.js / Next.js Project",
  description:
    "In the course of of my academic period, I have built some real life React projects using create-react-app or Next.js.",
  imgStart: false,
  imgSrc: "/road.svg",
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  svgSrc: "/homeCard/bgp_react.svg",
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
  imgSrc: "/photography.jpg",
  // imageSrc: require('../media/photography.jpg'),
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  svgSrc: "/homeCard/bgp_camera.svg",
  iFrame: "",
  links: [    {
    id: 1,
    title: "View More",
    direct: "/photography",
  }],
};
export const homeObjTwo: HomeCardData = {
  id: "abut",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Click to CheckOut!",
  title: "Alfaaz-e-Sukhan",
  description: "Collection of my poems",
  imgStart: true,
  imgSrc: "/bg-video.mp4",
  // imageSrc: require('../media/photography.jpg'),
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  svgSrc: "/homeCard/bgp_car.svg",
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
  topLine: "Click to CheckOut!",
  title: "Html-Css-Js",
  description:
    "This is my static website which contains some of my CSS and Javascript components",
  imgStart: false,
  imgSrc: "/bg-video.mp4",
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  svgSrc: "/car.svg",
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
  id: "HTML-CSS-JS",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Click to CheckOut!",
  title: "Netflix Clone",
  description:
    "This is my static website which contains some of my CSS and Javascript components",
  imgStart: false,
  imgSrc: "/bg-video.mp4",
  altText: "Car",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
  svgSrc: "/car.svg",
  iFrame: "https://react-netflix-clone-6fa02.web.app/",
  links: [
    {
      id: 1,
      title: "Go to Netflix Clone",
      direct: "https://react-netflix-clone-6fa02.web.app/",
    }
  ],
};

