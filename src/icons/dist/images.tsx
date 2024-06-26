import * as React from "react";
import type { SVGProps } from "react";
const SvgImages = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 0H4v12h12zM9 6l2 2 3-3v5H6V9zm0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M0 4v12h12v-2H2V4z" />
  </svg>
);
export default SvgImages;
