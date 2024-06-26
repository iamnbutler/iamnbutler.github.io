import * as React from "react";
import type { SVGProps } from "react";
const SvgScreencast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 4H0V2h16v12H9.987a9.7 9.7 0 0 0-.105-2H14zM0 10a4 4 0 0 1 4 4H2a2 2 0 0 0-2-2z"
    />
    <path fill="currentColor" d="M8 14a8 8 0 0 0-8-8v2a6 6 0 0 1 6 6z" />
  </svg>
);
export default SvgScreencast;
