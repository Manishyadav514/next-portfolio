import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import * as banners from "../components/Banner";
import Contact from "../components/Contact";
import { Features, Download, SectionWrapper } from "../components/HomeCard.js";
import { SectionWrapperData } from "../data/HomeCardData.tsx";

export default function Home() {
  SectionWrapperData.map((item) => console.log(item.title));
  return (
    <div className={styles.container}>
      <Head>
        <title>DoomedSenpai</title>
        <meta name="description" content="Manish Yadav's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <banners.Banner1 />
        {SectionWrapperData?.slice(0, 3).map((item, index) => {
          return (
            <>
              {
                <SectionWrapper
                  title={item.title}
                  topLine={item.topLine}
                  description={item.description}
                  mockupImg={item.mockupImg}
                  banner={item.banner}
                  links={item.links}
                  dark={item.dark}
                  imageFront={item.imageFirst}
                />
              }
            </>
          );
        })}

        <Features dark={true} />
        {SectionWrapperData?.slice(3).map((item, index) => {
          return (
            <>
              {
                <SectionWrapper
                  title={item.title}
                  topLine={item.topLine}
                  description={item.description}
                  mockupImg={item.mockupImg}
                  banner={item.banner}
                  links={item.links}
                  dark={item.dark}
                  imageFront={item.imageFirst}
                />
              }
            </>
          );
        })}
        {/*
        <HomeCardTailwind
          id="2"
          props={homeObjFour}
          dark={true}
          imageFront={false}
        /> */}
        {/* <HomeCard id="4" {...homeObjFour} /> */}
        <Contact />
        <Download />
      </div>
    </div>
  );
}
