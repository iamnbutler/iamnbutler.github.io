import * as React from "react";
import type { SVGProps } from "react";
const SvgICursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 2H3V0h1c1.636 0 3.088.785 4 2a5 5 0 0 1 4-2h1v2h-1a3 3 0 0 0-3 3v2h2v2H9v2a3 3 0 0 0 3 3h1v2h-1a5 5 0 0 1-4-2 5 5 0 0 1-4 2H3v-2h1a3 3 0 0 0 3-3V9H5V7h2V5a3 3 0 0 0-3-3"
    />
  </svg>
);
export default SvgICursor;
