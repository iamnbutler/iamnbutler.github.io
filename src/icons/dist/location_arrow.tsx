import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="m16 1-1-1L0 6v2l7 1 1 7h2z" />
  </svg>
);
export default SvgLocationArrow;
