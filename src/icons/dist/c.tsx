import * as React from "react";
import type { SVGProps } from "react";
const SvgC = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.464 4.464a5 5 0 1 0 7.072 7.072l2.12 2.12a8 8 0 1 1 0-11.313l-2.12 2.121a5 5 0 0 0-7.072 0"
    />
  </svg>
);
export default SvgC;
