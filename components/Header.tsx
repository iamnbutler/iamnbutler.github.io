import Link from "next/link"
import {
  CodepenIcon,
  TwitterIcon,
  GithubIcon,
  ReadmeIcon,
  PencilIcon,
  AlienIcon,
} from "assets/Icons"
import WithTooltip from "./WithTooltip"

const nav = [
  {
    name: "Posts",
    href: "posts",
    icon: <PencilIcon />,
    tooltip: "See all posts",
  }
]

const social = [
  {
    name: "Github",
    url: "https://github.com/iamnbutler/",
    icon: <GithubIcon />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/iamnbutler",
    icon: <TwitterIcon />,
  },
  {
    name: "Codepen",
    url: "https://codepen.io/iamnbutler",
    icon: <CodepenIcon />,
  },
  {
    name: "Read.cv",
    url: "https://read.cv/natebutler",
    icon: <ReadmeIcon />,
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
            <li key={item.name} className="h-full">
              <WithTooltip tooltip={item.tooltip}>
                <Link href={`/${item.href}`}>
                  <a className="text-base0B flex h-full items-center px-3 hover:text-base0C">
                    {item.icon}
                  </a>
                </Link>
              </WithTooltip>
            </li>
          ))}
        </menu>
      </header>

      <menu className="flex">
        {social.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className="flex w-9 h-9 items-center justify-center"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </menu>
    </nav>
  )
}
