import '@/app/styles/global.css'
import '@/app/styles/tailwind.css';
import { Lora } from 'next/font/google'
import MobileNav from '@/components/MobileNav';
const lora = Lora({ subsets: ['latin'] })

export const metadata = {
    title: 'Nate Butler – Designer',
    description: 'Just hanging out, making things.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚰️</text></svg>" />

            <body className={lora.className}>
                <div className='site-background fixed z-0 top-0 bottom-0 left-0 right-0' />
                <div className='relative z-10 mb-10 p-5 border border-black bg-[#FFFFD9] prose max-w-none flex justify-center'>
                    <p>Hey thanks for coming by, this site is very wip!. You can report weird issues <a href='https://github.com/iamnbutler/iamnbutler.github.io'>here.</a></p></div>
                <div className='relative z-10'>
                    <MobileNav />
                    {children}
                </div>
            </body>
        </html>
    )
}
