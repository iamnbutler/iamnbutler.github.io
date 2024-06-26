import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamondExclamation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 16H7L0 9V7l7-7h2l7 7v2zM7 3v6h2V3zm0 8v2h2v-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDiamondExclamation;
