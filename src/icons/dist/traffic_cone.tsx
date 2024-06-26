import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficCone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 1 5.77 5h4.46L9 1zM4.23 10l.924-3h5.692l.923 3zM3.615 12h8.77L13 14h3v2H0v-2h3z"
    />
  </svg>
);
export default SvgTrafficCone;
