import * as React from "react";
import type { SVGProps } from "react";
const SvgPills = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.949.154a3 3 0 0 1 1.897 3.795l-1.184 3.55L1.97 5.604 3.154 2.05A3 3 0 0 1 6.949.154M7.03 9.397 5.846 12.95A3 3 0 1 1 .154 11.05L1.338 7.5zM12.5 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
    />
  </svg>
);
export default SvgPills;
