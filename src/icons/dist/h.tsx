import * as React from "react";
import type { SVGProps } from "react";
const SvgH = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M2 0v16h3V9.5h6V16h3V0h-3v6.5H5V0z" />
  </svg>
);
export default SvgH;
