import Head from "next/head"

interface LayoutProps {
  title?: string,
  children: React.ReactNode
}

export default function Layout({ title, children }: LayoutProps) {
  if (!title) title = "Nate Butler"

  return (
    <>
      <div className="relative z-10">
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={title}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative">
          {children}
        </div>
      </div>
      <div
        id="pageBG"
        className="top-0 left-0 fixed w-screen h-screen z-0"
      ></div>
    </>
  )
}