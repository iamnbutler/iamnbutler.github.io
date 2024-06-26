import * as React from "react";
import type { SVGProps } from "react";
const SvgCog = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 0h3l.594 2.375a6 6 0 0 1 1.728 1l2.356-.674 1.5 2.598-1.76 1.703a6 6 0 0 1 0 1.996l1.76 1.703-1.5 2.598-2.356-.674a6 6 0 0 1-1.728 1L9.5 16h-3l-.594-2.376a6 6 0 0 1-1.728-.999l-2.356.674-1.5-2.598 1.76-1.703a6 6 0 0 1 0-1.996L.323 5.299l1.5-2.598 2.356.674a6 6 0 0 1 1.728-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCog;
