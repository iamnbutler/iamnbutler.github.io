import * as React from "react";
import type { SVGProps } from "react";
const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 2v13h-2v-5h-2v5H1V5l6-3h1v3l6-3zM9 8H7v4h2zM5 8H3v4h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFactory;
