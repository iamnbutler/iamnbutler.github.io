import * as React from "react";
import type { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 16 2-2v-4l1.657-1.657A8 8 0 0 0 16 2.686V0h-2.686a8 8 0 0 0-5.657 2.343L6 4H2L0 6zm.5-9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="m4.927 13.756-2.683-2.683L0 15l1 1z" />
  </svg>
);
export default SvgRocket;
