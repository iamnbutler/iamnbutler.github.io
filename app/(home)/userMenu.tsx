'use client';

import Avatar from "@/components/Avatar";
import * as Dropdown from "@radix-ui/react-dropdown-menu"
import clsx from "clsx";

interface IItem extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    label: string
}

const Item = ({ label, ...props }: IItem) => {
    const { href, className } = props

    return (
        <Dropdown.Item>
            <a href={href} className={clsx('flex p-1 rounded-xs text-sm', 'hover:bg-violet-500/10', 'active:bg-violet-500/20', className)}>
                {label}
            </a>
        </Dropdown.Item>
    )
}

function UserMenu() {
    return (
        <Dropdown.Root>
            <Dropdown.Trigger>
                <Avatar />
            </Dropdown.Trigger>
            <Dropdown.Content side="top" className="border border-black rounded-sm p-1 space-y-px mr-2">
                <Item label="Twitter" href="https://twitter.com/iamnbutler" />
                <Item label="Github" href="https://twitter.com/iamnbutler" />
                <Item label="Read.cv" href="https://read.cv/natebutler" />
            </Dropdown.Content>
        </Dropdown.Root>
    )
}

export default UserMenu
