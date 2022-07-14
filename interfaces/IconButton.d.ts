export default interface IconButton {
  name: string
  icon: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: Boolean
  tooltip: string
}
