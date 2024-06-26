import * as React from "react";
import type { SVGProps } from "react";
const SvgServer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H0v5h16zM4 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 9H0v5h16zM3 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgServer;
