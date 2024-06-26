import * as React from "react";
import type { SVGProps } from "react";
const SvgChair = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1a4 4 0 0 0-3.874 3H5.874A4 4 0 0 0 2 5z"
    />
    <path
      fill="currentColor"
      d="M12 9a2 2 0 1 1 2 2v4H2v-4a2 2 0 1 1 2-2v1h8z"
    />
  </svg>
);
export default SvgChair;
