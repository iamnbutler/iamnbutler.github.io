'use client';

import * as RadixAvatar from '@radix-ui/react-avatar';

function Avatar() {
    return (
        <RadixAvatar.Root>
            <RadixAvatar.Image src="/avatar.jpg" className="w-7 h-7 rounded-full border border-black/5" />
            <RadixAvatar.Fallback />
        </RadixAvatar.Root>
    )
}

export default Avatar
