import * as React from "react";
import type { SVGProps } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
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
      d="m0 8 6-6h10v12H6zm6.793-1.793L8.586 8 6.793 9.793l1.414 1.414L10 9.414l1.793 1.793 1.414-1.414L11.414 8l1.793-1.793-1.414-1.414L10 6.586 8.207 4.793z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDelete;
