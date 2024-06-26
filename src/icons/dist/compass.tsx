import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6 6l-2 5 1 1 5-2 2-5-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompass;
