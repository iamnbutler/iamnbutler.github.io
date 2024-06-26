import * as React from "react";
import type { SVGProps } from "react";
const SvgCakeSlice = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 6V4h2v2h4a2 2 0 0 1 2 2v8H1v-2h12v-2H1v-2h12V8H1V6z"
    />
  </svg>
);
export default SvgCakeSlice;
