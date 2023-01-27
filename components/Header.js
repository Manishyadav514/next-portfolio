import styles from "../styles/common.module.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
// import logo from "../public/images/logo.png";
import { useRouter } from "next/router";
import { ButtonBW } from "./Button";

export const Header1 = () => {
  const router = useRouter();
  let currentPath = router.pathname;
  const homePath = currentPath === "/";
  const blogPath = currentPath.slice(0, 6) === "/blog/";
  currentPath === "/poem" && console.log(currentPath);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // if (window.addEventListener.scrollY >= 10) {
  //   document.getElementById("navbar").classList.add("sticky")
  // } else {
  //   document.getElementById("navbar").classList.remove("sticky");
  // }
  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log(scrollPosition)

  // const Scroll = (scrollPosition) => {
  //   if (scrollPosition >= 80) {
  //     document.getElementById("navbar").style.position = "sticky";
  //     document.getElementById("navbar").style.background = "transparent";
  //   } else if (scrollPosition >= 280) {
  //     document.getElementById("navbar").style.position = "none";
  //     document.getElementById("navbar").style.background = "#232a34";
  //   } else {
  //     document.getElementById("navbar").style.position = "none";
  //     document.getElementById("navbar").style.background = "#232a34";
  //   }
  // };
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   Scroll(position);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });
  // if (blogPath) {
  //   return null;
  // }

  return (
    <div
      className={`z-[999] top-0 left-0 w-full flex justify-between items-center phone:px-[12px] py-[15px] px-[200px] tablet:p-[25px] phone:p-[15px] phone:bg-[#232a34] transition-all ${
        homePath
          ? "absolute phone:relative bg-transparent phone:bg-[#051A28] text-[#34173c]"
          : "bg-[#051A28] text-white"
      }`}
      id="navbar"
    >
      <div className="flex align-middle items-center justify-center p-2">
        {/* <Image
          width={128}
          height={64}
          src={"images/logo.jpg"}
          alt="logo"
          priority
        /> */}
        <Link href="/">
          <a className="text-base font-medium hover:text-whiteBlue font-AmsterdamOne">
            Dear Senpai
          </a>
        </Link>
      </div>
      {/* <a className="relative text-white text-lg font-normal transition ease-in-out before:content[''] before:absolute before:bg-cyan-800 before:w-0 before:h-[3px] before:bottom-0 before:left-0 before:transition before:ease-in-out hover:text-cyan-400 hover:before:w-full ">
        manish
      </a> */}
      <div
        className="cursor-pointer items-center hidden tablet:block phone:block"
        onClick={toggle}
      >
        <FaBars className="text-white text-[26px]" />
      </div>
      <div className={styles.navbar_links}>
        <div className={styles.navbar_link}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/poem">
            <a className={`${currentPath === "/poem" && ""}`}>
              Alfaaz-e-Sukhan
            </a>
          </Link>
          <Link href="/photography">
            <a>Photography</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      {/* <a className="relative hover:text-pink-400 cursor-pointer before:content[''] before:absolute before:bg-cyan-500 before:w-0 before-h-[3px] bottom-0 left-0 transition ease-in delay-[0.3s] hover:before:w-full">Contact</a> */}
      <div
        className={isOpen ? styles.navbar_sidebar : styles.navbar_sidebar_open}
      >
        {/* <div
        className={`fixed w-full h-full bg-[#2184a7] hidden tablet:grid phone:grid items-center z-[999] ${
          isOpen ? "opacity-[1] transition-[0.5s] ease-in-out top-0 left-0 " : "opacity-0 transition-[1s] ease-in-out left-0 top-full"
        }`}
      > */}
        <div
          className="absolute top-5 right-6 bg-transparent text-[2rem] cursor-pointer outline-none"
          onClick={toggle}
        >
          <FaWindowClose color="#fff" />
        </div>
        <div
          className="h-full flex flex-col gap-5 mt-32 items-center text-[1.5rem] text-white"
          onClick={toggle}
        >
          <Link href="/about">
            <a className="">About</a>
          </Link>
          <Link href="/photography">
            <a>Photo</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <div>
            <ButtonBW label="Sign In" darkButton={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
