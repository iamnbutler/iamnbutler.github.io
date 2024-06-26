import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 16-3.65-2.607A8 8 0 0 1 1 6.883V3l7-3 7 3v3.883a8 8 0 0 1-3.35 6.51zm4.207-10.293-1.414-1.414L7 8.086 5.207 6.293 3.793 7.707 7 10.914z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShieldCheck;
