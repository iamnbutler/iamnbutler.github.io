import Layout from "components/Layout"
import Navigation from "components/Navigation"
import PostList from "components/PostList"
import { Post } from "contentlayer/generated"
import { ReactNode } from "react"

interface PostProps {
  post: Post
  children: ReactNode
}

export default function PostLayout({ post, children }: PostProps) {
  return (
    <Layout nav={<Navigation />} secondaryNav={<PostList />}>
      <article>
        <main className="prose max-w-5xl mx-auto my-16">
          <div>
            <h1 className={`leading-normal`}>{post.title}</h1>
            {children}
          </div>
        </main>
      </article>
    </Layout>
  )
}
