import * as React from "react";
import type { SVGProps } from "react";
const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 2H0v11h2a2 2 0 1 0 4 0h4a2 2 0 1 0 4 0h2V8a3 3 0 0 0-3-3h-2zm0 5v2h3V7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTruck;
