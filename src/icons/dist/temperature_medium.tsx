import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7a5 5 0 1 0 6 0V0H3zm4 0V2H5v5z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M11 4h5v2h-5zM16 0h-3v2h3zM13 8h3v2h-3zM16 12h-3v2h3z"
    />
  </svg>
);
export default SvgTemperatureMedium;
