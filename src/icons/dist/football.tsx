import * as React from "react";
import type { SVGProps } from "react";
const SvgFootball = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 15v-4.5A9.5 9.5 0 0 1 10.5 1H15v4.5A9.5 9.5 0 0 1 5.5 15zm7.793-9.793 2 2 1.414-1.414-2-2zm-2.5 2.5 2 2 1.414-1.414-2-2zm-2.5 2.5 2 2 1.414-1.414-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFootball;
