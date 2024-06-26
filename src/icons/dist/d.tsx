import * as React from "react";
import type { SVGProps } from "react";
const SvgD = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0h5a8 8 0 1 1 0 16H2zm3 3v10h2A5 5 0 0 0 7 3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgD;
