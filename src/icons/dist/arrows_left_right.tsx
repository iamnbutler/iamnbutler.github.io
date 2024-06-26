import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M9 10h4v1l-5 5-5-5v-1h4V6H3V5l5-5 5 5v1H9z" />
  </svg>
);
export default SvgArrowsLeftRight;
