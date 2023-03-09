import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonBW } from "./Button";
import { GoLinkExternal } from "react-icons/go";
import { SVGTwoWave } from "./SVG";
import * as ReactDOMServer from "react-dom/server";

const SectionWrapper = ({
  title,
  topLine,
  description,
  showBtn,
  mockupImg,
  bannerSVG,
  imageFront,
  dark,
  links,
}: any) => {
  console.log(bannerSVG);
  // SVG component
  const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(
      <SVGTwoWave
        primaryColor={bannerSVG?.primaryColor || ""}
        secondryColor={bannerSVG?.secondryColor || ""}
        rotate={bannerSVG.rotate || 0}
      />
    )
  );
  const bannerSvgUrl = `${
    bannerSVG.banner
      ? `url(${bannerSVG.banner})`
      : bannerSVG.primaryColor
      ? `url("data:image/svg+xml,${svgString}")`
      : ""
  }`;

  return (
    <div
      className={`relative overflow-hidden min-h-screen bg-aquaDark1 w-full flex justify-center items-center md:px-16 p-4 
       `}
      style={{
        // backgroundImage: `url(${bannerSVG.banner})`,
        // backgroundImage: `url("data:image/svg+xml,${svgString}")`,
        backgroundImage: `${bannerSvgUrl}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!bannerSVG.banner && !bannerSVG.primaryColor && (
        <div className="z-0 absolute w-full h-full rotate-[197deg] -right-[50%] md:-top-[80%] -top-[90%] scale-[2] bg-aquaDark2 bg-cover"></div>
      )}
      <div
        className={`z-10 flex md:w-11/12 w-full 
        ${
          imageFront
            ? "md:flex-col-reverse flex-col-reverse"
            : "lg:flex-row flex-col"
        }`}
      >
        <div
          className={` flex-1 w-full flex justify-start flex-col mb-10 
          ${imageFront ? "justify-end text-right" : "justify-start text-left"}
        `}
        >
          <div className="min-w-[300px] px-3 py-4  pt-0 pb-16">
            <div className="md:mt-12 mt-8 text-white text-xl laptop:3xl font-bold leading-4 mb-4 mx-0 tracking-wide">
              {topLine}
            </div>
            <h1
              className={`text-[#01bf71] font-bold text-4xl
          ${imageFront ? "text-tertiary" : ""}`}
            >
              {title}
            </h1>
            <p
              className={`my-5 md:my-10 text-white  md:text-xl font-normal text-lg leading-6 font 
            ${imageFront ? "" : ""}
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
                  <Link legacyBehavior href={links[0]?.direct}>
                    <a target="_blank" rel="noopener noreferrer">
                      <ButtonBW label={links[0]?.title} darkButton={!dark} />
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
                        <Link legacyBehavior href={link?.direct} passHref>
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
          className={` flex-1 flex justify-center items-center md:p-8 px-0`}
        >
          <div className="max-w-[800px] max-h-[800px]">
            <Image
              src={mockupImg}
              width={600}
              height={600}
              alt="mockup"
              // className="w-full h-full md:w-6/12 md:h-6/12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeCard = ({ props, dark, imageFront }) => {
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
            ? "md:flex-row-reverse flex-col-reverse"
            : "md:flex-row flex-col"
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
                <Link legacyBehavior href={props.links[0]?.direct}>
                  <a target="_blank" rel="noopener noreferrer">
                    <ButtonBW
                      label={props.links[0]?.title}
                      darkButton={!dark}
                    />
                  </a>
                </Link>
              </div>
            ) : (
              <>
                {props.links?.map((link) => (
                  <div key={link?.direct}>
                    <Link legacyBehavior href={link?.direct} passHref>
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
              src={props.mockupImg}
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

export default SectionWrapper;
