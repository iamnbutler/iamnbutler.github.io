import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceId = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 1v2H3v2H1V1zM1 11h2v2h2v2H1zM15 5V1h-4v2h2v2zM11 15v-2h2v-2h2v4zM5.75 7.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M11.5 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M10.57 8.673A6 6 0 0 1 8 9.25a6 6 0 0 1-2.57-.577l-.86 1.807c1.041.494 2.205.77 3.43.77a8 8 0 0 0 3.43-.77z"
    />
  </svg>
);
export default SvgFaceId;
