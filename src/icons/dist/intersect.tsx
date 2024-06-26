import * as React from "react";
import type { SVGProps } from "react";
const SvgIntersect = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 11v5h11V5h-5V0H0v11zm4-9H2v7h3V5h4zm5 5h-3v4H7v3h7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIntersect;
