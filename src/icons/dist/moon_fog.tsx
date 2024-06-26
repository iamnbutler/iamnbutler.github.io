import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonFog = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.707.707A8 8 0 0 0 1.07 12H7V9.19A6.48 6.48 0 0 1 5 4.5c0-1.02.235-1.986.654-2.846zM11.5 7 9 4.5 11.5 2 14 4.5zM2 14h12v2H2zM15 10H9v2h6z"
    />
  </svg>
);
export default SvgMoonFog;
