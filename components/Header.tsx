import { ListIcon } from "assets/Icons"
import ToolButton from "./ToolButton"
import IconButton from "./IconButton"

const tools = [
  {
    name: "List",
    href: "https://github.com/iamnbutler/",
    icon: <ListIcon />,
    tooltip: "List View",
  },
]

function showListView() {
  console.log('Show list view')
}

export default function Header() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-base00/70 backdrop-blur z-30 p-1">
      <menu className="flex space-x-1">
        <IconButton
          label={"List"}
          icon={"SVG"} // TODO: Get this rendering from an SVG
          onClick={showListView}
          tooltip={"View notes as list"}
        />

        {tools.map((tool) => (
          <li key={tool.tooltip}>
            <ToolButton
              type="link"
              href={tool.href}
              icon={tool.icon}
              tooltip={tool.tooltip}
            />
          </li>
        ))}
      </menu>
    </nav>
  )
}
