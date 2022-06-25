import PostList from "components/PostList"
import Head from "next/head"
import Link from "next/link"
import { ctaStyle } from "../styles/styles"

interface NavLink {
  name: string
  href: string
}

const mainNav: NavLink[] = [
  {
    name: "GPUI𝛼",
    href: "/",
  },
  {
    name: "docs",
    href: "https://github.com/zed-industries/gpui-docs",
  },
]

const socialNav: NavLink[] = [
  {
    name: "github",
    href: "https://github.com/zed-industries/gpui.rs",
  },
  {
    name: "twitter",
    href: "https://twitter.com/zeddotdev",
  },
]

export default function Home() {

  return (
    <>
      <div className="relative z-10">
        <Head>
          <title>GPUI</title>
          <meta
            name="description"
            content="GPUI - An Open Source Rust GUI renderer"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="relative flex py-16 mx-auto max-w-7xl px-8">
          <section className="w-full lg:w-3/5 pr-8">
            {/* Main Column */}
            <nav className="flex justify-between">
              <div className="relative flex space-x-4">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </div>
            </nav>

            <main>
              <div className="prose">
                <h1 className={`leading-normal relative`}>
                  headline
                </h1>

                <p className="text-2xl leading-normal">
                  Created for <a href="https://zed.dev/">Zed</a>, by the team
                  behind <a href="https://atom.io/">Atom</a>,{" "}
                  <a href="https://github.com/tree-sitter/tree-sitter">
                    Treesitter
                  </a>
                  , and more.
                </p>
              </div>
              <a href="/docs" className={`${ctaStyle} mt-8`}>
                Get Started &rarr;
              </a>
            </main>
            <div className="my-16 prose">
              <h2></h2>
            </div>
            <footer>
              <p className="text-base05">
                An open source project by Zed Industries.
              </p>
            </footer>
          </section>

          <section className="hidden lg:block w-2/5 pl-8">
            <PostList />
          </section>
        </div>
      </div>
      <div
        id="pageBG"
        className="top-0 left-0 fixed w-screen h-screen z-0"
      ></div>
    </>
  )
}
