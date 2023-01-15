import React, { useState, useEffect } from "react";
import styles from "../../styles/Poem.module.css";

const PoemSlug = (props) => {
  // const { slug } = props.slug;
  console.log(props.poem);
  // function createMarkup(c) {
  //   return { __html: c };
  // }
  // const [poems, setPoem] = useState();
  // const fetchPoemData = async () => {
  //   let res = await fetch(`http://localhost:3000/api/poemAPI`);
  //   const PoemData = await res.json();
  //   setPoem(PoemData);
  //   // return PoemData;
  // };
  const [poem, setPoem] = useState();
  useEffect(() => {
    setPoem(props.poem);
  }, [props.poem]);

  useEffect(() => {
    // fetchPoemData();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{poem && poem.title}</h1>
        <hr />
        {!poem && <>No Poem found</>}
      </main>
    </div>
  );
};

export default PoemSlug;

// import * as fs from "fs";
// This generates static paths for each route.
export async function getStaticPaths() {
  // let data = await fs.promises.readFile(`data/poemData/poemData.json`, "utf-8");
  let res = await fetch(`http://localhost:3000/api/poemAPI`);
  let data = await res.json();
  data = data.map((item) => {
    return { params: { poemSlug: item.slug } };
  });
  return {
    paths: data,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { poemSlug } = context.params;
  let res = await fetch(`http://localhost:3000/api/poemAPI`);
  let PoemData = await res.json();
  let poem = PoemData.filter((b) => b.slug === poemSlug)[0];
  console.log(poem);
  return {
    props: { poem }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {
//  const { poemSlug } = context.params;
//  console.log(poemSlug);

//  // let allb = await fs.promises.readFile(`data/poemData.json`)
//  // // let myBlog = await fs.promises.readFile(`data/blogData/${slug}.json`, 'utf-8')
//  // let myBlog = allb.filter(b => b.title === {slug})

//  let res = await fetch(`http://localhost:3000/api/poemAPI`);
//  let PoemData = await res.json();
//  let poem = PoemData.filter((b) => b.slug === poemSlug)[0];
//  console.log(poem);
//  return {
//    props: { poem }, // will be passed to the page component as props
//  };
// }
