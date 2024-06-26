import * as React from "react";
import type { SVGProps } from "react";
const SvgKnight = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M2.683 9.367 4 12l-2 2v2h12v-2l-4-5h4l1-4-6-3V0h-.528a6.472 6.472 0 0 0-5.789 9.367M10 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKnight;
