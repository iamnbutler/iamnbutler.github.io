import * as React from "react";
import type { SVGProps } from "react";
const SvgPlug = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 0v4h4V0h2v4h3v2h-2v2a5 5 0 0 1-4 4.9V16H7v-3.1A5 5 0 0 1 3 8V6H1V4h3V0z"
    />
  </svg>
);
export default SvgPlug;
