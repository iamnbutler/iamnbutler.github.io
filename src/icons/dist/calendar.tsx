import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M6 0H3v2H1v3h14V2h-2V0h-3v2H6zM15 7H1v8h14z" />
  </svg>
);
export default SvgCalendar;
