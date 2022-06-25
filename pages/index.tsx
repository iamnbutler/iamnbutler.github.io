import Content from "components/Content"
import Layout from "components/Layout"
import NavigationSidebar from "components/NavigationSidebar"
import PostList from "components/PostList"

export default function Home() {
  return (
    <Layout nav={<NavigationSidebar />} secondaryNav={<PostList />}>
      <Content>
        <header className="flex flex-col border border-transparent px-4 py-2 space-y-2 prose">
          <h1>Welcome to my corner of the internet</h1>
          <p>
            I&apos;m Nate, a designer & developer. I like building tools,
            automating things, and contributing to design education.
          </p>
          <p>
            I&apos;m currently focused on building collaborative software tools
            at Zed Industries.
          </p>
        </header>
      </Content>
    </Layout>
  )
}
