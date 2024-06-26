import * as React from "react";
import type { SVGProps } from "react";
const SvgReflectVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 16V0h2v16zM15 12h-1l-4-4 4-4h1zM2 12H1V4h1l4 4z"
    />
  </svg>
);
export default SvgReflectVertical;
