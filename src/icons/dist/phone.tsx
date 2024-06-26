import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 5V1h6v4L4.5 7.5l4 4L11 9h4v6h-4C5.477 15 1 10.523 1 5"
    />
  </svg>
);
export default SvgPhone;
