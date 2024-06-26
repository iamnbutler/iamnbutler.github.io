import * as React from "react";
import type { SVGProps } from "react";
const SvgSliders = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1h5v2h7v2H8v2H3V5H1V3h2zM13 13h2v-2h-2V9H8v2H1v2h7v2h5z"
    />
  </svg>
);
export default SvgSliders;
