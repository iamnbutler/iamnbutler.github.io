import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 1h14v14H1zm2 2h10v10h-1a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3H3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSquareUser;
