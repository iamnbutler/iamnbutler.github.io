import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintBucket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 15 0 8l6-6H2V0h6l1.414 1.414L4.828 6H14l1 1zM12.621 12.379 14 11l1.379 1.379c.398.398.621.937.621 1.5V14a2 2 0 1 1-4 0v-.121c0-.563.223-1.102.621-1.5"
    />
  </svg>
);
export default SvgPaintBucket;
