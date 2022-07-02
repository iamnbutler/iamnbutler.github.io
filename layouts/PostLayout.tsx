import {
  CommentIcon,
  HeartIcon,
  LinkIcon,
  PencilIcon,
} from "assets/Icons"
import Button, { ButtonItem } from "components/Button"
import Layout from "components/Layout"
import PostList from "components/PostList"
import { Post } from "contentlayer/generated"
import { ReactNode } from "react"
import { data } from "assets/data"
import WithTooltip from "components/WithTooltip"
import { buttonStyle } from "components/Styles"

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

interface Tool {
  name: string
  icon: ReactNode,
  tooltip: string,
  link?: string,
  onClick?: React.MouseEvent<HTMLButtonElement>
  disabled?: boolean
}

export default function PostLayout({ post, children }: PostProps) {

  let copyLinkTool: Tool = {
    name: "Copy Link",
    icon: <LinkIcon />,
    link: `${data.site_url}/post/${post.slug}`,
    tooltip: "Copy link to clipboard",
  }

  let editTool: Tool = {
    name: "Edit",
    icon: <PencilIcon />,
    link: post.edit_url,
    tooltip: "Edit on Github",
  }

  return (
    <Layout secondaryNav={<PostList />}>
      <header className="sticky top-0 bg-base00/70 backdrop-blur-md h-12 flex justify-between items-center py-8 z-20 px-4">
        <menu className="flex flex-row space-x-2 h-8">
          {feedback.map((tool) => (
            <Button button={tool} key={tool.name} />
          ))}
        </menu>
        <menu className="flex flex-row space-x-2 h-8">

          {/* 
            Link to raw markdown in data repository for directly editing, or adding issues.
            TODO: Later this could become an option picker with edit, create issue 
          */}
          <WithTooltip tooltip={editTool.tooltip}>
            <a href={editTool.link} className={`${buttonStyle.inactive} ${buttonStyle.common}`}>
              {editTool.icon}
            </a>
          </WithTooltip>

          {/* Copy post link to clipboard for sharing, etc. */}
          <WithTooltip tooltip={copyLinkTool.tooltip}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(copyLinkTool.link)
              }}
              className={`${buttonStyle.inactive} ${buttonStyle.common}`}
            >
              {copyLinkTool.icon}
            </button>
          </WithTooltip>
        </menu>
      </header>
      <article className="prose px-4 mr-4 w-full lg:max-w-4xl mx-auto">
        <h1 className="leading-normal">{post.title}</h1>
        {children}
      </article>
    </Layout>
  )
}
