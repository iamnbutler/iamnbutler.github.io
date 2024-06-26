import * as React from "react";
import type { SVGProps } from "react";
const SvgLadder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0v16h2v-2h8v2h2V0h-2v2H4V0zm2 4v3h8V4zm8 8H4V9h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLadder;
