import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M10 0H6v3h4z" />
    <path fill="currentColor" d="M4 2H2v14h12V2h-2v3H4z" />
  </svg>
);
export default SvgClipboard;
