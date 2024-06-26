import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareEquals = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H1v14h14zM4 7V5h8v2zm0 4V9h8v2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSquareEquals;
