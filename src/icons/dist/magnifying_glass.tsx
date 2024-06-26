import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.192 12.606a7 7 0 1 1 1.414-1.414l3.101 3.1-1.414 1.415zM5.586 8.414 4.172 9.828a4 4 0 0 1 5.656-5.656L8.414 5.586a2 2 0 1 0-2.828 2.828"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMagnifyingGlass;
