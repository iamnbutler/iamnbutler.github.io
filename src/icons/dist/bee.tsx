import * as React from "react";
import type { SVGProps } from "react";
const SvgBee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3v1l4.344 4.778c.422.465.656 1.077.656 1.705C16 11.863 14.88 13 13.5 13a2.5 2.5 0 0 1-2.5-2.5v-.814q0 .158-.006.314H5.006A8 8 0 0 1 5 9.686v.814A2.5 2.5 0 0 1 2.5 13C1.12 13 0 11.863 0 10.483c0-.628.234-1.24.656-1.705L5 4V3a3 3 0 0 1 6 0M5 8h6V6H5z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M8.657 15.343A8 8 0 0 0 10.658 12H5.342a8 8 0 0 0 2.001 3.343L8 16z"
    />
  </svg>
);
export default SvgBee;
