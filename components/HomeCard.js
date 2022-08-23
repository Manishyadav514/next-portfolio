import React from "react";
import styles from "../styles/HomeCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { ButtonBlack, ButtonWhite } from "../components/Button.js";
import { GoLinkExternal } from "react-icons/go";
const HomeCard = (props) => {
  // console.log(props.svgSrc);
  // let links = props.links;
  // console.log(props.links.length);
  // props.links.map((link) => console.log(link?.title));
  return (
    <div className={styles.card} id={props.id}>
      <div
        className={`${styles["card_row"]} ${
          props.imgStart ? styles["image_first"] : styles[""]
        }`}
      >
        <div className={styles.card_col1}>
          <div className={styles.card_text}>
            <div className={styles.card_title}>{props.topLine}</div>
            <div className={styles.card_heading}>{props.title}</div>
            <div className={styles.card_subtitle}>{props.description}</div>
            <>
              {props.links.length === 1 ? (
                <div className={styles.card_button}>
                  {props.dark ? (
                    <Link href={props.links[0]?.direct}>
                      <a target="_blank" rel="noopener noreferrer">
                        <ButtonWhite title={props.links[0]?.title} />
                      </a>
                    </Link>
                  ) : (
                    <Link href={props.links[0]?.direct}>
                      <a target="_blank" rel="noopener noreferrer">
                        <ButtonBlack title={props.links[0]?.title} />
                      </a>
                    </Link>
                  )}
                </div>
              ) : (
                <div className={styles.card_links}>
                  {props.links?.map((link) => (
                    <>
                      <div key={link?.direct} className={styles.homeCardLinks}>
                        <Link href={link?.direct}>
                          <a target="_blank" rel="noopener noreferrer">
                            {link?.title} <GoLinkExternal />
                          </a>
                        </Link>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </>
          </div>
        </div>
        <div className={styles.card_col2}>
          <div className={styles.image_box}>
            <div className={styles.image_iframe}>
              {props.iFrame ? (
                <>
                  <iframe
                    src={props?.iFrame}
                    className={styles.iFrame}
                    frameBorder="0"
                  ></iframe>
                  <div className={styles.homeCard_image}>
                    <Image
                      src={props.imageSrc}
                      width={400}
                      height={400}
                      layout="intrinsic"
                      alt={props.altbox}
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={props.imageSrc}
                  width={400}
                  height={400}
                  alt={props.altbox}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
