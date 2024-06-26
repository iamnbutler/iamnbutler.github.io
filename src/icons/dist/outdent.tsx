import * as React from "react";
import type { SVGProps } from "react";
const SvgOutdent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 7H3.5l-3-3 3-3H5zM7 1h8v2H7zM15 5H7v2h8zM1 9h14v2H1zM1 13h14v2H1z"
    />
  </svg>
);
export default SvgOutdent;
