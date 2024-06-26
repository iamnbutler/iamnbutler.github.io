import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M2 1h12v8H2zm2 2h8v4H4z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="m2 11-2 2v2h16v-2l-2-2z" />
  </svg>
);
export default SvgLaptop;
