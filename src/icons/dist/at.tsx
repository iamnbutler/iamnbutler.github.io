import * as React from "react";
import type { SVGProps } from "react";
const SvgAt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2a6 6 0 1 0 0 12h4v2H8a8 8 0 1 1 8-8v4H8a4 4 0 1 1 4-4v2h2V8a6 6 0 0 0-6-6m2 8V8a2 2 0 1 0-2 2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAt;
