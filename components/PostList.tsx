import { allPosts } from "contentlayer/generated"
import Link from "next/link"

interface PostListProps {
}

export default function PostList({ }: PostListProps) {
  return (
    <div className="flex flex-col">
      {allPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.uuid}>
          <a className="flex flex-col hover:bg-base0B/20 border border-transparent hover:border-base0B px-4 py-2">
            <h3>{post.title}</h3>
            <div className="flex flex-col text-xs">
              {post.uuid}
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}