import IconButton from "./IconButton"
import List from "../assets/Chunk/List.svg"
import Search from "../assets/Chunk/Search.svg"

function showListView() {
  console.log("Show list view")
}

function search() {
  console.log("Search something")
}

export default function Header() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-base00/70 backdrop-blur z-30 p-1">
      <menu className="flex w-full space-x-1 justify-between">
        <div className="relative">
          <IconButton
            label={"List"}
            icon={<List />}
            onClick={showListView}
            tooltip={"View notes as list"}
          />
        </div>
        <div className="relative">
          <IconButton
            label={"Search"}
            icon={<Search />}
            onClick={search}
            tooltip={"Search anything"}
          />
        </div>
      </menu>
    </nav>
  )
}
