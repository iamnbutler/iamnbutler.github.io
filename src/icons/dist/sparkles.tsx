import * as React from "react";
import type { SVGProps } from "react";
const SvgSparkles = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 3 2.5-.5L11 0h1l.5 2.5L15 3v1l-2.5.5L12 7h-1l-.5-2.5L8 4zM0 11v-1l4-1 1-4h1l1 4 4 1v1l-4 1-1 4H5l-1-4zM1 2 2.5.5 4 2 2.5 3.5zM15 14l-2-2-2 2 2 2zM15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgSparkles;
