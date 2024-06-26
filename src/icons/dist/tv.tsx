import * as React from "react";
import type { SVGProps } from "react";
const SvgTv = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 2h16v9H0zm14 2H2v5h12z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M3 13h10v2H3z" />
  </svg>
);
export default SvgTv;
