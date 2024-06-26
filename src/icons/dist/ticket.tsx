import * as React from "react";
import type { SVGProps } from "react";
const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H0v4a2 2 0 1 1 0 4v4h16v-4a2 2 0 1 1 0-4zm-8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTicket;
