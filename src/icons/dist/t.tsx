import * as React from "react";
import type { SVGProps } from "react";
const SvgT = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M9.5 3H15V0H1v3h5.5v13h3z" />
  </svg>
);
export default SvgT;
