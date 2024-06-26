import * as React from "react";
import type { SVGProps } from "react";
const SvgShip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 1H5v2.892l3-1 3 1zM8 5 2 7l1 6H1v2h2.193l2.307-.923 2.5 1 2.5-1 2.307.923H15v-2h-2l1-6z"
    />
  </svg>
);
export default SvgShip;
