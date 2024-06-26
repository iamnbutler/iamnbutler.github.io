import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0M8 4v3H3v2h5v3h1l4-4-4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleArrowRight;
