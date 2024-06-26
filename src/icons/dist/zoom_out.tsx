import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.192 12.606a7 7 0 1 1 1.414-1.414l3.101 3.1-1.414 1.415zM10 6v2H4V6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomOut;
