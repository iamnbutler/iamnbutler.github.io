import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsRepeat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 8H9V4.82L5.157 4.05A2.64 2.64 0 0 0 2 6.64V9H0V6.64a4.64 4.64 0 0 1 5.55-4.55L9 2.78V0h1l4 4z"
    />
    <path
      fill="currentColor"
      d="M16 7v2.36a4.64 4.64 0 0 1-5.55 4.55L7 13.22V16H6l-4-4 4-4h1v3.18l3.843.769A2.64 2.64 0 0 0 14 9.36V7z"
    />
  </svg>
);
export default SvgArrowsRepeat;
