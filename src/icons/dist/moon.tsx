import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 8A8 8 0 0 1 4.707.707l.947.947a6.5 6.5 0 0 0 8.691 8.691l.948.948A8.002 8.002 0 0 1 0 8M11.5 7 9 4.5 11.5 2 14 4.5z"
    />
  </svg>
);
export default SvgMoon;
