import Link from "next/link"
import { navLinkStyle } from "./Styles"
import { useRouter } from "next/router"
import {
  CodepenIcon,
  TwitterIcon,
  GithubIcon,
  ReadmeIcon,
  TimelineIcon,
  PencilIcon,
  ListIcon,
  AlienIcon,
} from "assets/Icons"
import { ReactNode } from "react"
import WithTooltip from "./WithTooltip"

const nav = [
  {
    name: "Timline",
    href: "timeline",
    icon: <TimelineIcon />,
    tooltip: "Go to Timeline"
  },
  {
    name: "Writing",
    href: "writing",
    icon: <PencilIcon />,
    tooltip: "Go to Writing"
  },
  {
    name: "Lists",
    href: "list",
    icon: <ListIcon />,
    tooltip: "Go to Lists"
  },
]

const projects = [
  {
    name: "Design Docs",
    slug: "design-docs",
    url: "https://designdocs.co/",
  },
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

interface NavLink {
  name: string
  slug?: string
  url?: string
  icon?: ReactNode
}

interface NavLinkItemProps {
  link: NavLink
}

/**
 * Build nav link items.
 * If a `url` isn't passed, use `slug` to create an link
 **/
function NavLinkItem({ link }: NavLinkItemProps) {
  let href = ""
  link.url ? (href = link.url) : (href = `/${link.slug}`)

  let current = false
  let currentPath = useRouter().asPath

  if (currentPath.includes(href)) {
    current = true
  }

  return (
    <Link href={link.url ? link.url : `/${link.slug}`}>
      <a
        className={`
        ${current ? navLinkStyle.active : navLinkStyle.inactive}
        ${navLinkStyle.common}
        space-x-4 items-center
      `}
      >
        {link.icon && <span>{link.icon}</span>}
        <span>{link.name}</span>
      </a>
    </Link>
  )
}

export default function Header() {
  return (
    <nav className="flex flex-row border-b border-base02/50 justify-between">
      <header className="flex">
        <a href="/" className="flex space-x-2 items-center px-4 h-9 bg-base0B hover:bg-base0C text-base00">
          <AlienIcon />
          <span className="font-bold">Nate Butler</span>
        </a>

        <menu className="flex items-center">
          {nav.map((item) => (
            <li key={item.name} className="h-full">
              <WithTooltip tooltip={item.tooltip}>
                <Link href={`/${item.href}`}>
                  <a className="bg-base0B text-base00 flex h-full items-center text-base00  px-3 hover:bg-base0C">
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
          <li key={item.name}><a href={item.url} className="flex w-9 h-9 items-center justify-center">{item.icon}</a></li>
        ))}
      </menu>
    </nav>
  )
}
