import * as React from "react";
import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M7 0H2v16h12V7H7z" />
    <path fill="currentColor" d="M9 0v5h5z" />
  </svg>
);
export default SvgFile;
