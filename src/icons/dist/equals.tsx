import * as React from "react";
import type { SVGProps } from "react";
const SvgEquals = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M1 2v4h14V2zM1 9v4h14V9z" />
  </svg>
);
export default SvgEquals;
