import * as React from "react";
import type { SVGProps } from "react";
const SvgBowAndArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 0-4.5.5v1l1.057.529-1.651 1.651A7.97 7.97 0 0 0 6 2 7.96 7.96 0 0 0 .708 4 8 8 0 0 0 0 4.708l3.525 3.525 1.414-1.414L2.95 4.83A5.97 5.97 0 0 1 6 4c1.296 0 2.496.41 3.477 1.11L4.586 10H3l-3 3 2 1 1 2 3-3v-1.586l4.89-4.89c.7.98 1.11 2.18 1.11 3.476a5.97 5.97 0 0 1-.83 3.049L9.18 11.061l-1.414 1.415L11.292 16a8 8 0 0 0 1.325-1.503A7.96 7.96 0 0 0 14 10c0-1.849-.627-3.55-1.68-4.906l1.651-1.651L14.5 4.5h1z"
    />
  </svg>
);
export default SvgBowAndArrow;
