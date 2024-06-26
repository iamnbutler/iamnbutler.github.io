import * as React from "react";
import type { SVGProps } from "react";
const SvgPenNib = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11 0 5 5-2 2v5L3 16l-.793-.793 4.275-4.275Q6.731 11 7 11a2 2 0 1 0-1.932-1.482L.793 13.793 0 13 4 2h5z"
    />
  </svg>
);
export default SvgPenNib;
