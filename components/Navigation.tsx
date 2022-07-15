import Link from "next/link"
import {
  CodepenIcon,
  TwitterIcon,
  GithubIcon,
} from "assets/Icons"
import Image from "../assets/Chunk/Image.svg"
import Music from "../assets/Chunk/Music.svg"
import Folder from "../assets/Chunk/Folder.svg"
import Pen from "../assets/Chunk/Pen.svg"
import Code from "../assets/Chunk/Code.svg"
import Planet from "../assets/Chunk/Planet.svg"
import ToolButton from "./ToolButton"
import { navLinkStyle } from "./PostList"

const folders = [
  {
    name: "All Notes",
    icon: <Folder />,
  },
  {
    name: "Writing",
    icon: <Pen />,
  },
  {
    name: "Design",
    icon: <Image />,
  },
  {
    name: "Code",
    icon: <Code />,
  },
  {
    name: "Music",
    icon: <Music />,
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

export default function Navigation() {
  return (
    <nav className="h-full w-full flex flex-col px-2">
      <header className="flex sticky top-0 bg-base00/70 backdrop-blur z-30 p-1">
        <Link href={"/"}>
          <a className="flex space-x-2 items-center whitespace-nowrap px-2 h-9 text-base0B hover:text-base0C">
            <Planet />
            <span className="font-bold">Nate Butler</span>
          </a>
        </Link>
      </header>

      <section className="flex-grow my-4">
        <menu>
          {folders.map((folder) => (
            <li key={folder.name}>
              <button
                className={`
                ${navLinkStyle.inactive}
                ${navLinkStyle.common}
                flex space-x-2 m-1 items-center w-full
                `}
              >
                <span>{folder.icon}</span>
                <span>{folder.name}</span>
              </button>
            </li>
          ))}
        </menu>
      </section>

      <footer className="p-1">
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
      </footer>
    </nav>
  )
}
