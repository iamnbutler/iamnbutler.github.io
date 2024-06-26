import * as React from "react";
import type { SVGProps } from "react";
const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.121.879c1 .999 1.147 2.528.441 3.683L16 14l-1 1h-3l-4.5-4.5-.938.938A3.001 3.001 0 0 1 4 16h-.172a2.828 2.828 0 0 1-2-4.828L5 8 1.828 4.828a2.828 2.828 0 0 1 2-4.828H4a3 3 0 0 1 2.121.879M3 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M12 1 9 4l2.5 2.5L16 2l-1-1z" />
  </svg>
);
export default SvgScissors;
