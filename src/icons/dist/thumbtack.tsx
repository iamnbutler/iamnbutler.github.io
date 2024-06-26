import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbtack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3 9 2l2-2 5 5-2 2-1-1-2 2 1.293 1.293a2.414 2.414 0 0 1 0 3.414L11 14 2 5l1.293-1.293a2.414 2.414 0 0 1 3.414 0L8 5zM0 15l3.821-5.35 2.53 2.528L1 16z"
    />
  </svg>
);
export default SvgThumbtack;
