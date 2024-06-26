import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleInfo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7 8H6V6h3v5h1v2H7zm2-3V3H7v2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleInfo;
