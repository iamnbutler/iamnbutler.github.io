import { LinkIcon, PencilIcon } from "assets/Icons"
import Layout from "components/Layout"
import PostList from "components/PostList"
import { Post, Tag } from "contentlayer/generated"
import { ReactNode } from "react"
import { data } from "assets/data"
import ToolButton, { Tool } from "components/ToolButton"
import { format, formatDistanceToNow, parseISO } from "date-fns"

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
    tooltip: "Propose a change to this page on GitHub.",
  }

  let tags = (
    post.tags.map((tag, i) => (
      <div className="" key={tag._id}>
        {tag.title}
        {
          i != post.tags.length - 1 &&
          (<span className="mr-1">,</span>)
        }
      </div>
    ))
  )

  return (
    <Layout secondaryNav={<PostList />}>
      <header className="sticky top-0 bg-base00/70 backdrop-blur z-30 flex justify-between items-center p-2 border-b border-base01">
        <menu className="flex flex-row space-x-2 h-8">
          {/* Placeholder for heart/comment */}
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
      <article className="prose lg:max-w-3xl mx-auto my-16">
        <h1 className="leading-none">{post.title}</h1>
        <div className="text-base05 text-base font-mono space-x-2 mt-4">
          <time dateTime={post.date_created} className="inline-flex">
            {format(parseISO(post.date_created), "MMMM do, uuuu")} (
            {formatDistanceToNow(parseISO(post.date_created), {
              addSuffix: true,
            })}
            )
          </time>
          <span className="inline-flex text-base04">🞨</span>
          <div className="inline-flex">
            {tags}
          </div>
        </div>
        {children}
      </article>
    </Layout>
  )
}
