export default function Header() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-base00/70 backdrop-blur z-30 p-2 border-b border-base01">
      <menu className="flex w-full space-x-1 justify-between items-center">
        <span className="ml-2 font-bold text-base05">Notes</span>
        <div className="relative h-8 w-8">
        </div>
      </menu>
    </nav>
  )
}
