import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { format, formatDistanceToNow, parseISO } from "date-fns"
import { useRouter } from "next/router"

export const navLinkStyle = {
  active: `text-base0D bg-base0D/10 hover:bg-base0D/20 border-base0D/40`,
  inactive: `hover:bg-base0D/10 hover:border-base0D/20 hover:text-base0D text-base06`,
  common: `flex rounded-lg border border-transparent hover:shadow-xl transition-all text-base flex font-bold px-2 py-1.5 shadow-base0D/10 hover:shadow-base0D/10`,
}

/**
 * Sort notes by most to least recent.
 */
function sortByDateCreated(a, b) {
  if (a.date_created > b.date_created) {
    return -1
  }
  if (a.date_created < b.date_created) {
    return 1
  }
  return 0
}

let posts = allPosts.sort(sortByDateCreated)

interface PostListProps { }

export default function PostList({ }: PostListProps) {
  let currentPath = useRouter().asPath

  return (
    <div className="flex flex-col px-2 relative">
      {posts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.uuid}>
          <a
            className={`
            ${currentPath === `/post/${post.slug}`
                ? navLinkStyle.active
                : navLinkStyle.inactive
              }
            ${navLinkStyle.common}
            flex-col space-y-1 my-1
            `}
          >
            <h3>{post.title}</h3>
            <div className="flex space-x-2 truncate text-base04 capitalize font-mono text-xs">
              <time dateTime={post.date_created} className="inline-flex">
                {formatDistanceToNow(parseISO(post.date_created), {
                  addSuffix: true,
                })}
              </time>
              <span className="inline-flex">🞨</span>
              <div className="inline-flex lowercase">
                {
                  post.tags.map((tag, i) => (
                    <div className="" key={tag._id}>
                      {tag.title}
                      {
                        i != post.tags.length - 1 &&
                        (<span className="mr-1">,</span>)
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
