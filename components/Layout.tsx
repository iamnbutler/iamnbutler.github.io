import Head from "next/head"
import Header from "./PostListHeader"
import Navigation from "./Navigation"

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
          <div className="flex w-1/3 border-r border-base01">
            <div className="md:hidden xl:flex xl:w-1/3 h-full relative space-y-2 overflow-y-scroll overflow-x-hidden styled-scrollbars border-r border-base01">
              <Navigation />
            </div>
            <div className="flex flex-col flex-grow relative overflow-y-scroll overflow-x-hidden styled-scrollbars">
              <Header />
              {secondaryNav}
            </div>
          </div>
          <div className="w-2/3 relative h-screen overflow-y-scroll styled-scrollbars">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
