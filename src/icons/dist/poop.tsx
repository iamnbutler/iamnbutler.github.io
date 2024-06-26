import * as React from "react";
import type { SVGProps } from "react";
const SvgPoop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 1v1a2 2 0 0 1-2 2 3 3 0 0 0-3 3v1.17A3 3 0 0 0 0 11v3h16v-3a3 3 0 0 0-2-2.83V7a3 3 0 0 0-3-3 3 3 0 0 0-3-3z"
    />
  </svg>
);
export default SvgPoop;
