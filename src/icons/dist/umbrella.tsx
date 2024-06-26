import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 8a8 8 0 1 1 16 0H9v5a3 3 0 1 1-6 0v-1h2v1a1 1 0 1 0 2 0V8z"
    />
  </svg>
);
export default SvgUmbrella;
