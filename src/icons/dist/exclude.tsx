import * as React from "react";
import type { SVGProps } from "react";
const SvgExclude = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 0h11v5h5v11H5v-5H0zm10 6H6v4h4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExclude;
