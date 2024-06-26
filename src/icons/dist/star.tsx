import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 0H7L5.513 4.577H.7L.083 6.479l3.893 2.829-1.487 4.576 1.618 1.176L8 12.23l3.893 2.829 1.618-1.176-1.487-4.576 3.894-2.83-.619-1.901h-4.812z"
    />
  </svg>
);
export default SvgStar;
