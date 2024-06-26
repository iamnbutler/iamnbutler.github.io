import * as React from "react";
import type { SVGProps } from "react";
const SvgAnglesUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.293 8.707 8 3.414 2.707 8.707 1.293 7.293 8 .586l6.707 6.707z"
    />
    <path
      fill="currentColor"
      d="M13.293 15.207 8 9.914l-5.293 5.293-1.414-1.414L8 7.086l6.707 6.707z"
    />
  </svg>
);
export default SvgAnglesUp;
