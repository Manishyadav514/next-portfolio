import React, { useEffect, useState } from "react";
import styles from "../../styles/Poem.module.css";
import Link from "next/link";
// import InfiniteScroll from 'react-infinite-scroll-component';

const Poem = (props) => {
  // const [poems, setPoem] = useState(props.PoemData);
  const [poems, setPoem] = useState();
  const fetchPoemData = async () => {
    let res = await fetch(`http://localhost:3000/api/poemAPI`);
    const PoemData = await res.json();
    console.log(PoemData);
    setPoem(PoemData);
    // return PoemData;
  };

  useEffect(() => {
    fetchPoemData();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!poems ? (
          <>No Poem Found</>
        ) : (
          <>
            {" "}
            {poems?.map((poem) => {
              return (
                <div key={poem?.title}>
                  <Link href={`/poem/${poem?.title}`}>
                    <button className={styles.btn}>{poem?.title}</button>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </main>
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
