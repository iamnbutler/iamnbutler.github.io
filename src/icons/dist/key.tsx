import * as React from "react";
import type { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 5.5a5.5 5.5 0 0 1-5.5 5.5H7v2H5v2l-1 1H0v-4l5.164-5.164A5.5 5.5 0 1 1 16 5.5M13 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKey;
