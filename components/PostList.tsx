import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { format, parseISO } from "date-fns"

interface PostListProps {}

export default function PostList({}: PostListProps) {
  return (
    <div className="flex flex-col w-96 flex-shrink-0">
      <header className="h-8 p-2">header</header>
      {allPosts.reverse().map((post) => (
        <Link href={`/post/${post.slug}`} key={post.uuid}>
          <a className="data-list-item flex flex-col hover:bg-base0B/20 border border-transparent hover:border-base0B px-4 py-2 space-y-2">
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
