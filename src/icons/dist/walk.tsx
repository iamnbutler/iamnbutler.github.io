import * as React from "react";
import type { SVGProps } from "react";
const SvgWalk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M2.831 5.45A2 2 0 0 1 4.754 4h2.982l2.81 1.405 2.083-.833.742 1.856-2.083.834a2 2 0 0 1-1.637-.068l-.15-.075-.535 2.139.872.498a2 2 0 0 1 .948 2.221L9.781 16H7.719l1.127-4.508-1.696-.969L5.78 16H3.72l2.5-10H4.753l-.571 2h-2.08z"
    />
  </svg>
);
export default SvgWalk;
