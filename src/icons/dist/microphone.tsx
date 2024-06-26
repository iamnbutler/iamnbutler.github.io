import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M5 3a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0z" />
    <path
      fill="currentColor"
      d="M10 13.71V16H6v-2.29C3.109 12.85 1 10.171 1 7V6h2v1a5 5 0 0 0 10 0V6h2v1a7 7 0 0 1-5 6.71"
    />
  </svg>
);
export default SvgMicrophone;
