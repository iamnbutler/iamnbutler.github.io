import * as React from "react";
import type { SVGProps } from "react";
const SvgCube = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1 4 7-4 7 4v8l-7 4-7-4zm3.023.576L3 5.16v1.134L7 8.58v4.545l1 .572 1-.572V8.58l4-2.285V5.16l-1.023-.585L8 6.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCube;
