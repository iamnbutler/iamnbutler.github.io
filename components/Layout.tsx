import Head from "next/head"
import Header from "./Header"
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
          <div className="flex w-1/3 lg:w-5/12">
            <div className="md:hidden xl:flex xl:w-1/3 h-full relative space-y-2 overflow-y-scroll overflow-x-hidden styled-scrollbars pr-1">
              <Navigation />
            </div>
            <div className="h-full relative space-y-2 overflow-y-scroll overflow-x-hidden styled-scrollbars pr-1">
              <Header />
              {secondaryNav}
            </div>
          </div>
          <div className="w-2/3 lg:w-7/12 px-2 mx-auto relative h-screen overflow-y-scroll styled-scrollbars">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
