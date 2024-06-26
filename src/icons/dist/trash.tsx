import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M4 2H1v2h14V2h-3V0H4z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6h10v10H3zm4 3h2v4H7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;
