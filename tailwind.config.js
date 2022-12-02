/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        "073d52": "#073d52",
        color1: "#232a34",
      },
    },
    screens: {
      phone: { min: "1px", max: "550px" },
      tablet: { min: "550px", max: "1080px" },
      laptop: { min: "1081px", max: "1920px" },
      desktop: { min: "1921px" },
    },
  },
  plugins: [],
};
