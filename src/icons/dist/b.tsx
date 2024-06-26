import * as React from "react";
import type { SVGProps } from "react";
const SvgB = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0v16h8.25a4.75 4.75 0 0 0 2.888-8.521A4.75 4.75 0 0 0 9.25 0zm7.25 6.5a1.75 1.75 0 1 0 0-3.5H5v3.5zM5 9.5V13h5.25a1.75 1.75 0 1 0 0-3.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgB;
