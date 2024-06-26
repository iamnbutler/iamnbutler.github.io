import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.35 13.393 8 16l3.65-2.607A8 8 0 0 0 15 6.883V3L8 0 1 3v3.883a8 8 0 0 0 3.35 6.51"
    />
  </svg>
);
export default SvgShield;
