import * as React from "react";
import type { SVGProps } from "react";
const SvgAlien = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 16-4.458-3.662A6.96 6.96 0 0 1 1 6.96C1 3.116 4.156 0 8 0s7 3.116 7 6.96a6.96 6.96 0 0 1-2.542 5.378zM3 6h2a2 2 0 0 1 2 2v1L3 7.5zm8 0a2 2 0 0 0-2 2v1l4-1.5V6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlien;
