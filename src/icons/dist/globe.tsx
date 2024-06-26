import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.52 3.308A7.96 7.96 0 0 0 .062 7h15.876a7.96 7.96 0 0 0-1.458-3.692l-.126.07A13.24 13.24 0 0 1 8 5a13.24 13.24 0 0 1-6.48-1.692M13.056 1.8A11.2 11.2 0 0 1 8 3c-2.098 0-3.811-.575-5.056-1.2A7.97 7.97 0 0 1 8 0c1.918 0 3.678.675 5.056 1.8M.062 9a7.96 7.96 0 0 0 1.458 3.692l.126-.07A13.24 13.24 0 0 1 8 11a13.23 13.23 0 0 1 6.48 1.692A7.96 7.96 0 0 0 15.938 9zM8 16a7.97 7.97 0 0 1-5.056-1.8A11.2 11.2 0 0 1 8 13c2.098 0 3.811.575 5.056 1.2A7.97 7.97 0 0 1 8 16"
    />
  </svg>
);
export default SvgGlobe;
