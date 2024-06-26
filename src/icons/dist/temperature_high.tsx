import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureHigh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0H4v6.416a5.001 5.001 0 1 0 4 0zM11 4h5v2h-5zM16 0h-3v2h3zM13 8h3v2h-3zM16 12h-3v2h3z"
    />
  </svg>
);
export default SvgTemperatureHigh;
