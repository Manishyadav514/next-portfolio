import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ThankYou } from "../../components/ThankYou";
import { NoData } from "../../components/NoData";
import { PoemData } from "../../data/Data";
import { CommonIcon } from "../../components/CommonIcon";
// import InfiniteScroll from 'react-infinite-scroll-component';

const Poem = (props) => {
  // const [poems, setPoem] = useState(props.PoemData);
  const [isView, setIsView] = useState(false);
  const [poems, setPoem] = useState([]);
  const fetchPoemData = async () => {
    try {
      let res = await fetch(`http://localhost:3000/api/poemAPI`);
      const PoemData = await res.json();
      setPoem(PoemData);
    } catch (e) {
      console.error("Something went wrong------------", "\n", e);
    } finally {
      poems?.length === 0 && setPoem(PoemData);
    }
  };

  useEffect(() => {
    fetchPoemData();
  });

  return (
    <div className="">
      <ThankYou
        labelPrimary="Welcome"
        labelSub="to"
        labelSecondry="my poem section"
        imagedata={{ src: "/svg/i-books.svg", height: 600, width: 600 }}
      />
      {poems?.length > 0 ? (
        <div className="p-4 md:p-20 lg:p-52 pt-20 bg-aquaDark2 shadow-xl grid grid-cols-1 gap-5">
          {poems?.map((poem) => {
            return (
              <article
                key={`/poem/${poem?.slug}`}
                className={`flex flex-col   bg-white border border-aquaLight3 shadow-md text-aquaDark1 ${
                  isView ? "lg:flex-col" : "lg:flex-row"
                }`}
              >
                <div
                  className={`relative flex items-end justify-start w-full text-left bg-center bg-cover h-64 dark:bg-gray-500 ${
                    isView ? "w-full" : "lg:w-3/4"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 68%), rgb(1 18 34 / 75%)), url(https://images.unsplash.com/photo-1525935944571-4e99237764c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2ODU3OTk0MDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)`,
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <Link legacyBehavior href={`/poem/${poem?.slug}`}>
                      <a className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined">
                        2.1K Views
                      </a>
                    </Link>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leading-none tracking-wide">
                        04
                      </span>
                      <span className="leading-none uppercase">Aug</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-5">
                    <span className="w-full flex flex-row items-center place-content-center gap-2 px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined">
                      2K <CommonIcon icon="mdi:heart" />
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col p-6 w-full justify-between">
                  <div>
                    <h3 className="capitalize flex-1 py-2 text-lg font-semibold leading-snug">
                      {poem?.title}
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>{`by ${poem.author}`}</span>
                      <span>3 min read</span>
                    </div>
                  </div>
                  <div
                    className={`py-2 text-sm font-normal leading-snug ${
                      isView ? "text-center" : "text-start"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: isView
                        ? poem?.content
                        : poem?.content?.substr(0, 100),
                    }}
                  />
                  <div className="flex flex-row justify-between">
                    <span className="cursor-pointer flex flex-row text-center items-center gap-3 hover:text-pink-500 text-violet-400">
                      <button onClick={() => setIsView(!isView)}>
                        {isView ? "See Less" : "View More"}
                      </button>
                      <CommonIcon icon="carbon:view" />
                    </span>
                    <span className="flex flex-row text-center items-center gap-3 hover:text-pink-500 text-violet-400">
                      <Link href={`/poem/${poem?.slug}`}>Read On New Page</Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <NoData
          labelPrimary={""}
          labelSub={""}
          labelSecondry={""}
          imagedata={{
            src: "",
            width: 0,
            height: 0,
          }}
        />
      )}
    </div>
  );
};

// import * as fs from "fs";
// export async function getStaticProps(context) {
// 1-method
// let res = await fetch(`http://localhost:3000/api/poemAPI`)
// const PoemData = await res.json()
// 2-method
// let PoemData = await fs.promises.readFile("data/PoemData.json/", "utf-8");
// PoemData = JSON.parse(PoemData)
//   return {
//     props: { PoemData },
//   };
// }

export default Poem;
