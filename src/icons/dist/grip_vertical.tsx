import * as React from "react";
import type { SVGProps } from "react";
const SvgGripVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 4V0h4v4zM3 6v4h4V6zM9 6v4h4V6zM9 0v4h4V0zM3 16v-4h4v4zM9 12v4h4v-4z"
    />
  </svg>
);
export default SvgGripVertical;
