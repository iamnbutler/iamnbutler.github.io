import * as React from "react";
import type { SVGProps } from "react";
const SvgVr = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 2h16v12h-5.5L9 11H7l-1.5 3H0zm6 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVr;
