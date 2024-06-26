import * as React from "react";
import type { SVGProps } from "react";
const SvgCommentDots = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 1H0v12h5l3 3 3-3h5zM3 6h2v2H3zm6 0H7v2h2zm4 0h-2v2h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCommentDots;
