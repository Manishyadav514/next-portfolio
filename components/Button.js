import React from "react";
import styles from "../styles/Button.module.css";

export const ButtonBW = ({ title, darkButton }) => {
  return (
    <div
      className={`${styles.btn} ${darkButton ? styles.btn_black : styles.btn_white}`}
    >
      {title}
    </div>
  );
};

export const ButtonWhite = (props) => {
  return (
    <div className={`${styles["btn"]} ${styles["btn_white"]}`}>
      {props.title}
    </div>
  );
};
