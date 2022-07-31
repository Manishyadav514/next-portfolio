import React from "react";
import Link from "next/link";
import { ButtonBlack, ButtonWhite } from "./Button";
import styles from "../styles/Banner.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Banner1 = () => {
  return (
    
    <div>
      <div className={styles.banner1_container}>
        <div>
          <video
            className={`${styles["banner1_video"]} ${styles["active"]}`}
            src="/background/bgv_1.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className={`${styles["banner1_content"]}`}>
          <h1>
            MANISH <span>YADAV</span>
          </h1>
          <p>
            Manish Yadav is a Javascript developer at a Mumbai based firm. When
            he is not engaged with his tech job, he loves to capture moments
            with his photography skill. He believes in supremacy of having
            multiple solution for a particular problem.
          </p>
          <Link href="/about">
            <a>Read More</a>
          </Link>
        </div>
        <div className={styles.banner1_icons}>
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
