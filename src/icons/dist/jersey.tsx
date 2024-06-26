import * as React from "react";
import type { SVGProps } from "react";
const SvgJersey = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 1 2 2 2-2h6v4l-3 1v6H3V6L0 5V1zm4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M3 16v-2h10v2z" />
  </svg>
);
export default SvgJersey;
