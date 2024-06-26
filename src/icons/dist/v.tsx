import * as React from "react";
import type { SVGProps } from "react";
const SvgV = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.228 0 4.646 16h4.253l4.645-16h-3.124L8 12.564 4.352 0z"
    />
  </svg>
);
export default SvgV;
