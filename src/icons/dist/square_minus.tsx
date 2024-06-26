import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H1v14h14zM4 7v2h8V7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSquareMinus;
