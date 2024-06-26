import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 16-5-5 1.793-1.793 3 3 1.414-1.414-3-3 1.586-1.586 1.5 1.5 1.414-1.414-1.5-1.5 1.586-1.586 3 3 1.414-1.414-3-3L11 0l5 5z"
    />
  </svg>
);
export default SvgRuler;
