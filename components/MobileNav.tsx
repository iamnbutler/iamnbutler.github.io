'use client';

import { Menu } from "lucide-react"
import MotionHeadline from "./MotionHeadline"
import clsx from "clsx"
import Link from "next/link"
import { NavItem, navItems } from "@/app/(home)/navCard";
import * as Dropdown from "@radix-ui/react-dropdown-menu"

function MobileNav() {
    return (
        <header className={clsx('py-3 flex justify-between', 'sticky top-0', 'md:hidden')}>
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
                <Link href="/" className="ml-5 top-0.5 relative flex items-center text-h2 font-bold bg-white pt-1 pb-4 px-4 border border-black">
                    <h2 className="text-shadow-cyan underline underline-offset-[6px] decoration-2">nate.⚰️</h2>
                </Link>
            </MotionHeadline>
            <Dropdown.Root>
                <Dropdown.Trigger className="mr-5 mt-5 w-12 h-12 flex items-center justify-center bg-white border border-black shrink-0">
                    <MotionHeadline
                        initial={{
                            rotate: 2,
                            originX: 0, // Relative to the left edge (0%)
                            originY: 1, // Relative to the bottom edge (100%)
                        }}
                    >
                        <Menu className="w-6 h-6 text-black text-shadow-magenta" />
                    </MotionHeadline>
                </Dropdown.Trigger>
                <Dropdown.Content side="bottom" className="">
                    <nav aria-label="Primary" className="border border-black bg-white p-5 ml-5">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <NavItem key={item.href} {...item} />
                            ))}
                        </ul>
                    </nav>
                </Dropdown.Content>
            </Dropdown.Root>
        </header>
    )
}

export default MobileNav
