import React from "react";
import styles from "../styles/HomeCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { ButtonBW } from "../components/Button.js";
import { GoLinkExternal } from "react-icons/go";

export const HomeCardTailwind = ({ props, dark, imageFront }) => {
  return (
    <div
      className={`${
        dark ? "bg-[#012233] text-white" : "bg-[#fff] text-black"
      } w-full`}
      id={props.id}
    >
      <div
        className={`p-5 flex  justify-center items-center  ${
          imageFront
            ? "flex-row-reverse phone:flex-col-reverse"
            : "flex-row phone:flex-col"
        }`}
      >
        <div className="min-w-[300px] px-3 py-4  pt-0 pb-16">
          <div className="text-xl font-bold leading-4 my-4 mx-0 tracking-wide ">
            {props.topLine}
          </div>
          <div className=" w-full mb-6 text-[32px]  font-bold text-[#01bf71] md:text-[22px]">
            {props.title}
          </div>
          <div className="max-w-[400px] mb-9 text-[18px] leading-6">
            {props.description}
          </div>
          <>
            {props.links.length === 1 ? (
              <div className="flex items-start">
                <Link href={props.links[0]?.direct}>
                  <a target="_blank" rel="noopener noreferrer">
                    <ButtonBW
                      title={props.links[0]?.title}
                      darkButton={!dark}
                    />
                  </a>
                </Link>
              </div>
            ) : (
              <>
                {props.links?.map((link) => (
                  <div key={link?.direct}>
                    <Link href={link?.direct} passHref legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row gap-3 align-middle items-center hover:text-cyan-400 text-base font-medium cursor-pointer"
                      >
                        {link?.title} <GoLinkExternal />
                      </a>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
        <div className="max-h-[600px] p-4">
          <div
            className="rounded-lg pr-0 mb-3"
            style={{ borderRadius: "10%", overflow: "hidden" }}
          >
            <Image
              src={props.imageSrc}
              width={400}
              height={400}
              alt={props.altbox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Download = () => {
  return (
    <div className=" w-full p-16 phone:p-8 bg-[#164E63] flex flex-row gap-16 phone:gap-4 phone:flex-col justify-center items-center align-middle text-center">
      <div>
        <h1 className="font-bold font-IBMPlex text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-white">
          <span className="text-teal-200">Thanks</span> for
        </h1>
        <p className="my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 text-teal-200">
          making this far.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          width={100}
          height={100}
          src="/images/anya.png"
          alt="/images/download_png"
        />
      </div>
    </div>
  );
};

export const SkillCard = ({ iconUrl, iconText, level, dark }) => (
  <div
    key={iconText}
    className={`relative rounded bg-white p-6 m-8 flex justify-around items-center flex-col hover:shadow-lg cursor-pointer w-40 h-40 minlg:w-80 minlg:h-80 ${
      !dark
        ? "bg-[#000000e6] text-white  hover:bg-slate-700"
        : "bg-primary text-black hover:bg-slate-200"
    } phone:m-2 phone:rounded-full ${styles}`}
  >
    <div
      className={`absolute w-[105%] h-[105%] rounded border-[15px] border-black ${styles.colorAnimation} phone:border-[12px] phone:rounded-full`}
    ></div>
    <Image src={iconUrl} alt={iconText} height={50} width={50} />
    <p className="py-2 font-semibold font-IBMPlex text-base minlg:text-3xl text-tertiary">
      {iconText}
    </p>
    <div className="h-4 w-[100px] mb-3 bg-gray-300 rounded-full dark:bg-gray-700">
      <div
        className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
        style={{ width: level }}
      ></div>
    </div>
  </div>
);

export const Features = ({ dark }) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center  
    ${dark ? "bg-[#051a28] text-white" : "bg-primary text-black"} 
    `}
      style={{
        backgroundImage: `url("/svg/wave-motion-corner.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center w-full minmd:w-3/4 flex-col text-center">
        <div className="p-16">
          <h1 className="font-bold font-IBMPlex text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13">
            Skills
          </h1>
          <p className="my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16">
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

// export const theme = {
//   colors: {
//     backgroundImage: `url("/svg/wave-motion-1.svg")`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: 100,
//     width: 100,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 64,
//     backgroundColor: "#fff",
//   },
// };

export const SectionWrapper = ({
  title,
  topLine,
  description,
  showBtn,
  mockupImg,
  banner,
  imageFront,
  dark,
  links,
}) => {
  console.log(styles.banner);

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center px-16 phone:p-4 
      ${imageFront ? "bg-black text-white" : "bg-primary text-black"} 

      `}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`flex  w-11/12 phone:w-full 
        ${
          imageFront
            ? "flex-row-reverse tablet:flex-col-reverse phone:flex-col-reverse"
            : "flex-row  tablet:flex-col phone:flex-col"
        }`}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col phone:mb-10 
          ${imageFront ? "justify-end text-right" : "justify-start text-left"}
        `}
        >
          {/* <h1
            className={` font-bold font-IBMPlex text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13
          ${imageFront ? "text-tertiary" : "text-[#01bf71]"}`}
          >
            {title}
          </h1> */}
          {/* <p
            className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16
            ${imageFront ? "text-tertiary" : "text-white"}
          `}
          >
            {description}
          </p> */}
          <div className="min-w-[300px] px-3 py-4  pt-0 pb-16">
            <div className="text-white text-xl font-bold leading-4 my-4 mx-0 tracking-wide ">
              {topLine}
            </div>
            <h1
              className={`text-[#01bf71] font-bold font-IBMPlex text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13
          ${imageFront ? "text-tertiary" : ""}`}
            >
              {title}
            </h1>
            <p
              className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16
            ${imageFront ? "text-tertiary" : "text-white"}
          `}
            >
              {description}
            </p>
            <>
              {links && links.length === 1 ? (
                <div
                  className={`flex ${
                    imageFront ? "justify-end" : "justify-start"
                  }`}
                >
                  <Link href={links[0]?.direct}>
                    <a target="_blank" rel="noopener noreferrer">
                      <ButtonBW title={links[0]?.title} darkButton={!dark} />
                    </a>
                  </Link>
                </div>
              ) : (
                <>
                  {links &&
                    links?.map((link) => (
                      <div
                        key={link?.direct}
                        className={`flex ${
                          imageFront ? "justify-end" : "justify-start"
                        }`}
                      >
                        <Link href={link?.direct} passHref legacyBehavior>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-row gap-3 align-middle items-center hover:text-cyan-400 text-base font-medium cursor-pointer ${
                              dark ? "text-white" : "text-black"
                            }`}
                          >
                            {link?.title} <GoLinkExternal />
                          </a>
                        </Link>
                      </div>
                    ))}
                </>
              )}
            </>
          </div>
          {/* {showBtn && <ButtonBlack />} */}
        </div>
        <div
          className={`w- flex-1 flex justify-center items-center p-8 phone:px-0`}
        >
          <div className="max-w-[800px] max-h-[800px]">
            <Image
              src={mockupImg}
              width={600}
              height={600}
              alt="mockup"
              //     className={`
              //  ${imageFront ? " fadeLeftMini" : " fadeRightMini"}
              //  w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
