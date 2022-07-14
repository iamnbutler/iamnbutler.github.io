import {
  ListIcon,
} from "assets/Icons"
import ToolButton from "./ToolButton"

const tools = [
  {
    name: "List",
    href: "https://github.com/iamnbutler/",
    icon: <ListIcon />,
    tooltip: "List View",
  },
]

export default function Header() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-base00/70 backdrop-blur z-30 p-1">
      <menu className="flex space-x-1">
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
