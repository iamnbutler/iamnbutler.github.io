import Head from "next/head"
import Header from "./Header"

interface LayoutProps {
  title?: string
  secondaryNav?: React.ReactNode
  children: React.ReactNode
}

export default function Layout({ title, secondaryNav, children }: LayoutProps) {
  if (!title) title = "Nate Butler"

  return (
    <>
      <div className="relative flex flex-col h-screen overflow-hidden">
        <Head>
          <title>{title}</title>
          <meta name="description" content={title} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative flex flex-grow overflow-hidden">
          <div className="w-5/12 h-full relative space-y-2 overflow-y-scroll styled-scrollbars px-2">
            <Header />
            {secondaryNav}
          </div>
          <div className="w-7/12 px-2 mx-auto relative h-screen overflow-y-scroll styled-scrollbars">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
