import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleQuestion = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 5a1.5 1.5 0 0 0-1.5 1.5V7h-2v-.5A3.5 3.5 0 1 1 8 10H7V8h1a1.5 1.5 0 1 0 0-3m1 6v2H7v-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircleQuestion;
