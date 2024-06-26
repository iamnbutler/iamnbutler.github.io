import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M6 9v4H5L0 8l5-5h1v4h4V3h1l5 5-5 5h-1V9z" />
  </svg>
);
export default SvgArrowsUpDown;
