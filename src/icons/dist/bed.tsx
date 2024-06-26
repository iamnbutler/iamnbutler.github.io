import * as React from "react";
import type { SVGProps } from "react";
const SvgBed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2H0v12h2v-2h12v2h2V9a3 3 0 0 0-3-3H6a2 2 0 0 0-2-2H2z"
    />
  </svg>
);
export default SvgBed;
