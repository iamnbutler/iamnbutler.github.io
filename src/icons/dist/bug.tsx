import * as React from "react";
import type { SVGProps } from "react";
const SvgBug = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 0v1.6a5 5 0 0 1 2 0V0h2v2.5A5 5 0 0 1 12.771 5H3.23A5 5 0 0 1 5 2.5V0zM0 7v2h3v1.496l-2.775.793.55 1.922 2.457-.702a5.002 5.002 0 0 0 9.536 0l2.457.702.55-1.922L13 10.496V9h3V7H9v5H7V7z"
    />
  </svg>
);
export default SvgBug;
