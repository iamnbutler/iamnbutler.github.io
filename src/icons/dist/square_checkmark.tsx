import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareCheckmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H1v14h14zm-2.293 4.707-1.414-1.414L6.5 9.086 4.707 7.293 3.293 8.707 6.5 11.914z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSquareCheckmark;
