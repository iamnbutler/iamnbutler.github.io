import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorClick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3V0H6v3zM.793 2.207l2.5 2.5 1.414-1.414-2.5-2.5zM6 5 5 6l3 9h2l.717-2.869 3.576 3.576 1.414-1.414-3.576-3.576L15 10V8zM0 6h3v2H0z"
    />
  </svg>
);
export default SvgCursorClick;
