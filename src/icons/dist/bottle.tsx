import * as React from "react";
import type { SVGProps } from "react";
const SvgBottle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m.707 12.707 2.586 2.586a2.414 2.414 0 0 0 3.414 0L11 11V8l1.5-1.5h.086L9.5 3.414V3.5L8 5H5L.707 9.293a2.414 2.414 0 0 0 0 3.414M10.457 1.543l4 4L16 4l-4-4z"
    />
  </svg>
);
export default SvgBottle;
