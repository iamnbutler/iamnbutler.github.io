import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M7 1H1v6h6zm0 8H1v6h6zm2-8h6v6H9zm6 8H9v6h6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGrid;
