import * as React from "react";
import type { SVGProps } from "react";
const SvgLibra = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 6a3 3 0 1 1 5.25 1.984l-.25.284V10h6V8h-3.416a5 5 0 1 0-9.167 0H0v2h6V8.268l-.25-.284A2.99 2.99 0 0 1 5 6M0 12v2h16v-2z"
    />
  </svg>
);
export default SvgLibra;
