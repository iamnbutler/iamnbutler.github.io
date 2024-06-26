import * as React from "react";
import type { SVGProps } from "react";
const SvgJoystick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3a3 3 0 0 1-2 2.83V11h2V9h1l3 3v3H1v-3l3-3h3V5.83A3.001 3.001 0 1 1 11 3"
    />
  </svg>
);
export default SvgJoystick;
