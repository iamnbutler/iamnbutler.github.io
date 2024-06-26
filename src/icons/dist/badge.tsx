import * as React from "react";
import type { SVGProps } from "react";
const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8c0-1.12-.526-2.116-1.344-2.757a3.5 3.5 0 0 0-1-2.9 3.5 3.5 0 0 0-2.899-1A3.5 3.5 0 0 0 8 0C6.88 0 5.884.526 5.243 1.344a3.5 3.5 0 0 0-2.9 1 3.5 3.5 0 0 0-1 2.899A3.5 3.5 0 0 0 0 8c0 1.12.526 2.116 1.344 2.757a3.5 3.5 0 0 0 1 2.9 3.5 3.5 0 0 0 2.899 1A3.5 3.5 0 0 0 8 16c1.12 0 2.116-.526 2.757-1.344a3.5 3.5 0 0 0 2.9-1 3.5 3.5 0 0 0 1-2.899A3.5 3.5 0 0 0 16 8"
    />
  </svg>
);
export default SvgBadge;
