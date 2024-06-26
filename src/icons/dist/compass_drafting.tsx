import * as React from "react";
import type { SVGProps } from "react";
const SvgCompassDrafting = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2.17V0H7v2.17a3 3 0 0 0-1.623 4.287L4.26 8.319a5 5 0 0 1-.976-1.652l-1.886.666a7 7 0 0 0 1.798 2.758L.714 14.228 1.4 16l1.886-.228 2.482-4.135A7 7 0 0 0 8 12 6.99 6.99 0 0 0 14.6 7.333l-1.885-.666a5 5 0 0 1-.976 1.651l-1.117-1.861A3.001 3.001 0 0 0 9 2.17M7.95 8h.1l1.118 1.863a5 5 0 0 1-2.336 0zM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m12.714 15.772-1.433-2.389a9 9 0 0 0 2.57-1.545l1.435 2.39L14.6 16z"
    />
  </svg>
);
export default SvgCompassDrafting;
