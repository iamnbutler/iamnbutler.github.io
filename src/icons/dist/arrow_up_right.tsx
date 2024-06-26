import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 2H5.5L4 3.5l2.836 2.836-6.25 6.25 2.828 2.828 6.25-6.25L12.5 12l1.5-1.5z"
    />
  </svg>
);
export default SvgArrowUpRight;
