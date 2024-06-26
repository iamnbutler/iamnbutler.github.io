import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 0H6v2H1v7h12.5L16 5.5 13.5 2H10zM6 11h4v5H6z"
    />
  </svg>
);
export default SvgSignpost;
