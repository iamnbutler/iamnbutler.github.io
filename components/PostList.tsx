import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { format, parseISO } from "date-fns"
import { useRouter } from "next/router"

const navLinkStyle = {
  active: `text-base0D bg-base0D/10 hover:bg-base0D/20 border-base0D/40`,
  inactive: `hover:bg-base0D/10 hover:border-base0D/20 hover:text-base0D text-base0D/70`,
  common: `flex rounded-lg border border-transparent hover:shadow-xl transition-all text-base flex font-bold px-2 py-1.5 shadow-base0D/10 hover:shadow-base0D/10`,
}

let posts = allPosts.reverse()

interface PostListProps { }

export default function PostList({ }: PostListProps) {
  let currentPath = useRouter().asPath

  return (
    <div className="flex flex-col relative">
      <div className="">
        {posts.map((post) => (
          <Link href={`/post/${post.slug}`} key={post.uuid}>
            <a
              className={`
            ${currentPath === `/post/${post.slug}`
                  ? navLinkStyle.active
                  : navLinkStyle.inactive
                }
            ${navLinkStyle.common}
            flex-col space-y-1 m-2
            `}
            >
              <div className="flex justify-between">
                <h3>{post.title}</h3>
                <time
                  dateTime={post.date_created}
                  className="inline-flex text-sm text-base04"
                >
                  {format(parseISO(post.date_created), "yyyy.MM.dd")}
                </time>
              </div>
              <div className="flex space-x-2 text-xs truncate opacity-60">
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
