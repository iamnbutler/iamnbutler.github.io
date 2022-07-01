import Head from "next/head"

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
      <div className="relative">
        <Head>
          <title>{title}</title>
          <meta name="description" content={title} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative flex h-screen overflow-hidden">
          <header className="border-r border-base02/50 relative">{nav}</header>
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
