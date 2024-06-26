import * as React from "react";
import type { SVGProps } from "react";
const SvgAnchor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3a3 3 0 0 1-2 2.83v8.087A6.005 6.005 0 0 0 13.917 9H12V7h4v1A8 8 0 1 1 0 8V7h4v2H2.083A6.005 6.005 0 0 0 7 13.917V5.829A3.001 3.001 0 1 1 11 3"
    />
  </svg>
);
export default SvgAnchor;
