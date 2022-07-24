import React from "react";
import styles from "../styles/HomeCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { ButtonBlack, ButtonWhite } from "../components/Button.js";

const HomeCard = (props) => {
  // console.log(props.svgSrc);
  return (
    <div className={styles.card} id={props.id}>
      <div className={styles.card_row}>
        <div className={styles.card_col1}>
          <div className={styles.card_text}>
            <div className={styles.card_title}>{props.topLine}</div>
            <div className={styles.card_heading}>{props.title}</div>
            <div className={styles.card_subtitle}>{props.description}</div>
            <div className={styles.card_button}>
                {/* <a>{props.dark}</a> */}
                {props.dark ? (
                  <Link href="about">
                    <a>
                      <ButtonWhite title="explore CSS Project" />
                    </a>
                  </Link>
                ) : (
                  "as"
                )}
            </div>
          </div>
        </div>
        <div className={styles.card_col2}>
          <div className={styles.image_box}>
            <div className={styles.image_inner}>
              <Image
                src={props.svgSrc}
                width={400}
                height={400}
                alt={props.altbox}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
