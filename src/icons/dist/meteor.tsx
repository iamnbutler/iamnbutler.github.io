import * as React from "react";
import type { SVGProps } from "react";
const SvgMeteor = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 1 1 .75-.724 3.078L15 1.25 16 2l-5.054 10.567A6 6 0 0 1 9.77 14.23l-.135.135A5.64 5.64 0 0 1 5.657 16a5.657 5.657 0 0 1-4.001-9.656l.09-.09a6 6 0 0 1 1.177-.913zM5.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMeteor;
