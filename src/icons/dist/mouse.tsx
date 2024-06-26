import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.868 4H7V0H3.5zM2.553 6l-.48 3.033c-.048.31-.073.627-.073.942C2 13.289 4.686 16 8 16s6-2.711 6-6.025q0-.474-.074-.942L13.447 6zM13.132 4 12.5 0H9v4z"
    />
  </svg>
);
export default SvgMouse;
