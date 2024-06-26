import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamondHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="m0 9 7 7h2V0H7L0 7z" />
  </svg>
);
export default SvgDiamondHalf;
