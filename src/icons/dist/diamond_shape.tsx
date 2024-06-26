import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamondShape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M7 16h2l7-7V7L9 0H7L0 7v2z" />
  </svg>
);
export default SvgDiamondShape;
