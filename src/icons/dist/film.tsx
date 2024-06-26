import * as React from "react";
import type { SVGProps } from "react";
const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 1h2v2h2V1h6v2h2V1h2v14h-2v-2h-2v2H5v-2H3v2H1zm2 8h2v2H3zm10 0h-2v2h2zM3 5h2v2H3zm10 0h-2v2h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilm;
