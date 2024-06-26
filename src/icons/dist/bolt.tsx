import * as React from "react";
import type { SVGProps } from "react";
const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="m9 7 1-7H8L2 7v2h5l-1 7h2l6-7V7z" />
  </svg>
);
export default SvgBolt;
