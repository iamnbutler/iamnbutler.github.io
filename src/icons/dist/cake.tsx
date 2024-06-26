import * as React from "react";
import type { SVGProps } from "react";
const SvgCake = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 4v2h2V4h2v2a2 2 0 0 1 2 2v1H1V8a2 2 0 0 1 2-2V4h2v2h2V4zM1 11v4h14v-4zM9 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgCake;
