import * as React from "react";
import type { SVGProps } from "react";
const SvgP = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0h8a5 5 0 0 1 0 10H5v6H2zm3 7h5a2 2 0 1 0 0-4H5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgP;
