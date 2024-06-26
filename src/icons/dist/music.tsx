import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H4v8H3a3 3 0 1 0 3 3V5h7v4h-1a3 3 0 1 0 3 3z"
    />
  </svg>
);
export default SvgMusic;
