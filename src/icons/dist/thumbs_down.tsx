import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbsDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 16-2-5V2h9l2 6v3h-6v3a2 2 0 0 1-2 2zM3 11H0V2h3z"
    />
  </svg>
);
export default SvgThumbsDown;
