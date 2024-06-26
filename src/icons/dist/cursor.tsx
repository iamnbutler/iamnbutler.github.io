import * as React from "react";
import type { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1 2 1-1 12 4v2l-3.99 1.596 4.697 4.697-1.414 1.414-4.697-4.697L7 14H5z"
    />
  </svg>
);
export default SvgCursor;
