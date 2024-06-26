import * as React from "react";
import type { SVGProps } from "react";
const SvgGameController = (props: SVGProps<SVGSVGElement>) => (
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
      d="m0 13 3 1 3-3h4l3 3 3-1-.752-8.272A3 3 0 0 0 12.26 2H3.74A3 3 0 0 0 .752 4.728zm12-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGameController;
