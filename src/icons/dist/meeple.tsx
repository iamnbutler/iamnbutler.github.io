import * as React from "react";
import type { SVGProps } from "react";
const SvgMeeple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 3c0 .482-.114.938-.316 1.342L16 7v3h-3.5l2.5 5v1h-5l-2-4-2 4H1v-1l2.5-5H0V7l5.316-2.658A3 3 0 1 1 11 3"
    />
  </svg>
);
export default SvgMeeple;
