import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 1v6a5 5 0 0 0 10 0V1h-3v6a2 2 0 1 1-4 0V1zM14 16v-2H2v2z"
    />
  </svg>
);
export default SvgUnderline;
