import * as React from "react";
import type { SVGProps } from "react";
const SvgBomb = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.957 1.457-1.418 1.418-1.414-1.418L14.543.043z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11.707 5.707 1.416-1.416 1.412 1.416 1.418-1.418-1.414-1.414-1.416 1.412-1.412-1.412-1.418 1.418L9 3 7.743 4.257a6 6 0 1 0 4 4L13 7zM6 8a2 2 0 0 0-2 2H2a4 4 0 0 1 4-4z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m11.71.043 1.415 1.414-1.418 1.418-1.414-1.418z"
    />
  </svg>
);
export default SvgBomb;
