import * as React from "react";
import type { SVGProps } from "react";
const SvgGripHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 3h4v4H0zM10 3H6v4h4zM10 9H6v4h4zM12 3h4v4h-4zM16 9h-4v4h4zM4 9H0v4h4z"
    />
  </svg>
);
export default SvgGripHorizontal;
