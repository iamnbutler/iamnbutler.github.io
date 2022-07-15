import IconButton from "./IconButton"
import List from "../assets/Chunk/List.svg"

function showListView() {
  console.log("Show list view")
}

export default function Header() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-base00/70 backdrop-blur z-30 p-1">
      <menu className="flex space-x-1">
        <IconButton
          label={"List"}
          icon={<List />}
          onClick={showListView}
          tooltip={"View notes as list"}
        />
      </menu>
    </nav>
  )
}
