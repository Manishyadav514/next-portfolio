import React from "react";
import Image from "next/image";
import styles from "../styles/common.module.css";

interface FeaturesProps {
  dark: boolean;
}

const Features = ({ dark }: FeaturesProps) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center  
    ${dark ? "bg-blueDark2  text-white" : "bg-primary text-aquaDark1"} 
    `}
      style={{
        // backgroundImage: `url("/svg/wave-blue-dl.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundImage: `linear-gradient(
        //   235deg,
        //   hsl(217deg 47% 17%) 1%,
        //   hsl(217deg 47% 17%) 31%,
        //   hsl(217deg 47% 17%) 40%,
        //   hsl(217deg 47% 17%) 45%,
        //   hsl(217deg 47% 17%) 48%,
        //   hsl(217deg 47% 17%) 49%,
        //   hsl(217deg 47% 17%) 50%,
        //   hsl(217deg 47% 17%) 51%,
        //   hsl(216deg 46% 18%) 51%,
        //   hsl(215deg 45% 22%) 51%,
        //   hsl(214deg 44% 25%) 51%,
        //   hsl(213deg 43% 29%) 50%,
        //   hsl(211deg 43% 33%) 50%,
        //   hsl(210deg 44% 36%) 49%,
        //   hsl(209deg 44% 40%) 49%,
        //   hsl(208deg 44% 43%) 49%,
        //   hsl(208deg 44% 45%) 49%,
        //   hsl(208deg 44% 45%) 50%,
        //   hsl(208deg 44% 45%) 51%,
        //   hsl(208deg 44% 45%) 52%,
        //   hsl(208deg 44% 45%) 55%,
        //   hsl(208deg 44% 45%) 60%,
        //   hsl(208deg 44% 45%) 69%,
        //   hsl(208deg 44% 45%) 99%
        // )`,
        // background: `linear-gradient(90deg, #13547a, #135f83, #166a8b, #1c7593, #24819a, #2e8ca1, #3a97a8, #46a3ad, #53aeb3, #62b9b8, #70c5bd, #80d0c2)`,
      }}
    >
      <div className="flex items-center w-full flex-col text-center">
        <div className="p-16">
          <h1 className="font-bold text-6xl phone:text-4xl leading-12 ">
            Skills
          </h1>
          <p className="my-5 font-light text-xl">
            Have been working as a React and Next developer for a year and half.
            Here are the skill sets that I have been continuously mastering.
          </p>
        </div>

        <div className="flex justify-center flex-wrap px-1 pb-12">
          <SkillCard
            iconUrl="/svg/logo-js.svg"
            iconText="JavaScript"
            level={80}
            dark={dark}
          />
          <SkillCard
            iconUrl="/svg/logo-ts.svg"
            iconText="Typescript"
            level={70}
            dark={dark}
          />
          <SkillCard
            iconUrl="/svg/logo-react.svg"
            iconText="React.js"
            level={80}
            dark={dark}
          />
          <SkillCard
            iconUrl="/svg/logo-next.svg"
            iconText="Next.js"
            level={80}
            dark={dark}
          />
          <SkillCard
            iconUrl="/svg/logo-aws.svg"
            iconText="AWS"
            level={50}
            dark={dark}
          />
        </div>
      </div>
    </div>
  );
};

export const SkillCard = ({ iconUrl, iconText, level, dark }) => (
  <div
    key={iconText}
    className={`relative shadow-xl rounded p-6 m-8 flex justify-around items-center flex-col hover:shadow-lg cursor-pointer w-40 h-40  ${
      !dark
        ? "bg-blueBright2 text-white  hover:bg-aquaDark4"
        : "bg-aquaLight1 text-black hover:bg-slate-200"
    } phone:m-2 phone:rounded-full `}
  >
    <div
      className={`absolute w-[105%] h-[105%] rounded border-[15px] border-black ${styles.borderAnimation} phone:border-[12px] phone:rounded-full`}
    ></div>
    <Image src={iconUrl} alt={iconText} height={50} width={50} />
    <p className="py-2 font-semibold text-base text-tertiary">{iconText}</p>
    <div className="h-4 phone:h-2 w-[100px] mb-3 bg-gray-300 rounded-full">
      <div
        className="h-4 phone:h-2 bg-blue-600 rounded-full dark:bg-blue-500"
        style={{ width: level }}
      ></div>
    </div>
  </div>
);

export default Features;
