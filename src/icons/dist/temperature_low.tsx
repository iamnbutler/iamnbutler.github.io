import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureLow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 0H3v7a5 5 0 1 0 6 0zM4.201 8.599l.799-.6V2h2v5.999l.799.6A3 3 0 0 1 9 11c0 .35-.06.687-.17 1H3.17c-.11-.313-.17-.65-.17-1 0-.98.468-1.85 1.201-2.401"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16 4h-5v2h5zM13 0h3v2h-3zM16 8h-3v2h3zM13 12h3v2h-3z"
    />
  </svg>
);
export default SvgTemperatureLow;
