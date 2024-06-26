import * as React from "react";
import type { SVGProps } from "react";
const SvgSink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2a1 1 0 0 0-1 1v4H6V3a3 3 0 0 1 6 0v2h-2V3a1 1 0 0 0-1-1M16 9v2h-2l-2 5H4l-2-5H0V9z"
    />
  </svg>
);
export default SvgSink;
