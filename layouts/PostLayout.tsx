import {
  CommentIcon,
  CrossIcon,
  GlassesIcon,
  HeartIcon,
  LinkIcon,
  MusicIcon,
  PencilIcon,
} from "assets/Icons"
import Button, { ButtonItem } from "components/Button"
import Layout from "components/Layout"
import Navigation from "components/Navigation"
import PostList from "components/PostList"
import { Post } from "contentlayer/generated"
import { ReactNode } from "react"

interface PostProps {
  post: Post
  children: ReactNode
}

let feedback: ButtonItem[] = [
  {
    name: "Heart",
    icon: <HeartIcon />,
    tooltip: "Comming soon: Like post",
    disabled: true,
  },
  {
    name: "Comment",
    icon: <CommentIcon />,
    tooltip: "Comming soon: Add a comment or view all comments",
    disabled: true,
  },
]

let tools: ButtonItem[] = [
  {
    name: "Edit",
    icon: <PencilIcon />,
    tooltip: "Edit on Github",
  },
  {
    name: "Copy Link",
    icon: <LinkIcon />,
    tooltip: "Copy link to clipboard",
  },
]

let controls: ButtonItem[] = [
  {
    name: "Reading mode",
    icon: <GlassesIcon />,
    tooltip: "Comming soon: Open reading mode",
    disabled: true,
  },
  {
    name: "Cross",
    icon: <CrossIcon />,
    tooltip: "Close",
  },
]

export default function PostLayout({ post, children }: PostProps) {
  return (
    <Layout nav={<Navigation />} secondaryNav={<PostList />}>
      <header className="sticky top-0 bg-base00/70 backdrop-blur-md h-12 flex justify-between items-center py-8 z-20 px-4">
        <menu className="flex flex-row space-x-2 h-8">
          {feedback.map((tool) => (
            <Button button={tool} key={tool.name} />
          ))}
        </menu>
        <menu className="flex flex-row space-x-2 h-8">
          {tools.map((tool) => (
            <Button button={tool} key={tool.name} />
          ))}
        </menu>
        <menu className="flex flex-row space-x-2 h-8">
          {controls.map((tool) => (
            <Button button={tool} key={tool.name} />
          ))}
        </menu>
      </header>
      <article className="prose px-4 mr-4 w-full lg:max-w-4xl mx-auto">
        <h1 className="leading-normal">{post.title}</h1>
        {children}
      </article>
    </Layout>
  )
}
