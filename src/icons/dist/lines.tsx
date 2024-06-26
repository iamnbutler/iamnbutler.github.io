import * as React from "react";
import type { SVGProps } from "react";
const SvgLines = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 5h14v2H1zM1 9h14v2H1zM1 13h14v2H1zM1 1h14v2H1z"
    />
  </svg>
);
export default SvgLines;
