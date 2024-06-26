import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 2 0 1v13l4 1zM16 2l-4-1v13l4 1zM10 1 6 2v13l4-1z"
    />
  </svg>
);
export default SvgMap;
