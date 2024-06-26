import * as React from "react";
import type { SVGProps } from "react";
const SvgFireplace = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 1H0v2l1 1h14l1-1zM1 6h14v9h-4v-3a3 3 0 1 0-6 0v3H1z"
    />
  </svg>
);
export default SvgFireplace;
