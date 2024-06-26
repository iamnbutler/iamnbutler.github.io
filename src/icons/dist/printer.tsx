import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 0H5v4H3a3 3 0 0 0-3 3v5h3V9h10v3h3V7a3 3 0 0 0-3-3h-2z"
    />
    <path fill="currentColor" d="M5 11h6v5H5z" />
  </svg>
);
export default SvgPrinter;
