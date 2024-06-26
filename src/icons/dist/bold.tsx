import * as React from "react";
import type { SVGProps } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 1h6.625a4.375 4.375 0 0 1 3.904 6.352A4.375 4.375 0 0 1 9.625 15H2zm3.5 8.75v1.75h4.125a.875.875 0 0 0 0-1.75zm0-3.5h3.125a.875.875 0 1 0 0-1.75H5.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBold;
