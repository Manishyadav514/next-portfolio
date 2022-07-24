import React from "react";
import styles from "../styles/Footer.module.css"
const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <p>
          copyright &copy; happy vibes
          <span id="date"></span>. all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
