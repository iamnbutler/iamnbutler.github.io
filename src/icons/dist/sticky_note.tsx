import * as React from "react";
import type { SVGProps } from "react";
const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M15 1H1v14h7V8h7z" />
    <path fill="currentColor" d="M15 10h-5v5h1l4-4z" />
  </svg>
);
export default SvgStickyNote;
