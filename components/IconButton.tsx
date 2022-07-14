import { Button } from "types/index"
import WithTooltip from "./WithTooltip"

const classes = `
  text-base06 hover:bg-base0D/10 hover:border-base0D/10 hover:text-base0D hover:shadow-lg
  flex h-9 items-center px-2 rounded-lg border border-transparent space-x-2
  `

export default function IconButton({ label, icon, onClick, tooltip, tooltipPosition }: Button) {

  const button = (
    <button
      className={classes}
      aria-label={label}
      onClick={onClick}
    >
      {icon}
    </button>
  )

  return (
    <WithTooltip tooltip={tooltip} placement={tooltipPosition}>
      {button}
    </WithTooltip>
  )
}