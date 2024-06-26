import * as React from "react";
import type { SVGProps } from "react";
const SvgEject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M0 8v2h16V8L8 0zM16 12H0v2h16z" />
  </svg>
);
export default SvgEject;
