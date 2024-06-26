import * as React from "react";
import type { SVGProps } from "react";
const SvgRobot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 0v2h4l3 6.5-3 6.5H3L0 8.5 3 2h4V0zM4.598 11.738 8 12.262l3.402-.524-.304-1.976L8 10.238l-3.098-.476zM7 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M10.25 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRobot;
