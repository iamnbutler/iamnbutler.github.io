import * as React from "react";
import type { SVGProps } from "react";
const SvgBishop = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.76 7.65 3.367-3.928 1.144 2.003a5.53 5.53 0 0 1-.891 6.655L14 14v2H2v-2l1.62-1.62a5.531 5.531 0 0 1-.891-6.655L6 0h4l1.073 1.878L7.241 6.35z"
    />
  </svg>
);
export default SvgBishop;
