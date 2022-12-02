import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
// import { Banner1, Banner2, Banner3 } from "../components/Banner";
import * as banners from "../components/Banner";
import {
  HomeCard,
  Features,
  Download,
  SectionWrapper,
  HomeCardTailwind,
} from "../components/HomeCard.js";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  CardData,
  homeObjSix,
} from "../data/HomeCardData.tsx";
export default function Home() {
  // CardData.map((homeObj)=>{
  //   console.log(homeObj.id);
  // })
  // console.log(homeObjTwo)

  return (
    <div className={styles.container}>
      <Head>
        <title>FoxArchive</title>
        <meta name="description" content="Manish Yadav's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <banners.Banner1 />
        {/* <Download /> */}
        {/* <Banner2 /> */}
        {/* <Banner3 /> */}
        {/* <TailwindBanner/> */}
        <HomeCardTailwind
          id="2"
          props={homeObjTwo}
          dark={true}
          imageFront={true}
        />
        <Features dark={true} />
        <HomeCardTailwind
          id="2"
          props={homeObjFour}
          dark={true}
          imageFront={false}
        />{" "}
        <SectionWrapper
          title="Project Section"
          description={`Experience React and Next JS project. I have built Amazon clone with similar UI and funcationality like "add to bag", "add to wishlist", and so on.`}
          mockupImg="/assets/home_cards.png"
          reverse
          banner="/svg/banner04.svg"
          dark
        />
        {/* <HomeCard id="4" {...homeObjFour} /> */}
        {/* <HomeCard id="1" {...homeObjOne} /> */}
        <SectionWrapper
          title="Netflix Clone"
          description={`Experience Netflix clone built with React.js and open source Rest API.`}
          mockupImg="/vidgif/netflix.gif"
          banner="/svg/wave-2.svg"
          dark
        />
        <HomeCardTailwind
          id="6"
          props={homeObjFive}
          dark={false}
          imageFront={false}
        />
        <HomeCard id="3" {...homeObjThree} />
        {/* <HomeCard id="5" {...homeObjFive} /> */}
        <HomeCardTailwind
          id="6"
          props={homeObjSix}
          dark={true}
          imageFront={true}
        />
      </div>
    </div>
  );
}
