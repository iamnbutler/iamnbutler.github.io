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
        <div className="relative flex flex-col">
          <header>{nav}</header>
          <section className="flex max-w-7xl mx-auto space-x-4">
            {secondaryNav && secondaryNav}
            {children}
          </section>
        </div>
      </div>
    </>
  )
}
