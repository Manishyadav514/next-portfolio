import React from "react";
import styles from "../styles/about.module.scss";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Contact from "../components/Contact";

const about = () => {
  return (
    <>
      <div className={styles.about_second_container}>
        <div className={styles.profile_container}>
          <div className={styles.profile_overlay}>
            <div className={styles.pulse1}></div>
            <div className={styles.pulse2}></div>
            <div className={styles.moving_pulse}></div>
            <div className={styles.profile_image}>
              <Image
                src="/images/profile-pic.png"
                layout="fill"
                alt="profile"
              />
            </div>
          </div>
        </div>

        <div className={styles.profile_content}>
          <h2>
            Hi, {`I'm`} MANISH YADAV
            <span> a Mumbai based Javascript developer</span>
          </h2>
          <div className={styles.social_links}>
            <Link href="/">
              <a target="_blank" rel="noopener noreferrer">
                <FaFacebookMessenger
                  style={{ color: "#448AFF", borderRadius: 2 }}
                />
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
      </div>
      <div className={styles.intro_container}>
        <div className={styles.intro_col1}>
          <h2 className={styles.circle_text}>About Me</h2>
        </div>
        <div className={styles.intro_col2}>
          <p>
            Manish Yadav has completed his {`bachelor's`} degree in Computer
            Science from Ashoka University. He also likes to write poems in his
            free time. bLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus bibendum libero sed arcu cursus varius. Cras id ex
            tincidunt, rhoncus metus ac, interdum dolor. Vivamus eget efficitur
            dui, tincidunt consectetur ex. In elementum nibh ex. Maecenas
            tincidunt, nisl id commodo iaculis, risus nunc laoreet enim, vel
            imperdiet augue eros id magna. Nullam iaculis nibh et erat
            condimentum ultrices. Morbi non ligula non ante facilisis maximus et
            eget eros. Vivamus blandit justo risus, vel eleifend augue
            condimentum non. Ut enim sapien, auctor eget felis at, dictum
            egestas nibh. Cras auctor a purus ut cursus. Suspendisse diam nulla,
            mattis in ornare in, molestie ut velit. Nam eget est non tortor
            scelerisque blandit. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Morbi ac massa commodo,
            auctor velit at, lacinia urna. Morbi placerat elit ut erat
            vestibulum semper. Nulla bibendum consequat lectus nec tincidunt.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Curabitur ut suscipit massa, at pulvinar massa. Sed quis venenatis
            est, id dapibus elit. Phasellus semper, felis a vehicula posuere,
            tellus est lacinia ex, eget pellentesque velit nibh eu purus. Donec
            odio orci, finibus a odio a, vehicula aliquet enim. In iaculis eros
            non nulla pharetra, quis viverra sapien dapibus. Mauris ac dolor
            commodo, tempus nunc sed, fringilla ante.
          </p>
        </div>
      </div>
      <div style={{ width: "100%", height: "100%", display: "block" }}>
        {/* <img
          src="/WebPoster.png"
          style={{ width: "100%"}}
        ></img> */}
        {/* <Image
          alt="WebPoster"
          src="/WebPoster.png"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        /> */}
      </div>
      <Contact />
    </>
  );
};

export default about;
