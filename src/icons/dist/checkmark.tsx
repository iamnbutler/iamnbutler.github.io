import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.414 4.914 6 14.33.586 8.914l2.828-2.828L6 8.672l6.586-6.586z"
    />
  </svg>
);
export default SvgCheckmark;
