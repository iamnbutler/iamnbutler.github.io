import * as React from "react";
import type { SVGProps } from "react";
const SvgDPad = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 0h6v3.586l-3 3-3-3zM3.586 5H0v6h3.586l3-3zM5 12.414V16h6v-3.586l-3-3zM12.414 11H16V5h-3.586l-3 3z"
    />
  </svg>
);
export default SvgDPad;
