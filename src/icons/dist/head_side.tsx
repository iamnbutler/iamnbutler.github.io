import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadSide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 16v-3h3V9h2V7l-4-7H7a6 6 0 0 0-3 11.197V16zm0-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeadSide;
