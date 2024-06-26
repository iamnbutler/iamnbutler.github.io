import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M0 8a8 8 0 0 0 8 8V0a8 8 0 0 0-8 8" />
  </svg>
);
export default SvgCircleHalf;
