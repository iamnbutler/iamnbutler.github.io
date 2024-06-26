import * as React from "react";
import type { SVGProps } from "react";
const SvgGem = (props: SVGProps<SVGSVGElement>) => (
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
      d="m0 7 7 9h2l7-9V5l-3-4H3L0 5zm8 7h.022l5.444-7h-2.841zm2.25-9h3.25L12 3H8.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGem;
