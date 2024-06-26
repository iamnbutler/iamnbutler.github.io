import * as React from "react";
import type { SVGProps } from "react";
const SvgJ = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 0v10a6 6 0 0 1-12 0V8h3v2a3 3 0 1 0 6 0V0z"
    />
  </svg>
);
export default SvgJ;
