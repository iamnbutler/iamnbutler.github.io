import { ReactNode } from "react"

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="w-full lg:max-w-4xl">
      <article>{children}</article>
    </main>
  )
}
