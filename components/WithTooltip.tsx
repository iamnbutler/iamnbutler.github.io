import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
} from "@floating-ui/react-dom"
import { ReactNode } from "react"

export interface WithTooltipProps {
  tooltip: string
  placement?: Placement
  padding?: number
  children: ReactNode
}

export default function WithTooltip({
  tooltip,
  placement = "bottom",
  padding,
  children,
}: WithTooltipProps) {
  const { x, y, reference, floating } = useFloating({
    placement,
    middleware: [offset(6), flip(), shift({ padding: padding ? padding : 8 })],
    whileElementsMounted: autoUpdate,
  })

  return (
    <>
      <div ref={reference} className="h-full peer relative">
        {children}
      </div>
      <div
        className="bg-base00 border border-base01 text-base06 text-sm px-2 py-0.5 rounded-md shadow-lg backdrop-blur-sm font-mono hidden whitespace-nowrap absolute top-0 left-0 peer-hover:flex z-50"
        ref={floating}
        style={{
          position: "absolute",
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        {tooltip}
      </div>
    </>
  )
}
