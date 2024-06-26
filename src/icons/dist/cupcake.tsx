import * as React from "react";
import type { SVGProps } from "react";
const SvgCupcake = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 1V0h1a3 3 0 0 1 3 3 4 4 0 0 1 4 4H1a4 4 0 0 1 4-4 2 2 0 0 0 2-2M3 15 2 9h12l-1 6z"
    />
  </svg>
);
export default SvgCupcake;
