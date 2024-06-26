import * as React from "react";
import type { SVGProps } from "react";
const SvgRss = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1H1v2h2c5.523 0 10 4.477 10 10v2h2v-2C15 6.373 9.627 1 3 1"
    />
    <path
      fill="currentColor"
      d="M3 6H1v2h2a5 5 0 0 1 5 5v2h2v-2a7 7 0 0 0-7-7M3 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgRss;
