import * as React from "react";
import type { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M11 0H5v12h10V4z" />
    <path fill="currentColor" d="M1 4v12h10v-2H3V4z" />
  </svg>
);
export default SvgFiles;
