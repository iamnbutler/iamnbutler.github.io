import * as React from "react";
import type { SVGProps } from "react";
const SvgLockClosed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6V4a4 4 0 1 1 8 0v2h2v10H2V6zm2-2a2 2 0 1 1 4 0v2H6zm1 9V9h2v4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLockClosed;
