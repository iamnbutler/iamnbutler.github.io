'use client'

import { Link, Menu } from "lucide-react"
import MotionHeadline from "./MotionHeadline"
import clsx from "clsx"

function MobileNav() {
    return (
        <header className={clsx('flex justify-between', 'bg-white', 'md:hidden')}>
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
                <Link href="/" className="md:ml-12 flex items-center mb-6 text-h1 font-bold">
                    <h2 className="text-shadow-cyan underline underline-offset-[6px] decoration-2">nate.⚰️</h2>
                </Link>
            </MotionHeadline>
            <button type="button" className="mt-2 w-12 h-12 flex items-center justify-center border border-black shrink-0">
                <MotionHeadline
                    initial={{
                        rotate: -2,
                        originX: 0, // Relative to the left edge (0%)
                        originY: 1, // Relative to the bottom edge (100%)
                    }}
                >
                    <Menu className="w-6 h-6 text-black text-shadow-magenta" />
                </MotionHeadline>
            </button>
        </header>
    )
}

export default MobileNav
