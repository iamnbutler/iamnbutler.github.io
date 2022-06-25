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

        <div className="relative flex mx-auto">
          <section className="w-full lg:w-1/2 pr-8">
            <PostList />

          </section>

          <section className="hidden lg:block w-1/2">
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
                  Welcome to my little corner of the internet
                </h1>
              </div>
            </main>
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
