import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.293 5.707 6.586 8l-2.293 2.293 1.414 1.414L8 9.414l2.293 2.293 1.414-1.414L9.414 8l2.293-2.293-1.414-1.414L8 6.586 5.707 4.293z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleX;
