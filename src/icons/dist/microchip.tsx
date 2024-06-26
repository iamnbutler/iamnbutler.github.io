import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrochip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M6 10V6h4v4z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 2V0h2v2h2V0h2v2h2V0h2v2h1v1h2v2h-2v2h2v2h-2v2h2v2h-2v1h-1v2h-2v-2H9v2H7v-2H5v2H3v-2H2v-1H0v-2h2V9H0V7h2V5H0V3h2V2zm1 2v8h8V4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMicrochip;
