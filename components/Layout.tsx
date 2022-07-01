import Head from "next/head"
import Header from "./Header"

interface LayoutProps {
  title?: string
  nav: React.ReactNode
  secondaryNav?: React.ReactNode
  children: React.ReactNode
}

export default function Layout({
  title,
  nav,
  secondaryNav,
  children,
}: LayoutProps) {
  if (!title) title = "Nate Butler"

  return (
    <>
      <div className="relative flex flex-col h-screen overflow-hidden">
        <Head>
          <title>{title}</title>
          <meta name="description" content={title} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="relative flex flex-grow overflow-hidden">
          {secondaryNav && (
            <div className="border-r border-base02/50 h-full relative">
              {secondaryNav}
            </div>
          )}
          <div className="w-full px-2 mx-auto relative h-screen overflow-y-scroll styled-scrollbars">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
