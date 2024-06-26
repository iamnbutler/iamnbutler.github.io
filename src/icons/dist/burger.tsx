import * as React from "react";
import type { SVGProps } from "react";
const SvgBurger = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H1zM1 11h14v4H1zM16 7H0v2h16z"
    />
  </svg>
);
export default SvgBurger;
