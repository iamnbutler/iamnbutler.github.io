import * as React from "react";
import type { SVGProps } from "react";
const SvgOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 16 0 11.25v-6.5L4.75 0h6.5L16 4.75v6.5L11.25 16z"
    />
  </svg>
);
export default SvgOctagon;
