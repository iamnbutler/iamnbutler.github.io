import * as React from "react";
import type { SVGProps } from "react";
const SvgToolbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 1h8v4h1.5L16 7.5V9H0V7.5L2.5 5H4zm6 2v2H6V3z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M0 11v4h16v-4z" />
  </svg>
);
export default SvgToolbox;
