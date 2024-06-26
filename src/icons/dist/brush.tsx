import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.444 4.444 12.392.76a2.026 2.026 0 1 1 2.848 2.848l-3.684 2.948.69.69a2.576 2.576 0 0 1 .157 3.47l-.578.694L4.59 4.175l.693-.578a2.576 2.576 0 0 1 3.472.158zM0 8l3.047-2.539 7.492 7.492L8 16z"
    />
  </svg>
);
export default SvgBrush;
