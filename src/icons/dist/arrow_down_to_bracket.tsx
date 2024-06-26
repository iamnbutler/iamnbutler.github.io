import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownToBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M15 16H1V9h2v5h10V9h2z" />
    <path fill="currentColor" d="M12 6H9V0H7v6H4v1l4 4 4-4z" />
  </svg>
);
export default SvgArrowDownToBracket;
