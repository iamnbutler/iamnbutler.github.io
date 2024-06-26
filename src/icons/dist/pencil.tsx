import * as React from "react";
import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.293 3.707 1 11v4h4l7.293-7.293zM9.707 2.293l4 4 1.465-1.465a2.829 2.829 0 0 0-4-4z"
    />
  </svg>
);
export default SvgPencil;
