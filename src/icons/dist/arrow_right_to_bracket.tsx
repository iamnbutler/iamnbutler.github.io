import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightToBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M16 1v14H9v-2h5V3H9V1z" />
    <path fill="currentColor" d="M6 4v3H0v2h6v3h1l4-4-4-4z" />
  </svg>
);
export default SvgArrowRightToBracket;
