import * as React from "react";
import type { SVGProps } from "react";
const SvgRows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M15 7V1H1v6zM15 15V9H1v6z" />
  </svg>
);
export default SvgRows;
