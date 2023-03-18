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
    <section className="p-5 bg-white min-h-[760px] flex flex-col justify-between">{children}</section>
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
            <GridItem>
                <div className="prose shrink-1">
                    <h2>hey ✌️</h2>
                    <p className="text-lg font-semibold italic">I’m nate butler, a designer & maker enabling people’s creativity and ability share knowledge.</p>
                    <p>I want to help people create the things important to them—To empower them to create something themselves and feel the euphoria it brings. My goal is always to help the people around me level up, in their careers & lives.</p>
                    <p>I post about all types of things here. You will find a mix of work, top of mind, reflections, & process. Enjoy!</p>
                </div>
                <footer className="shrink-0 flex justify-between">
                    <a href="https://twitter.com/iamnbutler" className="underline">more about me?</a>
                    <p>avatar here</p>
                </footer>
            </GridItem>
            <GridItem>
                <div className="prose shrink-1">
                    <h2>work 🎒✌️</h2>
                    <ul>
                        <li>
                            <h3 className="my-0">Design at Zed</h3>
                            <p>Building the world's best code editor - 2021++</p>
                        </li>
                        <li>
                            <h3 className="my-0">Internal Tools at Facebook</h3>
                            <p>Helping product teams build more efficiently – 2020</p>
                        </li>
                        <li>
                            <h3 className="my-0">Avatars at Facebook</h3>
                            <p>The groundwork for an identity system for billions – 2018</p>
                        </li>
                        <li>
                            <h3 className="my-0">News Feed at Facebook</h3>
                            <p>In an increasingly visual feed, how can we help people level up their posts? – 2016</p>
                        </li>
                    </ul>
                </div>
                <footer className="shrink-0 flex justify-between">
                    <p>more work &rarr;</p>
                    <a href="https://read.cv/natebutler" className="underline">read.cv</a>
                </footer>
            </GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
            <GridItem>Column 4</GridItem>
        </div>
    );
}
