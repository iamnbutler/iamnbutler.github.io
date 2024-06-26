import * as React from "react";
import type { SVGProps } from "react";
const SvgShift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 9v7h8V9h3V7L8 0 1 7v2zm-.172-2H6v7h4V7h2.172L8 2.828z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShift;
