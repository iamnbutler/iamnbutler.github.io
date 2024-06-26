import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="m13 0 3 3-7 7H6V7z" />
    <path fill="currentColor" d="M1 1v14h14V9h-2v4H3V3h4V1z" />
  </svg>
);
export default SvgPencilSquare;
