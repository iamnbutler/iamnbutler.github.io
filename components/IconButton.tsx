import { Button } from "types/index"
import WithTooltip from "./WithTooltip"

const classes = `
  flex items-center w-8 h-8
  p-2 rounded-lg
  text-base05 hover:text-base07
  bg-base05/10 hover:bg-base05/20 
  border border-base05/20 hover:border-base05/40 
  shadow-lg hover:shadow-xl
  `

export default function IconButton({
  label,
  icon,
  onClick,
  tooltip,
  tooltipPosition,
}: Button) {
  const button = (
    <button className={classes} aria-label={label} onClick={onClick}>
      {icon}
    </button>
  )

  return (
    <WithTooltip tooltip={tooltip} placement={tooltipPosition}>
      {button}
    </WithTooltip>
  )
}
