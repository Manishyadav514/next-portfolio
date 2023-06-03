import React, { useState, useEffect } from "react";
import { NoData } from "../../components/NoData";
import Image from "next/image";

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
  const [poem, setPoem] = useState<any>([]);
  useEffect(() => {
    setPoem(props.poem);
  }, [props.poem]);

  useEffect(() => {
    // fetchPoemData();
  }, []);

  //   <Image
  //   src="https://source.unsplash.com/random/244x324"
  //   alt="bhju"
  //   className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
  //   width="100"
  //   height="100"
  // />

  return (
    <>
      {poem ? (
        <div className="p-4 grid grid-cols-6 gap-4">
          <div className="col-span-1 flex gap-3 flex-col items-center">
            <h3 className="text-aquaDark2 font-bold text-lg">Follow Me On</h3>
            {/* <!-- Behance --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1769ff" }}
              // style="color: #1769ff"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>

            {/* <!-- Discord --> */}
            <svg
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              // viewbox="0 0 24 24"
              style={{ color: "#7289da" }}
              // style="color: #7289da"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
            </svg>

            {/* <!-- Github --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#333" }}
              // style="color: #333"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>

            {/* <!-- Facebook --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1877f2" }}
              // style="color: #1877f2"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>

            {/* <!-- Instagram --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#c13584" }}
              // style="color: #c13584"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>

            {/* <!-- Google --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#ea4335" }}
              // style="color: #ea4335"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>

            {/* <!-- Linkedin --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#0077b5" }}
              // style="color: #0077b5"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>

            {/* <!-- Pinterest --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#e60023" }}
              // style="color: #e60023"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>

            {/* <!-- Vkontakte --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#45668e" }}
              // style="color: #45668e"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path
                className="st0"
                d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
              />
            </svg>

            {/* <!-- Stack overflow --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#f48024" }}
              // style="color: #f48024"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
            </svg>

            {/* <!-- Telegram --> */}
            <svg
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              // viewbox="0 0 24 24"
              style={{ color: "#0088cc" }}
              // style="color: #0088cc"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              // xml:space="preserve"
              // xmlns:serif="http://www.serif.com/"
              // style={{ color: "le" }}
              // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"
            >
              <path
                id="telegram-1"
                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
              />
            </svg>

            {/* <!-- Youtube --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#ff0000" }}
              // style="color: #ff0000"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>

            {/* <!-- TikTok --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              // viewBox="0 0 448 512"
              className="h-7 w-7"
              style={{ color: "#6a76ac" }}
              // style="color: #6a76ac"
            >
              {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
              />
            </svg>

            {/* <!-- Snapchat --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#f8cc1b" }}
              // style="color: #f8cc1b"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z" />
            </svg>

            {/* <!-- Slack --> */}
            <svg
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              // viewbox="0 0 24 24"
              style={{ color: "#3eb991" }}
              // style="color: #3eb991"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>

            {/* <!-- Messenger --> */}
            <svg
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              // viewbox="0 0 24 24"
              style={{ color: "#0084ff" }}
              // style="color: #0084ff"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
            </svg>

            {/* <!-- Dribbble --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#ea4c89" }}
              // style="color: #ea4c89"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
            </svg>

            {/* <!-- Reddit --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#ff4500" }}
              // style="color: #ff4500"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
            </svg>

            {/* <!-- Twitter --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1da1f2" }}
              // style="color: #1da1f2"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>

            {/* <!-- Whatsapp --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#128c7e" }}
              // style="color: #128c7e"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>

            {/* <!-- Twitch --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#9146ff" }}
              // style="color: #9146ff"
              viewBox="0 0 24 24"
              // viewBox="0 0 24 24"
            >
              <path
                d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="col-span-3 shadow-lg bg-slate-100 ">
            <div
              className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
              // style={{
              //   backgroundImage:
              //     "url('https://source.unsplash.com/random/239x319')",
              // }}
            >
              <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:dark:border-violet-400 dark:dark:text-gray-100">
                English
              </span>
            </div>
            <div className="flex flex-col items-center p-6 text-center sm:p-8 group dark:dark:via-transparent flex-grow-1 bg-gradient-to-b dark:dark:from-gray-900 dark:dark:to-gray-900">
              <h1 className="capitalize font-serif text-2xl font-semibold dark:dark:text-gray-100">
                {poem.title}
              </h1>
            </div>
            <div
              className={`py-2 text-sm font-normal leading-snug text-center`}
              dangerouslySetInnerHTML={{
                __html: poem?.content,
              }}
            />
          </div>
          <div className="col-span-2">
            <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
              <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:dark:border-violet-400">
                <button
                  type="button"
                  className="pb-5 text-xs font-bold uppercase border-b-2 dark:dark:border-violet-400"
                >
                  Latest
                </button>
                <button
                  type="button"
                  className="pb-5 text-xs font-bold uppercase border-b-2 dark:dark:border-transparent dark:dark:text-gray-400"
                >
                  Popular
                </button>
              </div>
              <div className="flex flex-col divide-y divide-gray-700">
                <div className="flex px-1 py-4">
                  <Image
                    src="https://source.unsplash.com/random/244x324"
                    alt="bhju"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    width="100"
                    height="100"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Aenean ac tristique lorem, ut mollis dui.
                    </a>
                    <p className="mt-auto text-xs dark:dark:text-gray-400">
                      5 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        Politics
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <Image
                    src="https://source.unsplash.com/random/244x324"
                    alt="bhju"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    width="100"
                    height="100"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Nulla consectetur efficitur.
                    </a>
                    <p className="mt-auto text-xs dark:dark:text-gray-400">
                      14 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        Sports
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <Image
                    src="https://source.unsplash.com/random/244x324"
                    alt="bhju"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    width="100"
                    height="100"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Vitae semper augue purus tincidunt libero.
                    </a>
                    <p className="mt-auto text-xs dark:dark:text-gray-400">
                      22 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        World
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <Image
                    src="https://source.unsplash.com/random/244x324"
                    alt="bhju"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    width="100"
                    height="100"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Suspendisse potenti.
                    </a>
                    <p className="mt-auto text-xs dark:dark:text-gray-400">
                      37 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        Business
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default PoemSlug;

import * as fs from "fs";
// This generates static paths for each route.
export async function getStaticPaths() {
  let data = await fs.promises.readFile(`data/poemData/poemData.json`, "utf-8");
  data = await JSON.parse(data);
  // let res = await fetch(`http://localhost:3000/api/poemAPI`);
  // let data = await res.json();
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
  let PoemData = await fs.promises.readFile(
    `data/poemData/poemData.json`,
    "utf-8"
  );
  PoemData = JSON.parse(PoemData);
  // let res = await fetch(`http://localhost:3000/api/poemAPI`);
  // let PoemData = await res.json();
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