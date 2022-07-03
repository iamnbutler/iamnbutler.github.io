import { ReactNode } from "react";
import {
  Placement
} from "@floating-ui/react-dom"
import WithTooltip from "./WithTooltip"
import Link from "next/link";

export interface Tool {
  type: "button" | "link",
  href?: string,
  onClick?: React.MouseEvent<HTMLButtonElement>,
  icon: ReactNode
  tooltip: string,
  tooltipPosition?: Placement
}

export default function ToolButton({ type = "button", href, icon, tooltip, tooltipPosition = "bottom" }: Tool) {
  const slot: ReactNode = (
    <div className="">
      {icon}
    </div>
  )

  const link = (
    <Link href={href}>
      <a className="">
        {slot}
      </a>
    </Link>
  )

  const button = (
    <button>{slot}</button>
  )



  return (
    <WithTooltip tooltip={tooltip} placement={tooltipPosition}>
      {type == "button" ? button : link}
    </WithTooltip>
  )
}