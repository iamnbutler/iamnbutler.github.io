import * as React from "react";
import type { SVGProps } from "react";
const SvgScooter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2h3.754l.896 3.135A3 3 0 0 1 15 4h1v3h-2.817l.6 2.103A3.001 3.001 0 1 1 10.172 13H5.829A3.001 3.001 0 0 1 0 12V9a3 3 0 0 1 3-3h3v5h4V4H8zm5 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScooter;
