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
                "max-w-[1600px] 2xl:my-10 mx-auto",
                "gap-px bg-black border border-black",
                "sm:flex sm:flex-col md:grid md:mx-auto md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
            )}
        >
            <div className="flex flex-col col-span-1">
                <nav className="hidden md:block p-5 bg-white border-b border-black">
                    <NavCard />
                </nav>
                <menu className="hidden md:flex p-5 bg-white">
                    <TableOfContents id="project" />
                </menu>
                <div className="hidden md:flex flex-grow bg-white" />
            </div>
            <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4 bg-white">{children}</div>
        </div>
    );
}
