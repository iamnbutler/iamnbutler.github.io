import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M1 8h14V6l-4-6H5L1 6zM7 10v4H4v2h8v-2H9v-4z" />
  </svg>
);
export default SvgLamp;
