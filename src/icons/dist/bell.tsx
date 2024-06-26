import * as React from "react";
import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 5a5 5 0 0 1 10 0v3l2 2v2H1v-2l2-2zM8 16a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 8 16"
    />
  </svg>
);
export default SvgBell;
