import * as React from "react";
import type { SVGProps } from "react";
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 5V3l7-3 7 3v2L8 8zM8 16l-7-3v-2l7 3 7-3v2z"
    />
    <path fill="currentColor" d="m1 9 7 3 7-3V7l-7 3-7-3z" />
  </svg>
);
export default SvgLayers;
