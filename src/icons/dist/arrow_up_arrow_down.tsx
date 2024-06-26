import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 5h3v11h2V5h3V4L4 0 0 4zM8 11h3V0h2v11h3v1l-4 4-4-4z"
    />
  </svg>
);
export default SvgArrowUpArrowDown;
