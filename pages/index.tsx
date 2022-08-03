import Content from "components/Content"
import Layout from "components/Layout"
import PostList from "components/PostList"

export default function Home() {
  return (
    <Layout secondaryNav={<PostList />}>
      <Content>
        <header className="flex flex-col max-w-xl mx-auto my-16 px-4 py-2 prose">
          <h1 className="text-3xl">Still WIP, but getting something out there.</h1>
          <p>Welcome to my very build-in-the-open personal site. <i>Expect everything not to work!</i></p>
          <p>I'm a bit addicted to things being perfect before sharing. I've actually never shipped a personal site because of this.</p>
          <p>This is my attempt to just throw everything out there, don't worry about things being unfinished, and just build everything a bit at a time.</p>

          <h2>Some more normal bio info:</h2>
          <p>
            I&apos;m Nate, a designer & developer. I like building tools,
            automating things, and contributing to design education.
          </p>
          <p>
            I&apos;m currently focused on building collaborative software tools
            at <a href="https://zed.dev">Zed Industries</a>.
          </p>
          <p>Say hi on <a href="https://twitter.com/iamnbutler">Twitter!</a></p>
        </header>
      </Content>
    </Layout>
  )
}
