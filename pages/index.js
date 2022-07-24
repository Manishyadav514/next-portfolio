import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import {Banner1, Banner2} from "../components/Banner";
import { Header1 } from "../components/Header.js";
import SliderBackground from "../components/SliderBackground.js";
import HomeCard from "../components/HomeCard.js";
import { homeObjOne, homeObjTwo, homeObjThree } from "../data/HomeCardData.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Manish Yadav's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Banner2/>
        {/* <SliderBackground /> */}
        <HomeCard {...homeObjOne} />
        <HomeCard {...homeObjTwo} />
        <HomeCard {...homeObjThree} />
      </div>
    </div>
  );
}
