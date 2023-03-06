import React, { useEffect, useState } from "react";
import Link from "next/link";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { NoData } from "../../components/NoData";

const Blog = (props) => {
  // const [count, setCount] = useState(2);

  const [blogs, setBlog] = useState();
  const fetchBlogData = async () => {
    let res = await fetch(`http://localhost:3000/api/blogAPI`);
    const BlogData = await res.json();
    setBlog(BlogData);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl md:p-20 p-4 mx-auto bg-transparent text-gray-100">
        {!blogs ? (
          <NoData />
        ) : (
          <>
            {/* <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      > */}
            {/* {blogs.map((blogItem) => {
              return (
                <div key={blogItem?.slug}>
                  <Link href={`/blogRouting/${blogItem?.slug}`}>
                    <h3 className="">{blogItem?.title}</h3>
                  </Link>
                  <p className="">
                    {blogItem?.metadesc?.substr(0, 140)}...
                  </p>
                  <Link href={`/blog/${blogItem?.slug}`}>
                    <button className="">Read More</button>
                  </Link>
                </div>
              );
            })} */}
            <div className="p-4 pt-20 bg-aquaLight2 border border-aquaLight3 shadow-xl rounded grid grid-cols-1 gap-5 laptop:grid-cols-4 md:grid-cols-2">
              {blogs.map((blogItem) => {
                return (
                  <>
                    <article
                      key={blogItem.slug}
                      className="flex flex-col bg-white border border-aquaLight3 shadow-md text-aquaDark1"
                    >
                      <div
                        className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-64 dark:bg-gray-500"
                        style={{
                          backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 68%), rgb(1 18 34 / 75%)), url(https://source.unsplash.com/random/240x320&quot;)`,
                        }}
                      >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                          {/* <a
                        rel="noopener noreferrer"
                        href="#"
                        className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined"
                      >
                        {blogItem?.title}
                      </a> */}

                          <Link href={`/blog/${blogItem?.slug}`}>
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
                        {/* <h2 className="z-10 p-5">
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="font-medium text-lg hover:underline text-gray-100"
                          >
                            {blogItem.title}
                          </a>
                        </h2> */}
                      </div>
                      <div className="flex flex-col flex-1 p-6">
                        <div>
                          {" "}
                          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                            {blogItem.title}
                          </h3>
                          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                            <span>by Manish Y.</span>
                            <span>3 min read</span>
                          </div>
                        </div>
                        <h3 className="flex-1 py-2 text-sm font-normal leading-snug h-52">
                          {blogItem?.metadesc?.substr(0, 250)}...
                        </h3>
                        <span className="flex flex-row text-center items-center gap-3 hover:text-pink-500 text-violet-400">
                          <Link href={`/blog/${blogItem?.slug}`}>
                            Read more
                          </Link>
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
                    </article>
                  </>
                );
              })}
            </div>

            {/* </InfiniteScroll> */}
          </>
        )}
      </div>
    </>
  );
};

// import * as fs from "fs";
// export async function getStaticProps(context) {
//   let data = await fs.promises.readdir("data/blogData");
//   let allCount = data.length;
//   let myfile;
//   let allBlogs = [];
//   for (let index = 0; index < 2; index++) {
//     const item = data[index];
//     myfile = await fs.promises.readFile("data/blogData/" + item, "utf-8");
//     allBlogs.push(JSON.parse(myfile));
//   }

//   return {
//     props: { allBlogs, allCount }, // will be passed to the page component as props
//   };
// }

export default Blog;
