import * as React from "react";
import type { SVGProps } from "react";
const SvgCity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 1H1v14h2v-4h2v4h10V9h-4zM5 3H3v2h2zm4 0H7v2h2zM7 7h2v2H7zm4 4h2v2h-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCity;
