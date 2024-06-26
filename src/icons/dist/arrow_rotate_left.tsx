import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotateLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 7 1-1-2.293-2.293.492-.491A4.15 4.15 0 0 1 8.133 2C11.361 2 14 4.68 14 7.933 14 11.259 11.301 14 8 14a5.98 5.98 0 0 1-4.243-1.757l-1.414 1.414A7.98 7.98 0 0 0 8 16c4.43 0 8-3.661 8-8.067C16 3.6 12.49 0 8.133 0a6.15 6.15 0 0 0-4.349 1.801l-.491.492L1 0 0 1v6z"
    />
  </svg>
);
export default SvgArrowRotateLeft;
