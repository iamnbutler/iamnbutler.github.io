import * as React from "react";
import type { SVGProps } from "react";
const SvgHandTap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3V0H6v3zM9.879 12H7v3h3.61a5.39 5.39 0 0 0 3.812-9.2l-1.09-1.09-4.5 2-2.271-2.27-2.122 2.12zM0 6h3v2H0zM3.293 4.707l-2.5-2.5L2.207.793l2.5 2.5z"
    />
  </svg>
);
export default SvgHandTap;
