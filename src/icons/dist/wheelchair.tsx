import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelchair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M13 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.22 3.124a2 2 0 0 0-1.806.547L2.793 5.293l1.414 1.414L5.83 5.086l1.48.296L5.594 8.02A4 4 0 1 0 9.874 11h2.095l-1 4h2.062l.878-3.515A2 2 0 0 0 11.97 9H8.921l2.398-3.427-.623-1.554zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWheelchair;
