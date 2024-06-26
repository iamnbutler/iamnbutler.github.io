import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m8 4V9h5V7H8V4H7L3 8l4 4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleArrowLeft;
