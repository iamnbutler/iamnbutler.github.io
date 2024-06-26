import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRightFromSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 0 9 1l2.293 2.293-5 5 1.414 1.414 5-5L15 7l1-1V0z"
    />
    <path fill="currentColor" d="M1 2h5v2H3v9h9v-3h2v5H1z" />
  </svg>
);
export default SvgArrowUpRightFromSquare;
