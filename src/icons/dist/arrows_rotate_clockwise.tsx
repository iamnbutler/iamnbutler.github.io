import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsRotateClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 7 9 6l2.293-2.293-.586-.586a3.83 3.83 0 0 0-5.414 0l-.086.086A4.12 4.12 0 0 0 4 6.121V7H2v-.879c0-1.623.645-3.18 1.793-4.328l.086-.086a5.83 5.83 0 0 1 8.242 0l.586.586L15 0l1 1v6zM5.293 12.879a3.83 3.83 0 0 0 5.414 0l.086-.086A4.12 4.12 0 0 0 12 9.879V9h2v.879c0 1.623-.645 3.18-1.793 4.328l-.086.086a5.83 5.83 0 0 1-8.242 0l-.586-.586L1 16l-1-1V9h6l1 1-2.293 2.293z"
    />
  </svg>
);
export default SvgArrowsRotateClockwise;
