import * as React from "react";
import type { SVGProps } from "react";
const SvgDesktop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 2h16v10h-6v1l2 2v1H4v-1l2-2v-1H0zm2 2h12v6H2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDesktop;
