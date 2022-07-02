import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { format, parseISO } from "date-fns"
import { useRouter } from "next/router"
import { navLinkStyle } from "./Styles"
import Button from "./Button"

let posts = allPosts.reverse()

interface PostListProps { }

export default function PostList({ }: PostListProps) {
  let currentPath = useRouter().asPath

  return (
    <div className="flex flex-col w-full flex-shrink-0 relative h-screen overflow-y-scroll styled-scrollbars">
      <div className="p-4">
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
    </div>
  )
}
