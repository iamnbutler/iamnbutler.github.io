import * as React from "react";
import type { SVGProps } from "react";
const SvgSignal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 1v14h2V1zM9 4v11h2V4zM5 15V7h2v8zM1 10v5h2v-5z"
    />
  </svg>
);
export default SvgSignal;
