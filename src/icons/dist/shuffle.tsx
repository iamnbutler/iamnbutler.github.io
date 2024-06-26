import * as React from "react";
import type { SVGProps } from "react";
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 1h-1v2h-1.414L7 6.586 3.414 3H0v2h2.586l3 3-3 3H0v2h3.414l8-8H12v2h1l3-3zM12 9h1l3 3-3 3h-1v-2h-1.414l-2.172-2.172 1.414-1.414L11.414 11H12z"
    />
  </svg>
);
export default SvgShuffle;
