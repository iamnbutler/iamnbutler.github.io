import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.656 5.243A3.5 3.5 0 0 1 16 8c0 1.12-.526 2.117-1.344 2.757a3.5 3.5 0 0 1-1 2.9 3.5 3.5 0 0 1-2.899 1A3.5 3.5 0 0 1 8 16a3.5 3.5 0 0 1-2.757-1.344 3.5 3.5 0 0 1-2.9-1 3.5 3.5 0 0 1-1-2.899A3.5 3.5 0 0 1 0 8c0-1.12.526-2.116 1.344-2.757a3.5 3.5 0 0 1 1-2.9 3.5 3.5 0 0 1 2.899-1A3.5 3.5 0 0 1 8 0c1.12 0 2.117.526 2.757 1.344a3.5 3.5 0 0 1 2.9 1 3.5 3.5 0 0 1 1 2.899m-2.449.964-1.414-1.414L7 8.586 5.207 6.793 3.793 8.207 7 11.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBadgeCheck;
