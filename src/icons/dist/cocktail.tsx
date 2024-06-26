import * as React from "react";
import type { SVGProps } from "react";
const SvgCocktail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3a2 2 0 0 0 2-2h7v2L9 9v4h3v2H4v-2h3V9L1 3V1h3a2 2 0 0 0 2 2m3 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCocktail;
