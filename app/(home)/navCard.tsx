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
            <span className="mr-2">{icon}</span>
            <div className="flex flex-col">
                <span className="font-bold">{label}</span>
                <span className="block text-sm">{description}</span>
            </div>
        </Link>
    </li>
);

function NavCard() {
    return (
        <header>
            <Link href="/" className="flex items-center mb-6 text-3xl font-bold">
                <h2 className="text-shadow-cyan">nate.⚰️</h2>
            </Link>
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
