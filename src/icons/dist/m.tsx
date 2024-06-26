import * as React from "react";
import type { SVGProps } from "react";
const SvgM = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 0h3.529L8 8.985 11.472 0H15v16h-3V6.956L9.279 14H6.72L4 6.956V16H1z"
    />
  </svg>
);
export default SvgM;
