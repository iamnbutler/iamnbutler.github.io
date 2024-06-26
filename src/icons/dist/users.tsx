import * as React from "react";
import type { SVGProps } from "react";
const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M3 8a3 3 0 0 0-3 3v4h8V8zM13 8h-3v7h6v-4a3 3 0 0 0-3-3M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgUsers;
