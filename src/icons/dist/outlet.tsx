import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.124 1A8 8 0 0 0 0 8a8 8 0 0 0 4.124 7h7.752A8 8 0 0 0 16 8a8 8 0 0 0-4.124-7zM6 5H4v4h2zm4 0h2v4h-2zm-1 6H7v2h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOutlet;
