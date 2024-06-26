import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbsUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 0 5 5v9h9l2-6V5h-6V2a2 2 0 0 0-2-2zM3 5H0v9h3z"
    />
  </svg>
);
export default SvgThumbsUp;
