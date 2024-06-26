import * as React from "react";
import type { SVGProps } from "react";
const SvgFlower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 0a2 2 0 0 0-2 2v.036l-.031-.018a2 2 0 1 0-2 3.464L4 5.5l-.031.018a2 2 0 0 0 2 3.464L6 8.964V9a2 2 0 1 0 4 0v-.036l.031.018a2 2 0 1 0 2-3.464L12 5.5l.031-.018a2 2 0 1 0-2-3.464L10 2.036V2a2 2 0 0 0-2-2m0 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M7 16H6a5 5 0 0 1-5-5v-1h1a5 5 0 0 1 5 5zM10 16H9v-1a5 5 0 0 1 5-5h1v1a5 5 0 0 1-5 5"
    />
  </svg>
);
export default SvgFlower;
