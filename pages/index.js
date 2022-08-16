import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { Banner1, Banner2,TailwindBanner } from "../components/Banner";
import HomeCard from "../components/HomeCard.js";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  CardData,
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
        <TailwindBanner/>
        <HomeCard {...homeObjOne} />
        <HomeCard {...homeObjTwo} />
        <HomeCard {...homeObjThree} />
        <HomeCard {...homeObjFour} />
        <HomeCard {...homeObjFive} />
      </div>
    </div>
  );
}
