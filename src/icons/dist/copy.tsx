import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M0 0h10v4H4v6H0z" />
    <path fill="currentColor" d="M16 6H6v10h10z" />
  </svg>
);
export default SvgCopy;
