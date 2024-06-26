import * as React from "react";
import type { SVGProps } from "react";
const SvgPercent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0M14.707 2.707l-12 12-1.414-1.414 12-12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgPercent;
