import * as React from "react";
import type { SVGProps } from "react";
const SvgButterfly = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1H0v4a3 3 0 0 0 3 3l-.964.964a3.536 3.536 0 0 0 5 5L8 13l.964.964a3.536 3.536 0 0 0 5-5L13 8a3 3 0 0 0 3-3V1h-3L8 6z"
    />
  </svg>
);
export default SvgButterfly;
