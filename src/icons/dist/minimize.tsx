import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.707 1.707-3 3L15 7l-1 1H8V2l1-1 2.293 2.293 3-3zM4.707 12.707 7 15l1-1V8H2L1 9l2.293 2.293-3 3 1.414 1.414z"
    />
  </svg>
);
export default SvgMinimize;
