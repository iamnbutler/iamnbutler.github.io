import * as React from "react";
import type { SVGProps } from "react";
const SvgClosedCaptioning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 2h16v12H0zm2 4a2 2 0 0 1 2-2h3v2H4v4h3v2H4a2 2 0 0 1-2-2zm9-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-2h-3V6h3V4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClosedCaptioning;
