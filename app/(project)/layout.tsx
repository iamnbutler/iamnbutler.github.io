import clsx from "clsx";
import NavCard from "../(home)/navCard";
import TableOfContents from "@/components/Contents";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "max-w-[1600px] 2xl:mt-10 mx-auto",
        "gap-px bg-black border border-black",
        "grid grid-cols-5"
      )}
    >
      <div className="flex flex-col">
        <nav className="p-5 bg-white border-b border-black">
          <NavCard />
        </nav>
        <menu className="p-5 bg-white">
          <TableOfContents id="project" />
        </menu>
        <div className="flex flex-grow bg-white" />
      </div>
      <div className="col-span-4 bg-white">{children}</div>
    </div>
  );
}
