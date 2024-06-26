import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 15v-3h4v3h2v-3h3v-2h-3V6h3V4h-3V1h-2v3H6V1H4v3H1v2h3v4H1v2h3v3zm4-5H6V6h4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFrame;
