import * as React from "react";
import type { SVGProps } from "react";
const SvgCirclePlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7.5 5h-1v6h1L11 8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCirclePlay;
