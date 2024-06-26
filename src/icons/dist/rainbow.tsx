import * as React from "react";
import type { SVGProps } from "react";
const SvgRainbow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10a6 6 0 1 1 12 0v4h2v-4a8 8 0 1 0-16 0v4h2z"
    />
    <path
      fill="currentColor"
      d="M6 10a2 2 0 1 1 4 0v4h2v-4a4 4 0 0 0-8 0v4h2z"
    />
  </svg>
);
export default SvgRainbow;
