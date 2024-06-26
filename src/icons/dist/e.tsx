import * as React from "react";
import type { SVGProps } from "react";
const SvgE = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M2 0v16h12v-3H5V9.5h7v-3H5V3h9V0z" />
  </svg>
);
export default SvgE;
