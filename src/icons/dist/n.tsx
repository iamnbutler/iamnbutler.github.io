import * as React from "react";
import type { SVGProps } from "react";
const SvgN = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0h3.96L11 10.92V0h3v16h-3.96L5 5.08V16H2z"
    />
  </svg>
);
export default SvgN;
