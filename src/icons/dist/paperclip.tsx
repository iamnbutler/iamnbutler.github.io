import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a1 1 0 0 0-1 1v9H7V3a3 3 0 0 1 6 0v8a5 5 0 0 1-10 0V3.5h2V11a3 3 0 1 0 6 0V3a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgPaperclip;
