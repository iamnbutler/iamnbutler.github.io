import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionMark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 5.5A2.5 2.5 0 1 1 8 8H7v3h1a5.5 5.5 0 1 0-5.5-5.5zM10 13H7v3h3z"
    />
  </svg>
);
export default SvgQuestionMark;
