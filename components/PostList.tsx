import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { format, parseISO } from "date-fns"
import { useRouter } from "next/router"
import { navLinkStyle } from "./Styles"
import { CodeIcon, PenNibIcon, RulerIcon, MusicIcon } from "assets/Icons"
import { ButtonItem } from "./Button"
import Button from "./Button"

let posts = allPosts.reverse()

let filters: ButtonItem[] = [
  {
    name: "Music",
    icon: <MusicIcon />,
    tooltip: "Show all music related posts",
  },
  {
    name: "Writing",
    icon: <PenNibIcon />,
    tooltip: "Show all writing",
  },
  {
    name: "Code",
    icon: <CodeIcon />,
    tooltip: "Show all code related posts",
  },
  {
    name: "Design",
    icon: <RulerIcon />,
    tooltip: "Show all design related posts",
  }
]

interface PostListProps { }

export default function PostList({ }: PostListProps) {
  let currentPath = useRouter().asPath

  return (
    <div className="flex flex-col md:w-72 lg:w-96 flex-shrink-0 px-4">
      <header className="h-12 flex justify-between items-center py-4">
        <h2 className="font-bold ml-4">Posts</h2>
        <menu className="flex space-x-1 h-8">
          {filters.map((filter) => (
            <Button button={filter} key={filter.name} />
          ))}
        </menu>
      </header>
      {posts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.uuid}>
          <a
            className={`
            ${currentPath === `/post/${post.slug}`
                ? navLinkStyle.active
                : navLinkStyle.inactive
              }
            ${navLinkStyle.common}
            flex flex-col space-y-1 mb-2
            `}
          >
            <h3>{post.title}</h3>
            <div className="flex space-x-2 text-xs truncate opacity-60">
              <time
                dateTime={post.date_created}
                className="inline-flex text-xs text-base09"
              >
                {format(parseISO(post.date_created), "yyyy.MM.dd")}
              </time>
              <span className="inline-flex text-base03">&frasl;</span>
              <span className="inline-flex text-base03 uppercase">
                {post.uuid}
              </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
