import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M16 2H0v3h16zM1 7h4v2h6V7h4v8H1z" />
  </svg>
);
export default SvgArchiveBox;
