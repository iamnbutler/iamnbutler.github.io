import * as React from "react";
import type { SVGProps } from "react";
const SvgCar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1 1.667 5H0v3h1v7h2v-2h10v2h2V8h1V5h-1.667L13 1zm1 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7.559-6H4.442L3.108 7h9.784zM12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCar;
