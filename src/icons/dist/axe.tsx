import * as React from "react";
import type { SVGProps } from "react";
const SvgAxe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 7.5A7.5 7.5 0 0 1 8.5 0v5l.543.543 2.25-2.25 1.414 1.414-2.25 2.25L11 7.5h5A7.5 7.5 0 0 1 8.5 15v-5l-.543-.543-6.5 6.5-1.414-1.414 6.5-6.5L6 7.5z"
    />
  </svg>
);
export default SvgAxe;
