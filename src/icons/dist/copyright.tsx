import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyright = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.121-5.879a3 3 0 1 1 0-4.242l1.415-1.415a5 5 0 1 0 0 7.072z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopyright;
