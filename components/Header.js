import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";
// import { FaBars, FaWindowClose } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Header1 = () => {
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

  const Scroll = (scrollPosition) => {
    if (scrollPosition >= 80) {
      document.getElementById("navbar").style.position = "sticky";
      document.getElementById("navbar").style.background = "transparent";
    } else if (scrollPosition >= 280) {
      document.getElementById("navbar").style.position = "none";
      document.getElementById("navbar").style.background = "#232a34";
    } else {
      document.getElementById("navbar").style.position = "none";
      document.getElementById("navbar").style.background = "#232a34";
    }
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    Scroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.navbar} id="navbar">
      <Image width="50" height="50" src="/lg2.png" alt="logo" />
      <Link href="/">
        <a className={styles.navbar_title}>AwarenessHall</a>
      </Link>
      <div className={styles.navbar_toggle} onClick={toggle}>
        {/* <FaBars color="white" /> */}
      </div>
      <div className={styles.navbar_links}>
        <div className={styles.navbar_link}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#javascript">
            <a>JS</a>
          </Link>
          <Link href="#css">
            <a>CSS</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <div
        className={isOpen ? styles.navbar_sidebar : styles.navbar_sidebar_open}
      >
        <div className={styles.navbar_sidebar_toggle} onClick={toggle}>
          {/* <FaWindowClose color="#fff" /> */}
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
