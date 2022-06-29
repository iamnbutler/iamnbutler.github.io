import { allPosts, Post } from "../../.contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import PostLayout from "layouts/PostLayout"
import Image, { ImageProps } from "next/image"

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post.slug === params.slug)

  return { props: { post } }
}

const components = {
  img: (props: ImageProps) => (
    <Image {...props} layout="responsive" loading="lazy" />
  ),
}

interface PostProps {
  post: Post
}

export default function PostPage({ post }: PostProps) {
  let MDXContent = useMDXComponent(post.body.code)

  return (
    <PostLayout post={post}>
      <MDXContent components={{ components }} />
    </PostLayout>
  )
}
