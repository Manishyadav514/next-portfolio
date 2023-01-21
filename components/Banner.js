import React from "react";
import Link from "next/link";
import { ButtonBW } from "./Button";
import styles from "../styles/Banner.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

export const Banner1 = () => {
  return (
    <>
      <div
        className={styles.banner1_container}
        style={{
          backgroundImage: `url("/images/sunset.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.banner1_containerVideo}>
          <video src="/vidgif/video_1.mp4" autoPlay muted loop></video>
        </div>
        <div className={`${styles["banner1_content"]}`}>
          <div className={styles.banner1_containerImage}>
            <h1>
              Manish <span> yadav</span>
            </h1>
            {/* <div class="container">
              <div class="circles">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
              </div>

              <div class="card-group">
                <div class="card">
                  <div class="ring"></div>
                </div>
              </div>
            </div> */}
            {/* <div class="absolute t-1/2 l-1/2 translate-x--1/2 translate-y--1/2">
              <div class="relative h-[270px] w-[450px] rounded-[25px] bg-[#ffffff33] backdrop-sepia-0 border border-[#ffffff1a] shadow-xl shadow-[#00000033] overflow-hidden">
                <div class="absolute h-[500px] w-[500px] rounded-full bg-transparent border-[50px] border-[#ffffff1a] b-[-250px] r-[-250px] box-border after:content-[''] after:absolute after:h-[600px] after:w-[600px] after:rounded-full after:bg-transparent after:border-[30px] after:border-[#ffffff1a] after:b-[-80px] after:r-[-80px] after:box-border"></div>
              </div>
            </div> */}
            <div class="relative h-[230px] w-[500px] mb-10 rounded-[25px] bg-[#ffffff33] backdrop-sepia-0 border border-[#ffffff1a] shadow-xl shadow-[#00000033] overflow-hidden">
              <div class="absolute h-[700px] w-[500px] rounded-full bg-transparent border-[50px] border-[#ffffff1a] b-[-250px] r-[-250px] box-border after:content-[''] after:absolute after:h-[600px] after:w-[600px] after:rounded-full after:bg-transparent after:border-[30px] after:border-[#ffffff1a] after:b-[-80px] after:r-[-80px] after:box-border"></div>
              <p
                className="absolute w-[450px] h-full p-8 flex text-xl font-bold"
                style={{ color: "#051A28" }}
              >
                <span className="text"></span> This is a a project collections of a Javascript developer
                based out of Mumbai. Explore real world projects including few
                things that he is most passionate about. He believes in
                supremacy of having multiple solutions for a particular problem.
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
        </div>
        <div className={styles.banner1_icons}>
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              <FaFacebookMessenger style={{ color: "#448AFF" }} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <HiOutlineMail style={{ color: "#EA4335" }} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/awareness_hall/">
            <a target="_blank" rel="noopener noreferrer">
              <BsInstagram style={{ color: "#DE6666" }} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export const Banner2 = () => {
  return (
    <div>
      <div className={styles.banner2_header} id="home">
        <div className={styles.banner2_banner}>
          <div className={styles.banner2_container}>
            <h1>Dear Senpai</h1>
            <p>
              Nothing just a way to get know me better by exploring some of my
              projects.
            </p>
            <Link href="about">
              <a>
                <ButtonBW title="About" />
              </a>
            </Link>
          </div>
          <div className={styles.banner2_icons}>
            <Link href="/">
              <a>
                <FaFacebookMessenger style={{ color: "cyan" }} />
              </a>
            </Link>
            <Link href="mailto:manish.yadav.elit@gmail.com">
              <a>
                <HiOutlineMail style={{ color: "#EA4335" }} />
              </a>
            </Link>

            <Link href="https://www.instagram.com/awareness_hall/">
              <a>
                <BsInstagram style={{ color: "#DE6666" }} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Banner3 = () => {
  return (
    <div>
      <div className={styles.banner3_container}>
        <div className={styles.banner3_containerImage}>
          <Image
            alt="banner"
            width="100%"
            height="900px"
            src="/background/bg_3.png"
          />
        </div>
        <div className={`${styles["banner3_ContentIcon"]}`}>
          <div className={`${styles["banner3_content"]}`}>
            <h1>
              Dear<span>Senpai</span>
            </h1>
            <p>
              DearSenpai is projects collection of a Javascript developer at a
              Mumbai based firm. Explore real world projects including few
              things that he is most passionate about. He believes in supremacy
              of having multiple solution for a particular problem.
            </p>
            <Link href="/about">
              <a>Read More</a>
            </Link>
          </div>
          <div className={styles.banner3_icons}>
            <Link href="/">
              <a target="_blank" rel="noopener noreferrer">
                <FaFacebookMessenger style={{ color: "cyan" }} />
              </a>
            </Link>
            <Link href="mailto:manish.yadav.elit@gmail.com">
              <a target="_blank" rel="noopener noreferrer">
                <HiOutlineMail style={{ color: "#EA4335" }} />
              </a>
            </Link>

            <Link href="https://www.instagram.com/awareness_hall/">
              <a target="_blank" rel="noopener noreferrer">
                <BsInstagram style={{ color: "#DE6666" }} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Banner4 = () => {
  return (
    <>
      <div className={` ${styles.banner}`}>
        <div className={styles.banner1_container}>
          {/* <div className={styles.banner1_containerImage}>
          <Image alt="banner" layout="fill" src="/2.gif" />
        </div> */}
          <div className={`${styles.banner1_containerVideo}`}>
            <video src="/video/video_1.mp4" autoPlay muted loop></video>
          </div>
          <div className={`${styles["banner1_content"]}`}>
            <div className={styles.banner1_containerImage}>
              <h1>
                Dear<span>Senpai</span>
              </h1>
              <p>
                DearSenpai is a project collections of a Javascript developer
                based out of Mumbai. Explore real world projects including few
                things that he is most passionate about. He believes in
                supremacy of having multiple solution for a particular problem.
              </p>
              <Link href="/about">
                <a>Read More</a>
              </Link>
            </div>
          </div>
          <div className={styles.banner1_icons}>
            <Link href="/">
              <a target="_blank" rel="noopener noreferrer">
                <FaFacebookMessenger style={{ color: "#448AFF" }} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <HiOutlineMail style={{ color: "#EA4335" }} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/awareness_hall/">
              <a target="_blank" rel="noopener noreferrer">
                <BsInstagram style={{ color: "#DE6666" }} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
