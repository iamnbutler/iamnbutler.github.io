import * as React from "react";
import type { SVGProps } from "react";
const SvgTargetArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.17 2.002 8 2a6 6 0 1 0 5.998 5.83l1.766-1.766A8 8 0 1 1 9.936.236z"
    />
    <path
      fill="currentColor"
      d="M4 8a4 4 0 0 1 3-3.874v2.142A2 2 0 1 0 9.732 9h2.142A4.002 4.002 0 0 1 4 8"
    />
    <path
      fill="currentColor"
      d="m14 2-1-2-3 3v1.586L7.793 6.793l1.414 1.414L11.414 6H13l3-3z"
    />
  </svg>
);
export default SvgTargetArrow;
