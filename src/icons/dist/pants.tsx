import * as React from "react";
import type { SVGProps } from "react";
const SvgPants = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M2 16 3 0h10l1 16H9L8.375 6h-.75L7 16z" />
  </svg>
);
export default SvgPants;
