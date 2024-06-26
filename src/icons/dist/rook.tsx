import * as React from "react";
import type { SVGProps } from "react";
const SvgRook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0h2v2h3V0h2v2h3V0h2v5l-3 3 1 4 2 2v2H2v-2l2-2 1-4-3-3z"
    />
  </svg>
);
export default SvgRook;
