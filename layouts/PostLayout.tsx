import { CommentIcon, HeartIcon, LinkIcon, PencilIcon } from "assets/Icons"
import Layout from "components/Layout"
import PostList from "components/PostList"
import { Post } from "contentlayer/generated"
import { ReactNode } from "react"
import { data } from "assets/data"
import ToolButton, { Tool } from "components/ToolButton"

interface PostProps {
  post: Post
  children: ReactNode
}

export default function PostLayout({ post, children }: PostProps) {
  let copyLinkTool: Tool = {
    icon: <LinkIcon />,
    href: `${data.site_url}/post/${post.slug}`,
    tooltip: "Copy link to clipboard",
  }

  let editTool: Tool = {
    icon: <PencilIcon />,
    href: post.edit_url,
    tooltip: "Edit on Github",
  }

  return (
    <Layout secondaryNav={<PostList />}>
      <header className="sticky top-0  bg-base00/70 backdrop-blur z-30 h-12 flex justify-between items-center py-8 z-20 p-1">
        <menu className="flex flex-row space-x-2 h-8">
          <li>
            <ToolButton
              icon={<HeartIcon />}
              tooltip={"Comming soon: Like post"}
              state={2}
            />
          </li>
          <li>
            <ToolButton
              icon={<CommentIcon />}
              tooltip={"Comming soon: Add a comment or view all comments"}
              state={2}
            />
          </li>
        </menu>
        <menu className="flex flex-row space-x-2 h-8">
          {/* 
            Link to raw markdown in data repository for directly editing, or adding issues.
            TODO: Later this could become an option picker with edit, create issue 
            */}
          <li key={editTool.tooltip}>
            <ToolButton
              type="link"
              label="Edit"
              href={editTool.href}
              icon={editTool.icon}
              tooltip={editTool.tooltip}
            />
          </li>

          {/* Copy post link to clipboard for sharing, etc. */}
          <li>
            <ToolButton
              label="Copy"
              href={copyLinkTool.href}
              icon={copyLinkTool.icon}
              tooltip={copyLinkTool.tooltip}
            />
          </li>
        </menu>
      </header>
      <article className="prose px-4 mr-4 w-full lg:max-w-4xl mx-auto">
        <h1 className="leading-normal">{post.title}</h1>
        {children}
      </article>
    </Layout>
  )
}
