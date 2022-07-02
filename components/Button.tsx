import { ReactNode, useState } from "react"
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
} from "@floating-ui/react-dom"

const buttonStyle = {
  active: `text-base0A bg-base0A/10 hover:bg-base0A/20 border-base0A/40 shadow-inner hover:shadow-inner`,
  inactive: `text-base05/40 hover:bg-base0A/10 hover:border-base0A/20 hover:text-base0A`,
  common: `flex px-2 h-full items-center flex rounded-lg border border-transparent hover:shadow-xl transition-all p-2`,
}

export interface ButtonItem {
  name: string
  icon: ReactNode
  tooltip: String
  disabled?: boolean
}

interface ButtonGroupProps {
  button: ButtonItem
  placement?: Placement
}

export default function Button({
  button,
  placement = "bottom",
}: ButtonGroupProps) {
  const [active, setActive] = useState(false)
  const toggleActive = () => setActive((active) => !active)

  // Position floating-ui tooltip
  const { x, y, reference, floating } = useFloating({
    placement,
    middleware: [offset(6), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  })

  return (
    <li key={button.name} className={`relative`}>
      <button
        className={`
              ${active ? buttonStyle.active : buttonStyle.inactive}
              ${buttonStyle.common}
              ${button.disabled && `opacity-25`}
              peer relative 
            `}
        onClick={toggleActive}
        ref={reference}
      >
        {button.icon}
      </button>
      <div
        className="bg-base00 border border-base01 text-base06 text-sm px-2 py-0.5 rounded-md shadow-lg backdrop-blur-sm font-mono hidden whitespace-nowrap absolute top-0 left-0 peer-hover:flex"
        ref={floating}
        style={{
          position: "absolute",
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        {button.tooltip}
      </div>
    </li>
  )
}
