import * as React from "react";
import type { SVGProps } from "react";
const SvgI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M9.5 3H13V0H3v3h3.5v10H3v3h10v-3H9.5z" />
  </svg>
);
export default SvgI;
