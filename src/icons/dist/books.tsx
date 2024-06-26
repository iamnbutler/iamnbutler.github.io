import * as React from "react";
import type { SVGProps } from "react";
const SvgBooks = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 1h3v14H5zM0 3h3v12H0zM12.167 3l-2.824.704L12.159 15l2.824-.704z"
    />
  </svg>
);
export default SvgBooks;
