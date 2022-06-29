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
        <div className="relative flex">
          <header className="border-r border-base02/50">{nav}</header>
          {secondaryNav && (
            <div className="border-r border-base02/50">{secondaryNav}</div>
          )}
          <div className="w-full lg:max-w-4xl px-8 mx-auto">{children}</div>
        </div>
      </div>
    </>
  )
}
