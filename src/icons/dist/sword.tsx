import * as React from "react";
import type { SVGProps } from "react";
const SvgSword = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 0h-3L3.707 9.293l-1.5-1.5L.793 9.207 3.086 11.5l-1.502 1.502L1.5 13a1.5 1.5 0 1 0 1.498 1.416L4.5 12.914l2.293 2.293 1.414-1.414-1.5-1.5L16 3z"
    />
  </svg>
);
export default SvgSword;
