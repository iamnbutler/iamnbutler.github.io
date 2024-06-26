import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2h2v5h-2v6h-2v-2H4v2H2v-6H0V5h2zm2 0h8v5H4zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBus;
