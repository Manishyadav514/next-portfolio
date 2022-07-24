import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonBlack, ButtonWhite } from "./Button";
import styles from "../styles/Banner.module.css";
export const Banner1 = () => {
  return <div>Banner1</div>;
};

export const Banner2 = () => {
  return (
    <div>
      <div className={styles.banner2_header} id="home">
        <div className={styles.banner2_banner}>
          <div className={styles.banner2_container}>
            <h1>HTML-CSS-JS Project</h1>
            <p>Explore my creative Javascript, HTML, and CSS projects.</p>
            <Link href="about">
              <a>
                <ButtonWhite title="About" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
