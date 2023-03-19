import MotionHeadline from "@/components/MotionHeadline";
import Link from "next/link";

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
            <div className="mr-5 w-8 h-8 flex shrink-0 justify-center items-center">{icon}</div>
            <div className="flex flex-col">
                <h3 className="font-bold underline underline-offset-2 decoration-1">{label}</h3>
                <span className="block text-sm italic">{description}</span>
            </div>
        </Link>
    </li>
);

function NavCard() {
    return (
        <header>
            <MotionHeadline
                initial={{
                    rotate: -3,
                    originX: 0, // Relative to the left edge (0%)
                    originY: 1, // Relative to the bottom edge (100%)
                }}
                animate={{
                    rotate: [-3, 1],
                    y: [0, 3],
                }}
                transition={{ ease: "linear", duration: 7, repeat: 99, repeatType: "mirror" }}
            >
                <Link href="/" className="ml-12 flex items-center mb-6 text-h1 font-bold">
                    <h2 className="text-shadow-cyan underline underline-offset-[6px] decoration-2">nate.⚰️</h2>
                </Link>
            </MotionHeadline>
            <nav aria-label="Primary">
                <ul className="space-y-4">
                    {navItems.map((item) => (
                        <NavItem key={item.href} {...item} />
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default NavCard;
