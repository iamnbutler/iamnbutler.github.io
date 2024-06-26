import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M3 2H0v3a3 3 0 0 0 3-3" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 2a5 5 0 0 1-5 5v2a5 5 0 0 1 5 5h6a5 5 0 0 1 5-5V7a5 5 0 0 1-5-5zm3 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16 2v3a3 3 0 0 1-3-3zM16 14h-3a3 3 0 0 1 3-3zM3 14a3 3 0 0 0-3-3v3z"
    />
  </svg>
);
export default SvgMoney;
