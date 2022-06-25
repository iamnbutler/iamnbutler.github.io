import { ReactNode } from "react"

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <article>
      <header className="h-8 p-2">header</header>
      <main>{children}</main>
    </article>
  )
}
