import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface INavItem {
    href: string;
    label: string;
    description: string;
    icon: string;
}

const navItems: INavItem[] = [
    {
        href: "/posts",
        label: "Posts & Tags",
        description: "Top of mind, updates & side projects",
        icon: "✏️",
    },
    {
        href: "/work",
        label: "Selected Work",
        description: "I do real work, sometimes...",
        icon: "🎒",
    },
    {
        href: "/tips",
        label: "Tips & Guides",
        description: "Hardware, dev, design & more",
        icon: "🍎",
    },
    {
        href: "/lists",
        label: "Lists",
        description: "Resources, games, gear, etc.",
        icon: "📒",
    },
    {
        href: "/about",
        label: "About Me",
        description: "Does anyone read these?",
        icon: "🌱",
    },
];

const NavItem = ({ icon, href, label, description }: INavItem) => (
    <li key={href}>
        <Link href={href} className="flex text-xl">
            <span className="mr-2">{icon}</span>
            <div className="flex flex-col">
                <span className="font-bold">{label}</span>
                <span className="block text-sm">{description}</span>
            </div>
        </Link>
    </li>
);

const GridItem = ({ children }: PropsWithChildren) => (
    <section className="p-5 bg-white min-h-[760px]">{children}</section>
);

export default function Home() {
    return (
        <div
            className={clsx(
                "max-w-[1500px]",
                "gap-px bg-black border border-black",
                "sm:flex sm:flex-col md:grid md:grid-cols-4 md:mx-auto lg:grid-cols-2 xl:grid-rows-auto 2xl:grid-cols-4"
            )}
        >
            <GridItem>
                <header>
                    <Link href="/" className="flex items-center mb-6 text-3xl font-bold">
                        <span>nate.⚰️</span>
                    </Link>
                    <nav aria-label="Primary">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <NavItem key={item.href} {...item} />
                            ))}
                        </ul>
                    </nav>
                </header>
            </GridItem>
            <GridItem>Column 2</GridItem>
            <GridItem>Column 3</GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
        </div>
    );
}
