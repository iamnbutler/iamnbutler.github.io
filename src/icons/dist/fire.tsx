import * as React from "react";
import type { SVGProps } from "react";
const SvgFire = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 9A7 7 0 1 1 1 9c0-3.5 3-6 3-6h2v1.5a1 1 0 0 0 2 0V0h2s5 3 5 9m-5 3a2 2 0 1 1-4 0c0-2.5 2-4 2-4s2 1.5 2 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFire;
