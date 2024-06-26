import * as React from "react";
import type { SVGProps } from "react";
const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0h5v6H2zM7 13V8H2v5H0v2h16v-2h-2V8H9v5zM9 0v6h5V0z"
    />
  </svg>
);
export default SvgWindow;
