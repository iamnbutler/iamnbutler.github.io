import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M1 1v14h14v-2H3V1z" />
    <path fill="currentColor" d="m5 7 2-2 3 3 5-5v8H5z" />
  </svg>
);
export default SvgChartLine;
