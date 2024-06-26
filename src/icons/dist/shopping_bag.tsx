import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2a1.44 1.44 0 0 0-1.412 1.157L6.22 5H4.18l.447-2.235a3.44 3.44 0 0 1 6.746 0L11.82 5H9.78l-.368-1.843A1.44 1.44 0 0 0 8 2M15 15H1v-2l1-6h12l1 6z"
    />
  </svg>
);
export default SvgShoppingBag;
