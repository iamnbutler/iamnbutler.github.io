import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryCharge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 2h8L3 8v1h3l-1 5H0zM8 7l1-5h5v3h2v6h-2v3H6l5-6V7z"
    />
  </svg>
);
export default SvgBatteryCharge;
