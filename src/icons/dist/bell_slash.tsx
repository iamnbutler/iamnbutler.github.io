import * as React from "react";
import type { SVGProps } from "react";
const SvgBellSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16h-3l-3.25-4H1v-2l2-2V5q.002-.593.132-1.145L0 0h3zM13 8.615 6.254.313A5 5 0 0 1 13 5z"
    />
    <path
      fill="currentColor"
      d="M8 16a3 3 0 0 1-2.83-2h3.205l1.241 1.528A3 3 0 0 1 8 16"
    />
  </svg>
);
export default SvgBellSlash;
