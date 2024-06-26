import * as React from "react";
import type { SVGProps } from "react";
const SvgSunCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 0H8v2h2zM14.657 2.757l-1.414-1.414-1.415 1.414 1.415 1.415zM4.757 1.343l1.415 1.414-1.415 1.415-1.414-1.415zM16 6h-2v2h2zM7.874 10A4.002 4.002 0 0 0 0 11v4h15v-1a4 4 0 0 0-4-4zM12 7c0 .35-.06.687-.17 1H9.196A6.02 6.02 0 0 0 6.4 5.5 3 3 0 0 1 12 7"
    />
  </svg>
);
export default SvgSunCloud;
