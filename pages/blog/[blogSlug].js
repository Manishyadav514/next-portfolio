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
        className="relative text-white flex items-end justify-start w-full text-left bg-center bg-cover h-[500px] bg-gray-500"
        style={{
          backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 68%), rgb(1 18 34 / 75%)), url(https://source.unsplash.com/random/240x320&quot;)`,
        }}
      >
        <div className="absolute top-2 left-2 p-1/2 flex flex-col">
          <span className="text-3xl font-semibold leading-none tracking-wide">
            Go
          </span>
          <span className="leading-none uppercase  hover:text-cyan-700">
            <Link href="/blog">&#8592; Back</Link>
          </span>
        </div>
        <div className="absolute top-[200px] left-[100px] tablet:left-12 phone:left-8">
          <h3 className="text-5xl phone:text-3xl font-bold leading-none flex-1 py-2">
            {blog?.title}
          </h3>
        </div>
      </div>
      {/* <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 phone:h-96 bg-gray-500" ></img> */}
      <article className="mb-32 max-w-7xl flex flex-col overflow-hidden rounded relative w-11/12 px-10 -mt-[100px]  phone:px-10 tablet:px-16 bg-gray-900 text-gray-100  py-24 mx-auto space-y-16">
        <div className="w-full mx-auto space-y-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold leading-none">by Manish Yadav</h1>
            <p className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined">
              Feb 20, 2021
            </p>
          </div>
          <div className="flex flex-wrap space-x-2 text-sm text-gray-400">
            <span>#MambaUI</span>
            <span>#TailwindCSS</span>
            <span>#Angular</span>
          </div>
          <p className="text-sm text-gray-400">
            by
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-violet-400"
            >
              <span>Leroy Jenkins</span>
            </a>
            on
            <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
          </p>
        </div>
        <div className="text-gray-100">
          {blog && (
            <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
          )}
        </div>
      </article>
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
