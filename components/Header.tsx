import Link from "next/link"
import {
  CodepenIcon,
  TwitterIcon,
  GithubIcon,
  AlienIcon,
  PenNibIcon,
} from "assets/Icons"
import ToolButton from "./ToolButton"

const nav = [
  {
    label: "Posts",
    href: "posts",
    icon: <PenNibIcon />,
    tooltip: "See all posts",
  },
]

const social = [
  {
    name: "GitHub",
    href: "https://github.com/iamnbutler/",
    icon: <GithubIcon />,
    tooltip: "GitHub ↗️",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/iamnbutler",
    icon: <TwitterIcon />,
    tooltip: "Twitter ↗️",
  },
  {
    name: "Codepen",
    href: "https://codepen.io/iamnbutler",
    icon: <CodepenIcon />,
    tooltip: "Codepen ↗️",
  },
]

export default function Header() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-base00/70 backdrop-blur z-30 p-1">
      <header className="flex">
        <Link href={"/"}>
          <a className="flex space-x-2 items-center px-4 h-9 text-base0B hover:text-base0C">
            <AlienIcon />
            <span className="font-bold">Nate Butler</span>
          </a>
        </Link>

        <menu className="flex items-center">
          {nav.map((item) => (
            <li key={item.tooltip}>
              <ToolButton
                type="link"
                href={item.href}
                icon={item.icon}
                tooltip={item.tooltip}
              />
            </li>
          ))}
        </menu>
      </header>

      <menu className="flex space-x-1">
        {social.map((item) => (
          <li key={item.tooltip}>
            <ToolButton
              type="link"
              href={item.href}
              icon={item.icon}
              tooltip={item.tooltip}
            />
          </li>
        ))}
      </menu>
    </nav>
  )
}
