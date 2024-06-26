import * as React from "react";
import type { SVGProps } from "react";
const SvgMortarboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="m8 11 6-3v6h2V5L8 1 0 5v2z" />
    <path fill="currentColor" d="M2 10.236V13l6 3 4-2v-2.764l-4 2z" />
  </svg>
);
export default SvgMortarboard;
