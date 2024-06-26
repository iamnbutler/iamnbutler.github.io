import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceMeh = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9v2h8V9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFaceMeh;
