import * as React from "react";
import type { SVGProps } from "react";
const SvgPlane = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 0 6 2v3L0 9v2h1l5-1 1 3-2 1v2h6v-2l-2-1 1-3 5 1h1V9l-6-4V2L9 0z"
    />
  </svg>
);
export default SvgPlane;
