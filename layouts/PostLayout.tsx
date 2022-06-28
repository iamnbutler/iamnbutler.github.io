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
      <article className="prose px-4 mr-4">
        <h1 className="leading-normal">{post.title}</h1>
        {children}
      </article>
    </Layout>
  )
}
