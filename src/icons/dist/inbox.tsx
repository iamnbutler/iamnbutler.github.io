import * as React from "react";
import type { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 1v14h14V1zm12 8V3H3v6h3a2 2 0 1 0 4 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInbox;
