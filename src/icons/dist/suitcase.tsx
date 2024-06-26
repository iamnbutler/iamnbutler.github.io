import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 1v14h8V1zm6 4V3H6v2z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M16 15h-2V5h2zM2 5H0v10h2z" />
  </svg>
);
export default SvgSuitcase;
