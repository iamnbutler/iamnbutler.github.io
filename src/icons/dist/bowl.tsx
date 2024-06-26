import * as React from "react";
import type { SVGProps } from "react";
const SvgBowl = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 5H1v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4zM12 13H4l.25 2h7.5z"
    />
  </svg>
);
export default SvgBowl;
