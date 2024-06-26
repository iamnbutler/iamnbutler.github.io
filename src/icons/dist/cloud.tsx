import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6a4 4 0 0 0-8 0 4 4 0 0 0-4 4v4h16v-3a4 4 0 0 0-4-4z"
    />
  </svg>
);
export default SvgCloud;
