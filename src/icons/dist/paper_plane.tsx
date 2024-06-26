import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M2 1h3l11 6v2L5 15H2l1-6h5V7H3z" />
  </svg>
);
export default SvgPaperPlane;
