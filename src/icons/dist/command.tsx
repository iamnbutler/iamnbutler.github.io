import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 4a3 3 0 0 1 6 0v1h2V4a3 3 0 1 1 3 3h-1v2h1a3 3 0 1 1-3 3v-1H7v1a3 3 0 1 1-3-3h1V7H4a3 3 0 0 1-3-3m4 1V4a1 1 0 1 0-1 1zm2 2v2h2V7zm-2 4H4a1 1 0 1 0 1 1zm6 0v1a1 1 0 1 0 1-1zm0-6h1a1 1 0 1 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCommand;
