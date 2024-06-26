import * as React from "react";
import type { SVGProps } from "react";
const SvgAquarius = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.5 1.348 3.5 2 3.5-2 3.996 2.284-.992 1.736L11.5 3.652l-3.5 2-3.5-2-3.004 1.716-.992-1.736zM4.5 10.348l3.5 2 3.5-2 3.996 2.284-.992 1.736-3.004-1.716-3.5 2-3.5-2-3.004 1.716-.992-1.736zM4.5 5.848.504 8.132l.992 1.736L4.5 8.152l3.5 2 3.5-2 3.004 1.716.992-1.736L11.5 5.848l-3.5 2z"
    />
  </svg>
);
export default SvgAquarius;
