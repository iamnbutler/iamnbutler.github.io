import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintRoller = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 0h12v2h3v5.808l-7 1.5V10h1v6H6v-6h1V7.692l7-1.5V4h-1v1H1z"
    />
  </svg>
);
export default SvgPaintRoller;
