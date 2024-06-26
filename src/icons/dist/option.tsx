import * as React from "react";
import type { SVGProps } from "react";
const SvgOption = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 4h4.434l6 10H16v-2h-4.434l-6-10H0zM10 4h6V2h-6z"
    />
  </svg>
);
export default SvgOption;
