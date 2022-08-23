import React from "react";
import Link from "next/link";
import { ButtonBlack, ButtonWhite } from "./Button";
import styles from "../styles/Banner.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

export const Banner1 = () => {
  return (
    <>
      <div className={styles.banner1_container}>
          <div className={styles.banner1_containerImage}>
            <Image alt="banner" layout="fill" src="/background/bg_2.png" />
          </div>
          <div className={styles.banner1_containerVideo}>
            <video src="/video/video_1.mp4" autoPlay muted loop></video>
          </div>
        <div className={`${styles["banner1_content"]}`}>
          <div className={styles.banner1_containerImage}>
            <h1>
              Fox<span>Archive</span>
            </h1>
            <p>
              FoxArchive is a project collections of a Javascript developer based
              out of Mumbai. Explore real world projects including few things
              that he is most passionate about. He believes in supremacy of
              having multiple solution for a particular problem.
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
    </>
  );
};

export const Banner2 = () => {
  return (
    <div>
      <div className={styles.banner2_header} id="home">
        <div className={styles.banner2_banner}>
          <div className={styles.banner2_container}>
            <h1>Fox Archive</h1>
            <p>
              Nothing just a way to get know me better by exploring some of my
              projects.
            </p>
            <Link href="about">
              <a>
                <ButtonWhite title="About" />
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
            layout="fill"
            src="/background/bg_3.png"
          />
        </div>
        <div className={`${styles["banner3_ContentIcon"]}`}>
          <div className={`${styles["banner3_content"]}`}>
            <h1>
              Fox<span>Archive</span>
            </h1>
            <p>
              FoxArchive is projects collection of a Javascript developer at a
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
