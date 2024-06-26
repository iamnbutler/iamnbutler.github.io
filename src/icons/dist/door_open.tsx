import * as React from "react";
import type { SVGProps } from "react";
const SvgDoorOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 0 3 2v12H1v2h14v-2h-2V2h-2v12H9zM6.75 9c.414 0 .75-.448.75-1s-.336-1-.75-1S6 7.448 6 8s.336 1 .75 1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoorOpen;
