import * as React from "react";
import type { SVGProps } from "react";
const SvgSquarePlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H1v14h14zM7 4h2v3h3v2H9v3H7V9H4V7h3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSquarePlus;
