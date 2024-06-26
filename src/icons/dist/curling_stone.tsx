import * as React from "react";
import type { SVGProps } from "react";
const SvgCurlingStone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 1v2h4v2H2L0 7v2h16V7l-2-2h-3V1zM0 13v-2h16v2l-2 2H2z"
    />
  </svg>
);
export default SvgCurlingStone;
