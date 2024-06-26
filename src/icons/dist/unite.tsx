import * as React from "react";
import type { SVGProps } from "react";
const SvgUnite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M11 0H0v11h5v5h11V5h-5z" />
  </svg>
);
export default SvgUnite;
