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

const nav = [
  {
    name: "Nate Butler",
    src: "index",
    icon: <AlienIcon />,
  },
  {
    name: "Timline",
    src: "timeline",
    icon: <TimelineIcon />,
  },
  {
    name: "Writing",
    slug: "writing",
    icon: <PencilIcon />,
  },
  {
    name: "Lists",
    slug: "list",
    icon: <ListIcon />,
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

export default function Navigation() {
  return (
    <nav className="flex flex-col md:w-32 lg:w-48 flex-shrink-0 p-4 justify-between h-screen">
      <header className="flex flex-col space-y-4">
        <menu className="flex flex-col space-y-2">
          {nav.map((item) => (
            <NavLinkItem link={item} key={item.slug} />
          ))}
        </menu>
      </header>

      <menu className="flex flex-col space-y-2">
        <h2>Projects</h2>
        {projects.map((item) => (
          <NavLinkItem link={item} key={item.url} />
        ))}
      </menu>

      <menu className="flex flex-col space-y-2">
        <h2>Social</h2>
        {social.map((item) => (
          <NavLinkItem link={item} key={item.url} />
        ))}
      </menu>
    </nav>
  )
}
