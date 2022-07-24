import React from "react";
// import "../Portfolio.css";
import styles from "../styles/SliderBackground.module.css";
// import Video from "../public/bg-video.mp4";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import {
  AiFillFacebook,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/Ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const DownloadedHeader = () => {
  return (
      <div className={styles.video_container}>
        {/* VIDEO  */}
        <div>
          <video
            className={`${styles["video_slide"]} ${styles["active"]}`}
            src="/bgv_1.mp4"
            autoPlay
            muted
            loop
          ></video>

          <video
            className={styles.video_slide}
            src="/bg-video.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        {/* CONTENT */}
        <div className={`${styles["content"]} ${styles["active"]}`}>
          <h1>
            MANISH <span>YADAV</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link href="/">
            <a>Read More</a>
          </Link>
        </div>

        <div className={styles.content}>
          <h1>
            Feel Nature.<span>Relax</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link href="/">
            <a>Read More</a>
          </Link>
        </div>
        {/* SOCIAL-ICON */}
        <div className={styles.media_icons}>
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
        {/* NAVIGATION */}
        <div className={styles.video_navigation}>
          <div className={`${styles["video_btn"]} ${styles["active"]}`}></div>
          <div className={styles.video_btn}></div>
        </div>
      </div>
  );
};

export default DownloadedHeader;
