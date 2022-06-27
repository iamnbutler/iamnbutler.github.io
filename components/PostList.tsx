import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { format, parseISO } from "date-fns"
import { useRouter } from "next/router"
import { navLinkStyle } from "./Styles"

interface PostListProps { }

export default function PostList({ }: PostListProps) {
  let currentPath = useRouter().asPath

  return (
    <div className="flex flex-col w-96 flex-shrink-0 space-y-4">
      {allPosts.reverse().map((post) => (
        <Link href={`/post/${post.slug}`} key={post.uuid}>
          <a className={`
            ${currentPath === `/post/${post.slug}` ? navLinkStyle.active : navLinkStyle.inactive}
            ${navLinkStyle.common}
            flex flex-col space-y-1
            `}
          >
            <time dateTime={post.date_created} className="text-sm">
              {format(parseISO(post.date_created), "LLLL d, yyyy")}
            </time>
            <h3>{post.title}</h3>
            <div className="flex flex-col text-xs">{post.uuid}</div>
          </a>
        </Link>
      ))}
    </div>
  )
}
