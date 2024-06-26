import * as React from "react";
import type { SVGProps } from "react";
const SvgSkull = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0a7 7 0 0 0-7 7v3l3 3-1 2v1h10v-1l-1-2 3-3V7a7 7 0 0 0-7-7M6.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkull;
