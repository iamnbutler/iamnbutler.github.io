import * as React from "react";
import type { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
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
      d="m0 7 1.172-1.172a9.657 9.657 0 0 1 13.656 0L16 7l-1.414 1.414-1.172-1.171a7.657 7.657 0 0 0-10.828 0L1.414 8.414z"
    />
    <path
      fill="currentColor"
      d="M4.243 11.243 2.828 9.828 4 8.657a5.657 5.657 0 0 1 8 0l1.172 1.171-1.415 1.415-1.171-1.172a3.657 3.657 0 0 0-5.172 0z"
    />
    <path
      fill="currentColor"
      d="m8 15-2.343-2.343 1.171-1.172a1.657 1.657 0 0 1 2.344 0l1.171 1.172z"
    />
  </svg>
);
export default SvgWifi;
