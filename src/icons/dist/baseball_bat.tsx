import * as React from "react";
import type { SVGProps } from "react";
const SvgBaseballBat = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 6-2.614 5.229 1.385 1.385L10 10l6-6-4-4zM0 13.5 2.5 16l1.414-1.414-2.5-2.5z"
    />
  </svg>
);
export default SvgBaseballBat;
