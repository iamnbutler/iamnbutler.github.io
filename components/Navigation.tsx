import Link from "next/link"
import { navLinkStyle } from "./Styles"
import { useRouter } from "next/router"

const nav = [
  {
    name: "Posts",
    slug: "post",
  },
  {
    name: "Lists",
    slug: "list",
  },
]

const projects = [
  {
    name: "Design Docs",
    slug: "design-docs",
    url: "https://designdocs.co/"
  }
]

const social = [
  {
    name: "Github",
    url: "https://github.com/iamnbutler/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/iamnbutler",
  },
  {
    name: "Read.cv",
    url: "https://read.cv/natebutler",
  },
]

interface NavLink {
  name: string
  slug?: string
  url?: string
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
  link.url ? href = link.url : href = `/${link.slug}`

  let current = false
  let currentPath = useRouter().asPath

  if (currentPath.includes(href)) {
    current = true
  }

  return (
    <Link href={link.url ? link.url : `/${link.slug}`} key={link.slug}>
      <a className={`
        ${current ? navLinkStyle.active : navLinkStyle.inactive}
        ${navLinkStyle.common}
      `}>
        {link.name}
      </a>
    </Link>
  )
}

export default function Navigation() {
  return (
    <div className="flex space-x-4 flex-shrink-0 py-4 px-8 justify-between items-center">
      <header className="font-bold">
        <Link href="/">Nate Butler</Link>
      </header>
      <nav className="">
        <ul className="flex space-x-1">
          {nav.map((item) => (
            <NavLinkItem link={item} />
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="flex space-x-1">
          {social.map((item) => (
            <NavLinkItem link={item} />
          ))}
        </ul>
      </nav>
    </div>
  )
}
