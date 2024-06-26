import * as React from "react";
import type { SVGProps } from "react";
const SvgCrosshairs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 1.576V0H7v1.576A6.505 6.505 0 0 0 1.576 7H0v2h1.576A6.505 6.505 0 0 0 7 14.424V16h2v-1.576A6.505 6.505 0 0 0 14.424 9H16V7h-1.576A6.505 6.505 0 0 0 9 1.576M7 3.612V5h2V3.612A4.51 4.51 0 0 1 12.389 7H11v2h1.389A4.51 4.51 0 0 1 9 12.389V11H7v1.389A4.51 4.51 0 0 1 3.612 9H5V7H3.612A4.51 4.51 0 0 1 7 3.612"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrosshairs;
