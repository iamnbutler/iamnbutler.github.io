import * as React from "react";
import type { SVGProps } from "react";
const SvgFloppyDisk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M11 1H1v14h3V9h8v6h3V5z" />
    <path fill="currentColor" d="M10 15v-4H6v4z" />
  </svg>
);
export default SvgFloppyDisk;
