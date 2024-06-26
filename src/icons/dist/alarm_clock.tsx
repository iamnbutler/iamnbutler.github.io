import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="m3.957 1.457-2.5 2.5L.043 2.543l2.5-2.5z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.5 8.5a6.47 6.47 0 0 1-1.047 3.539l2.254 2.254-1.414 1.414-2.177-2.176A6.47 6.47 0 0 1 8 15a6.47 6.47 0 0 1-4.117-1.47l-2.176 2.177-1.414-1.414 2.254-2.254A6.5 6.5 0 1 1 14.5 8.5M7 5v4.414l2.293 2.293 1.414-1.414L9 8.586V5z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="m14.543 3.957-2.5-2.5L13.457.043l2.5 2.5z" />
  </svg>
);
export default SvgAlarmClock;
