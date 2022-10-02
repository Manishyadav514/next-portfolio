import React, { useEffect, useState } from "react";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
// import InfiniteScroll from 'react-infinite-scroll-component';

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
    <div className={styles.container}>
      <main className={styles.main}>
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
        {!blogs ? (
          <>No Blog Found</>
        ) : (
          <>
            {blogs.map((blogItem) => {
              return (
                <div key={blogItem?.slug}>
                  <Link href={`/blogRouting/${blogItem?.slug}`}>
                    <h3 className={styles.blogItemh3}>{blogItem?.title}</h3>
                  </Link>
                  <p className={styles.blogItem}>
                    {blogItem?.metadesc?.substr(0, 140)}...
                  </p>
                  <Link href={`/blog/${blogItem?.slug}`}>
                    <button className={styles.btn}>Read More</button>
                  </Link>
                </div>
              );
            })}
          </>
        )}

        {/* </InfiniteScroll> */}
      </main>
    </div>
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
