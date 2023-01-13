import React from "react";
import styles from "../styles/HomeCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { ButtonBW, ButtonWhite } from "../components/Button.js";
import { GoLinkExternal } from "react-icons/go";
export const HomeCard = (props) => {
  // console.log(props.svgSrc);
  // let links = props.links;
  // console.log(props.links.length);
  // props.links.map((link) => console.log(link?.title));
  return (
    <div className={styles.card} id={props.id}>
      <div
        className={`${styles["card_row"]} ${
          props.imgStart ? styles["image_first"] : styles[""]
        }`}
      >
        <div className={styles.card_col1}>
          <div className={styles.card_text}>
            <div className={styles.card_title}>{props.topLine}</div>
            <div className={styles.card_heading}>{props.title}</div>
            <div className={styles.card_subtitle}>{props.description}</div>
            <>
              {props.links.length === 1 ? (
                <div className={styles.card_button}>
                  {props.dark ? (
                    <Link href={props.links[0]?.direct}>
                      <a target="_blank" rel="noopener noreferrer">
                        <ButtonWhite title={props.links[0]?.title} />
                      </a>
                    </Link>
                  ) : (
                    <Link href={props.links[0]?.direct}>
                      <a target="_blank" rel="noopener noreferrer">
                        {/* <ButtonBlack title={props.links[0]?.title} /> */}
                      </a>
                    </Link>
                  )}
                </div>
              ) : (
                <div className={styles.card_links}>
                  {props.links?.map((link) => (
                    <>
                      <div key={link?.direct} className={styles.homeCardLinks}>
                        <Link href={link?.direct}>
                          <a target="_blank" rel="noopener noreferrer">
                            {link?.title} <GoLinkExternal />
                          </a>
                        </Link>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </>
          </div>
        </div>
        <div className={styles.card_col2}>
          <div className={styles.image_box}>
            <div className={styles.image_iframe}>
              {props.iFrame ? (
                <>
                  <iframe
                    src={props?.iFrame}
                    className={styles.iFrame}
                    frameBorder="0"
                  ></iframe>
                  <div className={styles.homeCard_image}>
                    <Image
                      src={props.imageSrc}
                      width={400}
                      height={400}
                      layout="intrinsic"
                      alt={props.altbox}
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={props.imageSrc}
                  width={400}
                  height={400}
                  alt={props.altbox}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
                    <Link href={link?.direct}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block font-medium text-[16px] bg-[length:0%_4px] bg-slate-500 bg-no-repeat bg-center-bottom transition ease-in-out delay-150 hover:bg-slate-800 hover:bg-[length:100%_5px] "
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

// export const HomeCardTailwind = ({props}) => {
//   props = {...props}
//   console.log(props.id)
//   return (
//     <div
//       className="bg-[#232a34] text-black w-full grid justify-center p-5 "
//     >
//     </div>
//   );
// };

// JSX Component
export const Download = () => {
  return (
    <div className="flex justify-center items-center p-16 phone:p-8 bg-white">
      <div className="flex items-center w-full minmd:w-3/4 flex-col text-center">
        <div>
          <h1 className="font-bold font-IBMPlex text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-black">
            Thanks for
          </h1>
          <p className="my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 text-black">
            Get the full source code on GitHub
          </p>
        </div>
        <button className="bg-primary mt-4 py-4 px-6 text-white text-lg minmd:text-2xl font-IBMPlex font-medium rounded-lg hover:shadow-2xl">
          Source Code
        </button>
        <div className="w-4/5 h-full flex justify-center items-center">
          <Image
            // width={100}
            // height={100}
            layout="fill"
            src="/assets/scene.png"
            alt="/assets/download_png"
          />
        </div>
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
    <div className={`absolute w-[105%] h-[105%] rounded border-[15px] border-black animate-spin ${styles.colorAnimation} phone:rounded-full`}></div>
    <Image src={iconUrl} alt={iconText} height={100} width={100} />
    <p className="my-2 font-semibold font-IBMPlex text-base minlg:text-3xl text-tertiary">
      {iconText}
    </p>
    <div className="mb-3 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
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
        backgroundImage: `url("/assets/banner02.svg")`,
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
            iconUrl="/logoicon/logo-js.svg"
            iconText="JavaScript"
            level={80}
            dark={dark}
          />
          <SkillCard
            iconUrl="/logoicon/logo-ts.svg"
            iconText="Typescript"
            level={70}
            dark={dark}
          />
          <SkillCard
            iconUrl="/logoicon/logo-react.svg"
            iconText="React.js"
            level={80}
            dark={dark}
          />
          <SkillCard
            iconUrl="/logoicon/logo-next.svg"
            iconText="Next.js"
            level={80}
            dark={dark}
          />
          <SkillCard
            iconUrl="/logoicon/logo-aws.svg"
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
//     backgroundImage: `url("/assets/banner.svg")`,
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
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
  dark,
}) => {
  console.log(styles.banner);

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center px-16 phone:p-4 
      ${reverse ? "bg-black text-white" : "bg-primary text-black"} 

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
          reverse
            ? "flex-row-reverse phone:flex-col-reverse"
            : "flex-row  phone:flex-col"
        }`}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col phone:mb-10 
          ${reverse ? "justify-end text-right" : "justify-start text-left"}
        `}
        >
          <h1
            className={` font-bold font-IBMPlex text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13
          ${reverse ? "text-tertiary" : "text-white"}`}
          >
            {title}
          </h1>
          <p
            className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16
            ${reverse ? "text-tertiary" : "text-white"}
          `}
          >
            {description}
          </p>
          {/* {showBtn && <ButtonBlack />} */}
        </div>
        <div
          className={`flex-1 flex justify-center items-center p-8 phone:px-0`}
        >
          <Image
            src={mockupImg}
            width={500}
            height={500}
            alt="mockup"
            className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}
           w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain`}
          />
        </div>
      </div>
    </div>
  );
};
