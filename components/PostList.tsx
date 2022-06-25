import { allPosts } from "contentlayer/generated"
import Link from "next/link"

interface PostListProps {
}

export default function PostList({ }: PostListProps) {
  return (
    <div className="flex flex-col space-y-2 prose">
      {allPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.uuid}>
          <a>{post.title}</a>
        </Link>
      ))}
    </div>
  )
}