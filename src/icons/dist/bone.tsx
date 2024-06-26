import * as React from "react";
import type { SVGProps } from "react";
const SvgBone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.268 7.268a2.5 2.5 0 0 1-3.536 0l-.085-.086-4.465 4.464.086.086A2.5 2.5 0 1 1 3 13.5V13h-.496a2.5 2.5 0 1 1 1.763-4.268l.087.086 4.464-4.464-.086-.086A2.5 2.5 0 1 1 13 2.5V3h.5a2.5 2.5 0 0 1 1.768 4.268"
    />
  </svg>
);
export default SvgBone;
