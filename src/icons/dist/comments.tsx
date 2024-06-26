import * as React from "react";
import type { SVGProps } from "react";
const SvgComments = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M16 1H4v10h4l2 2 2-2h4z" />
    <path
      fill="currentColor"
      d="M2 5v8h5.172l1.535 1.536-1.414 1.414-.95-.95H0V5z"
    />
  </svg>
);
export default SvgComments;
