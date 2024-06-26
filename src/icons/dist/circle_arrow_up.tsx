import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4 8h3v5h2V8h3V7L8 3 4 7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleArrowUp;
