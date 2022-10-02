import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        )}
      </main>
    </div>
  );
};

import * as fs from "fs";
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
