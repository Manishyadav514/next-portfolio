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
      className={`z-[999] top-0 left-0 w-full flex justify-between items-center px-[12px] py-[15px] md:px-[200px] md:p-[25px] p-[15px] transition-all ${
        homePath
          ? "md:absolute relative md:bg-transparent bg-[#051A28] text-[#34173c]"
          : "bg-[#051A28] text-white"
      }`}
      id="navbar"
    >
      <div className="flex align-middle items-center justify-center">
        <Link href="/">
          <Image
            width={120}
            height={50}
            src={"logo/dearsenpai.webp"}
            alt="logo"
            priority
            className="cursor-pointer"
          />
        </Link>
      </div>
      {/* <a className="relative text-white text-lg font-normal transition ease-in-out before:content[''] before:absolute before:bg-cyan-800 before:w-0 before:h-[3px] before:bottom-0 before:left-0 before:transition before:ease-in-out hover:text-cyan-400 hover:before:w-full ">
        manish
      </a> */}
      <div
        className="cursor-pointer items-center lg:hidden md:block block"
        onClick={toggle}
      >
        <div
          className="rounded p-1 md:p-2 cursor-pointer flex flex-row bg-[#222222] text-white items-center lg:hidden"
          onClick={toggle}
        >
          <div className="mr-1 hidden md:block lg:inline-flex lg:w-auto w-full rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            Menu
          </div>
          <div className="text-[1.3rem]">
            <FaBars />
          </div>
        </div>
      </div>
      {/* top navigation bar */}
      <div
        className={`hidden lg:block text-[1em] font-medium ${
          homePath ? "text-black" : "text-white"
        } ${styles.navbar_links}`}
      >
        <div className={` ${styles.navbar_link}`}>
          {menuLink.map((item: any) => (
            <Link key={item.label} href={item.slug}>
              <a className="hover:text-pink-500 pb-2 ml-[30px]">
                {item.label}
                {/* {item?.child?.length > 0 && (
                  <span className="text-xl">&#8250;</span>
                )} */}
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* <a className="relative hover:text-pink-400 cursor-pointer before:content[''] before:absolute before:bg-cyan-500 before:w-0 before-h-[3px] bottom-0 left-0 transition ease-in delay-[0.3s] hover:before:w-full">Contact</a> */}
      {/* side navigation bar */}
      <div
        className={`lg:hidden ${
          isOpen
            ? `fixed w-full h-full ease-linear transform transition duration-500 z-[999] left-0 top-0 bg-[#2184a7] opacity-100`
            : `fixed w-full h-full ease-linear transform transition duration-500 z-[999] left-0 top-0 -translate-x-full opacity-0 bg-[#0d0d0d]`
        }`}
      >
        <div
          className="absolute top-5 right-6 bg-transparent text-[2rem] cursor-pointer outline-none"
          onClick={toggle}
        >
          <FaWindowClose />
        </div>
        <div
          className="h-full flex flex-col gap-5 mt-32 items-center text-[1.5rem] text-white"
          onClick={toggle}
        >
          {menuLink.map((item: any) => (
            <span
              key={item.label}
              className="p-2 mx-1 text-white hover:bg-[#E64238] rounded cursor-pointer"
            >
              <Link href={item.slug}>{item.label}</Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const menuLink = [
  {
    label: "Home",
    slug: "/",
  },
  {
    label: "Blog",
    slug: "/blog",
  },
  {
    label: "Alfaaz-e-Sukhan",
    slug: "/poem",
  },
  {
    label: "Photography",
    slug: "/photography",
  },
  {
    label: "About",
    slug: "/about",
  },
];
