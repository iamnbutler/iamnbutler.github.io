import * as React from "react";
import type { SVGProps } from "react";
const SvgTree = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 4a4 4 0 0 1 7.874-1H12a4 4 0 0 1 0 8H9v3h2v2H5v-2h2v-3H3.5a3.5 3.5 0 1 1 0-7z"
    />
  </svg>
);
export default SvgTree;
