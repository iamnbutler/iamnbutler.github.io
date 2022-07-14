import { Placement } from "@floating-ui/react-dom"

interface WithTooltip {
  tooltip: string
  tooltipPosition?: Placement
}

interface Button extends WithTooltip {
  label: string
  icon: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: Boolean
}

interface Note {
  label: string
  uuid: string
  status: "draft" | "published" | "archived"
  slug: string
  date_created: Date
  last_updated?: Date
  description: string
  body: string
}

interface Folder {
  label: string
  icon: React.ReactNode
  count: number
}
