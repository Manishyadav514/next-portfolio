import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <>
      <div
        className="relative  flex items-end justify-start w-full text-left bg-center bg-cover h-[500px]"
        style={
          {
            backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 68%), rgb(1 18 34 / 75%)), url("https://source.unsplash.com/random/240x320&quot;")`,
            // backgroundImage: `linear-gradient(90deg, #DEEBEC, #73B3B2)`,
          }
        }
      >
        <div className="text-aquaLight2 absolute top-2 left-2 p-1/2 flex flex-col">
          <span className="text-4xl font-extrabold leading-none tracking-wide">
            Go
          </span>
          <span className="hover:text-aquaLight1 text-1xl font-bold leading-none uppercase">
            <Link href="/blog">&#8592; Back</Link>
          </span>
        </div>
        <div className="bg-aquaDark2 text-aquaLight1 px-[2rem] absolute top-[200px] md:left-[100px] md:left-12 left-8">
          <h3 className="md:text-7xl font-GreatVibes text-3xl font-bold leading-none flex-1 py-2">
            {blog?.title}
          </h3>
        </div>
      </div>
      {/* <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 h-96 bg-gray-500" ></img> */}
      <div className="">
        <article className="bg-white text-aquaDark1 border border-aquaLight2 shadow-lg mb-32 max-w-7xl flex flex-col overflow-hidden rounded relative w-11/12 md:px-10 px-4 md:px-6 -mt-[100px]   text-aqua1  py-24 mx-auto space-y-16">
          <div className="w-full mx-auto space-y-4">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-none">
                by Manish Yadav
              </h1>
              <p className="px-3 py-2 text-xs font-semibold tracking-wider uppercase  bgundefined">
                Feb 20, 2021
              </p>
            </div>
            <div className="flex flex-wrap space-x-2 text-sm ">
              <span>#MambaUI</span>
              <span>#TailwindCSS</span>
              <span>#Angular</span>
            </div>
          </div>
          <div className="md:text-xl md:text-lg text-base font-normal leading-10 tracking-normal">
            {blog && (
              <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
            )}
          </div>
        </article>
      </div>
    </>
  );
};

import * as fs from "fs";
import Link from "next/link";
// This generates static paths for each route.
export async function getStaticPaths() {
  let data = await fs.promises.readdir(`data/blogData`);
  data = data.map((item) => {
    return { params: { blogSlug: item.split(".")[0] } };
  });
  return {
    paths: data,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { blogSlug } = context.params;
  let myBlog = await fs.promises.readFile(
    `data/blogData/${blogSlug}.json`,
    "utf-8"
  );

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Slug;
