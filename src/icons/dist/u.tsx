import * as React from "react";
import type { SVGProps } from "react";
const SvgU = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10V0h3v10a3 3 0 1 0 6 0V0h3v10a6 6 0 0 1-12 0"
    />
  </svg>
);
export default SvgU;
