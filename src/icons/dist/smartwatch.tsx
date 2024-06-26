import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartwatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 0H5l-.25 2H2v12h2.75L5 16h6l.25-2H14V9h1V7h-1V2h-2.75zm1 4H4v8h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartwatch;
