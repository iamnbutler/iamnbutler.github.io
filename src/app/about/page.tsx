import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'About',
    description:
        'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        I’m Nate Butler. I help people zoom out and find their vision.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I’m a Vision Designer & Design Engineer living in Toronto, Canada 🇨🇦{' '}I’ve helped millions of people create things and express themselves through some delightful experiences. My career has flourished around long range vision design and building products that help people create things on their own.
                        </p>
                        <p>
                            I love working on teams that solve ambitious problems and create value for people every day.
                        </p>
                        <h2>Want to work together? Here are the things to know:</h2>
                        <ul className='list-disc ml-4 space-y-5'>
                            <li><strong>I’m a vision designer–I help people zoom out and think longer and wider.</strong> I have a decent track record with bringing value.</li>
                            <li><strong>I’m a design engineer–I can build the things I design.</strong> I mostly prefer building prototypes and smaller, contained experiences.</li>
                            <li><strong>I’d like to continue doing these types of work.</strong> I’m excited to help start new things, or bring long range thinking to established products.</li>
                            <li><strong>I’m not really interested in generalist roles.</strong> I typically thrive in the first 40% of the 0–1+ process.</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="https://twitter.com/iamnbutler" icon={TwitterIcon}>
                            @iamnbutler on Twitter
                        </SocialLink>
                        <SocialLink href="https://github.com/iamnbutler" icon={GitHubIcon} className="mt-4">
                            @iamnbutler on GitHub
                        </SocialLink>
                        <SocialLink href="https://read.cv/natebutler" icon={LinkedInIcon} className="mt-4">
                            @natebutler on Read.cv
                        </SocialLink>
                        <SocialLink
                            href="mailto:spencer@planetaria.tech"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            iamnbutler(at)gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
