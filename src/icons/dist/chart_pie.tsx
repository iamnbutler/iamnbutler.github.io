import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 .062V9h8.938A8.001 8.001 0 0 1 0 8 8 8 0 0 1 7 .062"
    />
    <path fill="currentColor" d="M9 .062V7h6.938A8.004 8.004 0 0 0 9 .062" />
  </svg>
);
export default SvgChartPie;
