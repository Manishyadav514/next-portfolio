import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
// import logo from "../public/images/logo.png";
import { useRouter } from "next/router";

export const Header1 = () => {
  const router = useRouter();
  let currentPath = router.pathname;
  const homePath = currentPath === "/";
  const blogPath = currentPath.slice(0,6) === "/blog/";
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
    // <div className={styles.navbar} id="navbar">
    <div
      className={`z-[999] top-0 left-0 w-full flex justify-between items-center py-[15px] px-[200px] tablet:p-[25px] mobile:p-[15px] transition-all ${
        homePath
          ? "absolute bg-transparent text-[#34173c]"
          : "bg-[#051A28] text-white"
      } ${styles.navbar}`}
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
          <a className="text-base font-medium hover:text-cyan-800 font-AmsterdamOne">
            Dear Senpai
          </a>
        </Link>
      </div>
      <div className={styles.navbar_toggle} onClick={toggle}>
        <FaBars className={styles.navbar_toggle_icon} />
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
      <div
        className={isOpen ? styles.navbar_sidebar : styles.navbar_sidebar_open}
      >
        <div className={styles.navbar_sidebar_toggle} onClick={toggle}>
          <FaWindowClose color="#fff" />
        </div>
        <div className={styles.navbar_sidebar_links} onClick={toggle}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/photography">
            <a>Photo</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className={styles.navbar_sidebar_button}>
          <Link href="/">
            <a>SignIn</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
