import * as React from "react";
import type { SVGProps } from "react";
const SvgPawn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3a3 3 0 0 1-.764 2H12v2h-1.429L12 12l2 2v2H2v-2l2-2 1.429-5H4V5h1.764A3 3 0 1 1 11 3"
    />
  </svg>
);
export default SvgPawn;
