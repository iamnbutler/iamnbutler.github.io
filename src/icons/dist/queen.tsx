import * as React from "react";
import type { SVGProps } from "react";
const SvgQueen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4M1 9V7l2-2 2.5 2L8 5l2.5 2L13 5l2 2v2l-2.25 3.75L14 14v2H2v-2l1.25-1.25z"
    />
  </svg>
);
export default SvgQueen;
