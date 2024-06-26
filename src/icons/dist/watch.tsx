import * as React from "react";
import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 0h6l.38 3.042A6 6 0 0 1 13.917 7H15v2h-1.083a6 6 0 0 1-2.537 3.958L11 16H5l-.38-3.042A6 6 0 0 1 2 8a6 6 0 0 1 2.62-4.958zm2 5v3.414l2.293 2.293 1.414-1.414L9 7.586V5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWatch;
