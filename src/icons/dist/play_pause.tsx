import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayPause = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 14h2l6-6-6-6H1zM15 2h-2v12h2zM9 2h2v12H9z"
    />
  </svg>
);
export default SvgPlayPause;
