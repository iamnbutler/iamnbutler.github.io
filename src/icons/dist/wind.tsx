import * as React from "react";
import type { SVGProps } from "react";
const SvgWind = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 1h-2v2h2a1 1 0 1 1 0 2H2v2h11a3 3 0 1 0 0-6M0 11h11a1 1 0 1 1 0 2H9v2h2a3 3 0 1 0 0-6H0z"
    />
  </svg>
);
export default SvgWind;
