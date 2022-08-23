import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { Banner1, Banner2, Banner3 } from "../components/Banner";
import HomeCard from "../components/HomeCard.js";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  CardData,
  homeObjSix
} from "../data/HomeCardData.tsx";

export default function Home() {
  // CardData.map((homeObj)=>{
  //   console.log(homeObj.id);
  // })

  return (
    <div className={styles.container}>
      <Head>
        <title>FoxArchive</title>
        <meta name="description" content="Manish Yadav's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Banner1/>
        {/* <Banner2 /> */}
        {/* <Banner3 /> */}
        {/* <TailwindBanner/> */}
        <HomeCard id="1" {...homeObjOne} />
        <HomeCard id="2" {...homeObjTwo} />
        <HomeCard id="3" {...homeObjThree} />
        <HomeCard id="4" {...homeObjFour} />
        <HomeCard id="5" {...homeObjFive} />
        <HomeCard id="6" {...homeObjSix} />
      </div>
    </div>
  );
}
