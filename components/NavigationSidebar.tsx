import Link from "next/link"

const nav = [
  {
    name: "Posts",
    slug: "post",
  },
]

const social = [
  {
    name: "Read.cv",
    url: "https://read.cv/natebutler",
  },
  {
    name: "Github",
    url: "https://github.com/iamnbutler/",
  },
]

export default function NavigationSidebar() {
  return (
    <div className="flex flex-col space-y-4">
      <header className="h-8 p-2">
        <Link href="/">Nate Butler</Link>
      </header>
      <nav className="w-80">
        <ul className="flex flex-col space-y-1">
          {nav.map((item) => (
            <Link href={`/${item.slug}`} key={item.slug}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col space-y-1">
          {social.map((item) => (
            <a href={`/${item.url}`} key={item.url}>
              {item.name}
            </a>
          ))}
        </ul>
      </nav>
    </div>
  )
}
