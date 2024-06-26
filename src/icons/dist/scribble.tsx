import * as React from "react";
import type { SVGProps } from "react";
const SvgScribble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="m13 0 3 3-6 6H7V6z" />
    <path
      fill="currentColor"
      d="M4.5 7a4.5 4.5 0 0 0 0 9c2.103 0 3.597-1.196 4.792-2.153l.083-.066C10.666 12.747 11.652 12 13 12a1 1 0 1 1 0 2v2a3 3 0 1 0 0-6c-2.103 0-3.597 1.196-4.792 2.153l-.083.066C6.834 13.253 5.848 14 4.5 14a2.5 2.5 0 0 1 0-5H5V7z"
    />
  </svg>
);
export default SvgScribble;
