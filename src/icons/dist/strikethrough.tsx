import * as React from "react";
import type { SVGProps } from "react";
const SvgStrikethrough = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4.75c0-.295.163-.697.696-1.082C6.228 3.284 7.038 3 8 3c1.75 0 2.76.873 2.954 1.466l2.851-.932C13.062 1.26 10.505 0 8 0 6.477 0 5.037.444 3.94 1.236 2.845 2.026 2 3.25 2 4.75c0 .848.27 1.607.702 2.25H0v2h16V7h-5.296A7.4 7.4 0 0 0 8 6.5c-.962 0-1.772-.284-2.304-.668C5.163 5.447 5 5.045 5 4.75M11 11.25a1 1 0 0 0-.037-.25h3.03q.007.124.007.25c0 1.5-.845 2.723-1.94 3.514C10.963 15.556 9.523 16 8 16c-2.505 0-5.062-1.26-5.805-3.534l2.851-.932C5.24 12.127 6.25 13 8 13c.962 0 1.772-.284 2.304-.668.533-.385.696-.787.696-1.082"
    />
  </svg>
);
export default SvgStrikethrough;
