import { ReactNode } from "react"

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <article>
      <main>{children}</main>
    </article>
  )
}
