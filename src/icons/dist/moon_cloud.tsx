import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 8A8 8 0 0 1 4.707.707l.947.947A6.5 6.5 0 0 0 5 4.5c0 1.672.631 3.197 1.669 4.348A6 6 0 0 0 5.803 10H4c-1.26 0-2.43.389-3.397 1.053A8 8 0 0 1 0 8M7.99 16H0a4 4 0 0 1 4-4h3.126q.106-.41.292-.783A4 4 0 0 1 15 13v3H7.99M11.5 7 9 4.5 11.5 2 14 4.5z"
    />
  </svg>
);
export default SvgMoonCloud;
