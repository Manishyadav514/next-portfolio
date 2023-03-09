import React, { useState } from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CommonButton } from "./CommonButton";

export const Banner = () => {
  const [bannerData, setCaraouselData] = useState(carouselData);

  return (
    <>
      <div
        className="h-auto relative w-full md:h-[90vh] flex flex-col justify-center m-0 ease-in-out transform transition duration-500 bg-cover bg-left bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerData?.imageHref})`,
        }}
      >
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent dark:via-transparent from-darkTheme-800 to-lightTheme-100 dark:from-darkTheme-800 dark:to-darkTheme-800"></div>
        <div className="md:hidden block">
          <video src="/vidgif/video_1.mp4" autoPlay muted loop></video>
        </div>
        <div className="z-[888] max-w-[900px] mt-12 px-20 py-24 md:px-12 md:block hidden">
          <h1 className="mb-6 text-[4em] font- font-normal text-[#34173c]">
            {bannerData?.firstName}{" "}
            <span className="text-[#01bf71]"> {bannerData?.lastName}</span>
          </h1>
          <div className="relative h-[230px] w-[500px] mb-10 rounded-[25px] bg-[#ffffff33] backdrop-sepia-0 border border-[#ffffff1a] shadow-xl shadow-[#00000033] overflow-hidden">
            <div className="absolute h-[700px] w-[500px] rounded-full bg-transparent border-[50px] border-[#ffffff1a] b-[-250px] r-[-250px] box-border after:content-[''] after:absolute after:h-[600px] after:w-[600px] after:rounded-full after:bg-transparent after:border-[30px] after:border-[#ffffff1a] after:b-[-80px] after:r-[-80px] after:box-border"></div>
            <p className="absolute w-[450px] h-full p-8 flex text-xl font-normal text-blueDark1">
              {bannerData?.description}
            </p>
          </div>
          <div className="flex flex-row mt-3 gap-4">
            <Link legacyBehavior href="/about">
              <CommonButton
                btnLabel="Read More"
                customClass="px-[35px] py-[15px] bg-white text-[#1680ac] text-[17px] font-medium rounded-[2px] cursor-pointer hover:bg-[#1680ac] hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div className="z-[888] absolute right-5 flex flex-col gap-2 text-3xl">
          <Link legacyBehavior href="/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.3] transition ease-in cursor-pointer"
            >
              <FaFacebookMessenger style={{ color: "#448AFF" }} />
            </a>
          </Link>
          <Link legacyBehavior href="/" passHref>
            <a className="hover:scale-[1.3] transition ease-in cursor-pointer">
              <HiOutlineMail style={{ color: "#EA4335" }} />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/awareness_hall/"
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.3] transition ease-in cursor-pointer"
            >
              <BsInstagram style={{ color: "#DE6666" }} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export const carouselData = {
  firstName: "Manish",
  lastName: "Yadav",
  description: `This is a project collections of a Javascript developer based
    out of Mumbai. Explore real world projects including few things
    that he is most passionate about. He believes in supremacy of
    having multiple solutions for a particular problem.`,
  imageHref: "/images/spy.webp",
};
