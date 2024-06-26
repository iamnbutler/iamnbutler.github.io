import * as React from "react";
import type { SVGProps } from "react";
const SvgDice = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 0H0v10h10zM3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M6 16v-4h6V6h4v10z" />
  </svg>
);
export default SvgDice;
