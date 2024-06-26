import * as React from "react";
import type { SVGProps } from "react";
const SvgBatterySlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16h-3l-1.625-2H0V2h1.625L0 0h3zM16 11h-1.062L7.625 2H14v3h2z"
    />
  </svg>
);
export default SvgBatterySlash;
