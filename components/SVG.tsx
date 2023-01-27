import React from "react";

interface SVGProps {
  primaryColor?: string;
  secondryColor?: string;
  rotate?: number;
}

export const SVGTwoWave = ({
  primaryColor = "",
  secondryColor = "",
  rotate,
}: SVGProps) => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      transform={`rotate(${rotate})`}
    >
      <rect x="0" y="0" width="900" height="600" fill={primaryColor}></rect>
      <path
        d="M0 494L30 496.8C60 499.7 120 505.3 180 465.8C240 426.3 300 341.7 360 326.7C420 311.7 480 366.3 540 369.5C600 372.7 660 324.3 720 299.5C780 274.7 840 273.3 870 272.7L900 272L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
        fill={secondryColor}
        strokeLinecap="round"
        strokeLinejoin="miter"
      ></path>
    </svg>
  );
};
