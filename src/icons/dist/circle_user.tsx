import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M8 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m-2-6a3 3 0 0 0-2.712 1.715 6 6 0 1 1 9.423 0A3 3 0 0 0 10 10z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleUser;
