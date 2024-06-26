import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h9v-2H4v-2h10V0z"
    />
  </svg>
);
export default SvgBook;
