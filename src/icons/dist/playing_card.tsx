import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayingCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 0H2v16h12zM5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 6 6 8l2 2 2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlayingCard;
