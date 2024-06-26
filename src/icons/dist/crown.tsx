import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 15 0 4h2l3 3 2-6h2l2 6 3-3h2l-2 11zm5.5-6L6 11l1.5 2h1l1.5-2-1.5-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrown;
