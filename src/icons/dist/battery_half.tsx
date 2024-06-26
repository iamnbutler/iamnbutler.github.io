import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryHalf = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 2h14v3h2v6h-2v3H0zm12 2H7v8h5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryHalf;
