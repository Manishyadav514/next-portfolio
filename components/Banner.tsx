import React from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Banner = () => {
  return (
    <>
      <div
        className="relative w-full h-[100vh] phone:h-auto flex flex-col justify-center m-0"
        style={{
          backgroundImage: `url("/images/spy.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hidden phone:block">
          <video src="/vidgif/video_1.mp4" autoPlay muted loop></video>
        </div>
        <div className="z-[888] max-w-[900px] mt-12 px-20 py-24 tablet:px-12 visible phone:hidden">
          <h1 className="mb-6 text-[4em] font- font-normal text-[#34173c]">
            Manish <span className="text-[#01bf71]"> Yadav</span>
          </h1>
          {/* <div className="container">
              <div className="circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
              </div>

              <div className="card-group">
                <div className="card">
                  <div className="ring"></div>
                </div>
              </div>
            </div> */}
          {/* <div className="absolute t-1/2 l-1/2 translate-x--1/2 translate-y--1/2">
              <div className="relative h-[270px] w-[450px] rounded-[25px] bg-[#ffffff33] backdrop-sepia-0 border border-[#ffffff1a] shadow-xl shadow-[#00000033] overflow-hidden">
                <div className="absolute h-[500px] w-[500px] rounded-full bg-transparent border-[50px] border-[#ffffff1a] b-[-250px] r-[-250px] box-border after:content-[''] after:absolute after:h-[600px] after:w-[600px] after:rounded-full after:bg-transparent after:border-[30px] after:border-[#ffffff1a] after:b-[-80px] after:r-[-80px] after:box-border"></div>
              </div>
            </div> */}
          <div className="relative h-[230px] w-[500px] mb-10 rounded-[25px] bg-[#ffffff33] backdrop-sepia-0 border border-[#ffffff1a] shadow-xl shadow-[#00000033] overflow-hidden">
            <div className="absolute h-[700px] w-[500px] rounded-full bg-transparent border-[50px] border-[#ffffff1a] b-[-250px] r-[-250px] box-border after:content-[''] after:absolute after:h-[600px] after:w-[600px] after:rounded-full after:bg-transparent after:border-[30px] after:border-[#ffffff1a] after:b-[-80px] after:r-[-80px] after:box-border"></div>
            <p className="absolute w-[450px] h-full p-8 flex text-xl font-normal text-blueDark1">
              This is a a project collections of a Javascript developer based
              out of Mumbai. Explore real world projects including few things
              that he is most passionate about. He believes in supremacy of
              having multiple solutions for a particular problem.
            </p>
          </div>

          {/* <p>
              DearSenpai is a project collections of a Javascript developer
              based out of Mumbai. Explore real world projects including few
              things that he is most passionate about. He believes in supremacy
              of having multiple solutions for a particular problem.
            </p> */}
          <Link href="/about">
            <span className="px-[35px] py-[15px] bg-white text-[#1680ac] text-[17px] font-medium rounded-[2px] cursor-pointer hover:bg-[#1680ac] hover:text-white">
              Read More
            </span>
          </Link>
        </div>
        <div className="z-[888] absolute right-5 flex flex-col gap-2 text-3xl">
          <Link href="/" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.3] transition ease-in cursor-pointer"
            >
              <FaFacebookMessenger style={{ color: "#448AFF" }} />
            </a>
          </Link>
          <Link href="/" passHref legacyBehavior>
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
