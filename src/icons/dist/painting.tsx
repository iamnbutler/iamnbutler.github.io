import * as React from "react";
import type { SVGProps } from "react";
const SvgPainting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M10 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 0v3l1 1v8l-1 1v3h3l1-1h6l1 1h3v-3l-1-1V4l1-1V0h-3l-1 1H5L4 0zm11 3H4v10l.947-1.894A2 2 0 0 1 6.737 10h2.527a2 2 0 0 1 1.789 1.106L12 13z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPainting;
