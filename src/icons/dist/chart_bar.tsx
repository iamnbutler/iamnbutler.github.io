import * as React from "react";
import type { SVGProps } from "react";
const SvgChartBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M16 1h-4v14h4zM6 5h4v10H6zM0 9h4v6H0z" />
  </svg>
);
export default SvgChartBar;
