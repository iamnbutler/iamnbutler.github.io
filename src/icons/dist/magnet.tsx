import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 6v3a7 7 0 1 0 14 0V6h-5v3a2 2 0 1 1-4 0V6zM1 4h5V1H1zM10 4h5V1h-5z"
    />
  </svg>
);
export default SvgMagnet;
