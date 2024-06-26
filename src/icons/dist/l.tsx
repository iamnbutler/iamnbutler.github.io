import * as React from "react";
import type { SVGProps } from "react";
const SvgL = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M2 0h3v13h9v3H2z" />
  </svg>
);
export default SvgL;
