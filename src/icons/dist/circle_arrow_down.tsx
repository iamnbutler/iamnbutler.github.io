import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m4-8H9V3H7v5H4v1l4 4 4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleArrowDown;
