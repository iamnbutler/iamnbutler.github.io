import * as React from "react";
import type { SVGProps } from "react";
const SvgLightbulb = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M5 11.5v3L6.5 16h3l1.5-1.5v-3l1.24-1.24A6.02 6.02 0 0 0 14 6.007 6.006 6.006 0 0 0 8 0C4.686 0 2 2.694 2 6.007c0 1.594.633 3.126 1.76 4.253zm2-1.626V6h2v3.874A4.002 4.002 0 0 0 8 2a4 4 0 0 0-1 7.874"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLightbulb;
