import * as React from "react";
import type { SVGProps } from "react";
const SvgWandWithSparkles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 12.5 3.5 16 8 11l2-5 6-4.5L14.5 0 8 4 6.5 7zM11 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 9l2-2 2 2-2 2zM3.5 2 2 3.5 3.5 5 5 3.5z"
    />
  </svg>
);
export default SvgWandWithSparkles;
