import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 1H1v14h14zM6 5l1.414 1.414L5.828 8l1.586 1.586L6 11 3 8zm4 0L8.586 6.414 10.172 8 8.586 9.586 10 11l3-3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCodeBlock;
