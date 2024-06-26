import * as React from "react";
import type { SVGProps } from "react";
const SvgSwatches = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 1H1v11.5a2.5 2.5 0 0 0 5 0zM13.4 6.136l-5.4 5.4V4.464L9.864 2.6zM15 15H7.364l5-5H15z"
    />
  </svg>
);
export default SvgSwatches;
