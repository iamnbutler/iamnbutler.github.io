import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6v8h8v-2H5.414L10 7.414V6H8.586L4 10.586V6z"
    />
    <path fill="currentColor" d="M12 4v12h2v-2h2v-2h-2V2H4V0H2v2H0v2z" />
  </svg>
);
export default SvgCrop;
