import React from "react";
import Image from "next/image";
import { BiError } from "react-icons/bi";

interface NoDataProps {
  labelPrimary: string;
  labelSub: string;
  labelSecondry: string;
  imagedata: { src: string; width: number; height: number };
}

export const NoData = ({
  labelPrimary,
  labelSub,
  labelSecondry,
  imagedata,
}: NoDataProps) => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-row phone:flex-col p-2 gap-2">
          <div className="mt-[8rem] phone:mt-0 phone:mb-8">
            <span className="text-aquaDark1 bg-aquaLight1 rounded-xl p-9 border border-aquaDark2  text-2xl font-medium phone:text-xl">
              Sorry! No data available.
            </span>
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={300}
              height={300}
              src={"/images/anime-girl.webp"}
              alt={"asas"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
