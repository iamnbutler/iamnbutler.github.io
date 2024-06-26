import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 0 9 1l2.293 2.293-3 3 1.414 1.414 3-3L15 7l1-1V0zM0 16h6l1-1-2.293-2.293 3-3-1.414-1.414-3 3L1 9l-1 1z"
    />
  </svg>
);
export default SvgMaximize;
