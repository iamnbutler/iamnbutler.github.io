import { ReactNode } from "react"
import { Placement } from "@floating-ui/react-dom"
import WithTooltip from "./WithTooltip"
import Link from "next/link"

export enum State {
  Default,
  Active,
  Disabled,
}

export interface Tool {
  label?: string
  type?: "button" | "link"
  href?: string
  onclick?: React.MouseEventHandler<HTMLButtonElement>
  state?: State
  icon: ReactNode
  tooltip: string
  tooltipPosition?: Placement
}

export default function ToolButton({
  type = "button",
  href,
  onclick,
  state = 0,
  icon,
  label,
  tooltip,
  tooltipPosition = "bottom",
}: Tool) {
  let buttonClasses = ""

  switch (state) {
    case 1:
      // Active
      buttonClasses = "text-base0D"
      break
    case 2:
      // Disabled
      buttonClasses = "text-base03 cursor-not-allowed"
      break
    default:
      // Default
      buttonClasses =
        "text-base06 hover:bg-base0D/10 hover:border-base0D/10 hover:text-base0D hover:shadow-lg"
  }

  const slot: ReactNode = (
    <div
      className={`
        ${buttonClasses}
        flex h-9 items-center px-2 rounded-lg border border-transparent space-x-2`}
    >
      <span>{icon}</span>
      {label && <span className="font-semibold text-base">{label}</span>}
    </div>
  )

  const link = (
    <Link href={href ? href : ""}>
      <a>{slot}</a>
    </Link>
  )

  const button = <button onClick={onclick}>{slot}</button>

  return (
    <WithTooltip tooltip={tooltip} placement={tooltipPosition}>
      {type == "button" ? button : link}
    </WithTooltip>
  )
}
