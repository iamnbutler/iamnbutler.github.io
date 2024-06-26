import * as React from "react";
import type { SVGProps } from "react";
const SvgScrew = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.757 1.757a6 6 0 1 1 8.486 8.486L11.75 7.75l-1.038 1.038-4.9-2.1L8.25 4.25zM2.562 9.938l1.726-1.726 4.9 2.1-1.726 1.726zM5.938 13.562l-4.9-2.1L0 12.5 3.5 16z"
    />
  </svg>
);
export default SvgScrew;
