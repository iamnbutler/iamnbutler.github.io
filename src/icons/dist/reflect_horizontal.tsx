import * as React from "react";
import type { SVGProps } from "react";
const SvgReflectHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 9H0V7h16zM12 1v1L8 6 4 2V1zM12 14v1H4v-1l4-4z"
    />
  </svg>
);
export default SvgReflectHorizontal;
