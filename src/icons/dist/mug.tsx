import * as React from "react";
import type { SVGProps } from "react";
const SvgMug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M4 0H2v3h2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 5h11a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1.17A3 3 0 0 1 9 15H5a3 3 0 0 1-3-3zm10 6V7h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M10 0h2v3h-2zM8 0H6v3h2z" />
  </svg>
);
export default SvgMug;
