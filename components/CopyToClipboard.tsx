'use client';

import React, { useState } from 'react';

interface CopyUrlButtonProps {
    label?: string;
    copiedLabel?: string;
    copyDuration?: number;
}

function CopyToClipboard({
    label = '🔗 Copy Link',
    copiedLabel = '✅ Copied!',
    copyDuration = 2000,
}: CopyUrlButtonProps) {
    const [copyStatus, setCopyStatus] = useState(false);

    const copyUrlToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopyStatus(true);
            setTimeout(() => {
                setCopyStatus(false);
            }, copyDuration);
        } catch (err) {
            alert("Couldn't copy to clipboard");
        }
    };

    return (
        <button onClick={copyUrlToClipboard} className='border border-black px-2.5 py-1.5'>
            {copyStatus ? copiedLabel : label}
        </button>
    )
};

export default CopyToClipboard;
