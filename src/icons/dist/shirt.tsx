import * as React from "react";
import type { SVGProps } from "react";
const SvgShirt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M3 1h3l2 2 2-2h6v4l-3 1v10H3V6L0 5V1z" />
  </svg>
);
export default SvgShirt;
