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
    <div>
      <div className={styles.banner1_container}>
        <div >
          <Image
            alt="banner"
            width="100%"
            height="100"
            layout="fill"
            src="/background/bg_5.jpg"
            className={`${styles["banner1_video"]} ${styles["active"]}`}
          />
          {/* <video
            className={`${styles["banner1_video"]} ${styles["active"]}`}
            src="/background/bg_1.mp4"
            autoPlay
            muted
            loop
          ></video> */}
        </div>
        <div className={`${styles["banner1_content"]}`}>
          <h1>
            Fox<span>Archive</span>
          </h1>
          <p>
            FoxArchive is projects collection of a Javascript developer at a
            Mumbai based firm. Explore real world projects including few things
            that he is most passionate about. He believes in supremacy of having
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

export const TailwindBanner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: 50 }}
            >
              <Image
                src="/background/bg_1.jpg"
                alt="Picture of the author"
                width="900px"
                height="300px"
                className="block w-full"
                layout="fill"
              />
              {/* <Image layout="fill" width={500} height={300} alt="as" src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg" className="block w-full" /> */}
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: 50 }}
            >
              {/* <Image alt="a" src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg" className="block w-full" /> */}
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: 50 }}
            >
              {/* <Image alt="as" src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" className="block w-full" /> */}
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
