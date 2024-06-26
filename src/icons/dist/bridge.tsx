import * as React from "react";
import type { SVGProps } from "react";
const SvgBridge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 4a3 3 0 0 0 3-3h2a3 3 0 0 0 6 0h2a3 3 0 0 0 3 3v2a4.98 4.98 0 0 1-3-1v5h3v2h-3v3h-2v-3H5v3H3v-3H0v-2h3V5c-.836.628-1.874 1-3 1zm9 1.9a5 5 0 0 0 2-.9v5H9zm-2 0A5 5 0 0 1 5 5v5h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBridge;
