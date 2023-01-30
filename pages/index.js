import Head from "next/head";
import React from "react";
import { Banner } from "../components/Banner";
import Contact from "../components/Contact";
import Features from "../components/Features";
import SectionWrapper, { HomeCard } from "../components/SectionWrapper";
import { SectionWrapperData } from "../data/HomeCardData.tsx";
import { ThankYou } from "../components/ThankYou";

export default function Home() {
  SectionWrapperData.map((item) => console.log(item.title));
  return (
    <>
      <Head>
        <title>DearSenpai</title>
        <meta name="description" content="Manish Yadav's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Banner />
        {SectionWrapperData?.slice(0, 3).map((item, index) => {
          return (
            <>
              {
                <SectionWrapper
                  title={item.title}
                  topLine={item.topLine}
                  description={item.description}
                  mockupImg={item.mockupImg}
                  bannerSVG={item.bannerSVG}
                  links={item.links}
                  dark={item.dark}
                  imageFront={item.imageFirst}
                />
              }
            </>
          );
        })}

        {/* {SectionWrapperData?.slice(3).map((item, index) => {
          return (
            <>
              {
                <SectionWrapper
                  title={item.title}
                  topLine={item.topLine}
                  description={item.description}
                  mockupImg={item.mockupImg}
                  bannerSVG={item.bannerSVG}
                  links={item.links}
                  dark={item.dark}
                  imageFront={item.imageFirst}
                />
              }
            </>
          );
        })} */}
        <Features dark={false} />
        <SectionWrapper
          title={SectionWrapperData[3].title}
          topLine={SectionWrapperData[3].topLine}
          description={SectionWrapperData[3].description}
          mockupImg={SectionWrapperData[3].mockupImg}
          bannerSVG={SectionWrapperData[3].bannerSVG}
          links={SectionWrapperData[3].links}
          dark={SectionWrapperData[3].dark}
          imageFront={SectionWrapperData[3].imageFirst}
        />
        <HomeCard
          id="2"
          props={SectionWrapperData[4]}
          dark={true}
          imageFront={false}
        />
        <SectionWrapper
          title={SectionWrapperData[5].title}
          topLine={SectionWrapperData[5].topLine}
          description={SectionWrapperData[5].description}
          mockupImg={SectionWrapperData[5].mockupImg}
          bannerSVG={SectionWrapperData[5].bannerSVG}
          links={SectionWrapperData[5].links}
          dark={SectionWrapperData[5].dark}
          imageFront={SectionWrapperData[5].imageFirst}
        />
        <Contact />
        <ThankYou
          labelPrimary="Thanks"
          labelSub="For"
          labelSecondry="making this far"
          imagedata={{ src: "/images/anya.png", height: 100, width: 100 }}
        />
      </div>
    </>
  );
}
