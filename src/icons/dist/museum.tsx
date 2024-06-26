import * as React from "react";
import type { SVGProps } from "react";
const SvgMuseum = (props: SVGProps<SVGSVGElement>) => (
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
      d="m0 3 8-3 8 2.5V5H0zM9 7h2v5h2V7h2v6h1v2H0v-2h1V7h2v5h2V7h2v5h2z"
    />
  </svg>
);
export default SvgMuseum;
