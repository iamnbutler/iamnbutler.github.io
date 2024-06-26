import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2a6 6 0 1 0 5.797 4.446l1.57-1.57a8 8 0 1 1-2.461-3.196L14.293.293l1.414 1.414-7 7-1.414-1.414 1.225-1.225a2 2 0 1 0 .896 3.346l1.414 1.414a4 4 0 1 1-.796-6.274l1.444-1.445A5.97 5.97 0 0 0 8 2"
    />
  </svg>
);
export default SvgRadar;
