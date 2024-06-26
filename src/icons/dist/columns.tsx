import * as React from "react";
import type { SVGProps } from "react";
const SvgColumns = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M7 1H1v14h6zM15 1H9v14h6z" />
  </svg>
);
export default SvgColumns;
