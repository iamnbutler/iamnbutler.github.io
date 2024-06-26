import * as React from "react";
import type { SVGProps } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M6.5 0v8h3V0z" />
    <path
      fill="currentColor"
      d="M4.464 11.536a5 5 0 0 1 0-7.072l-2.12-2.12a8 8 0 1 0 11.313 0l-2.121 2.12a5 5 0 1 1-7.072 7.072"
    />
  </svg>
);
export default SvgPower;
