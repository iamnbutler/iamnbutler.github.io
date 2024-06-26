import * as React from "react";
import type { SVGProps } from "react";
const SvgFolders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M9 1H4v10h12V3h-5z" />
    <path fill="currentColor" d="M0 5v10h12v-2H2V5z" />
  </svg>
);
export default SvgFolders;
