import * as React from "react";
import type { SVGProps } from "react";
const SvgK = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 16V0h3v7.426L11.326 0h3.94l-5.7 6.693L15.148 16h-3.498L7.512 9.103 5 12.053V16z"
    />
  </svg>
);
export default SvgK;
