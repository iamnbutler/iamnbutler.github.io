import * as React from "react";
import type { SVGProps } from "react";
const SvgDog = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M16 4v3a4 4 0 0 1-4 4h-2v4H0v-2l.932-2.13q.481.129 1.01.13a3.94 3.94 0 0 0 3.822-2.985l-1.94-.485a1.94 1.94 0 1 1-3.765-.94l.64-2.56A4 4 0 0 1 4.579 1H10l2 3zM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDog;
