import * as React from "react";
import type { SVGProps } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.22 8 1.109 0h3.56L8 5.214 11.331 0h3.56L9.78 8l5.111 8h-3.56L8 10.786 4.669 16h-3.56z"
    />
  </svg>
);
export default SvgX;
