import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 0H2v16h2l4-4 4 4h2zM7 3v2H5v2h2v2h2V7h2V5H9V3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmarkPlus;
