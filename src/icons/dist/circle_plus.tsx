import * as React from "react";
import type { SVGProps } from "react";
const SvgCirclePlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 7V4h2v3h3v2H9v3H7V9H4V7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCirclePlus;
