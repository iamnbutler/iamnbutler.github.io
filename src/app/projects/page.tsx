import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoZed from '@/images/logos/zed.png'
import logoDesignDocs from '@/images/logos/designdocs.svg'
import logoCode from '@/images/logos/code.svg'

interface Project {
    name: string
    lastUpdate: number
    description: string
    link?: {
        href: string
        label: string
    }
    github?: {
        href: string
        label: string
    }
    logo: StaticImageData
}

const projects: Project[] = [
    {
        name: 'Zed',
        lastUpdate: 2023,
        description:
            'A native text editor turned collaboration platform to help developers build software together.',
        link: { href: 'https://zed.dev/', label: 'zed.dev' },
        logo: logoZed,
    },
    {
        name: 'GPT Tools',
        lastUpdate: 2023,
        description:
            'a collection of prompts + scripts for working with gpt',
        github: {
            href: 'https://github.com/iamnbutler/gpt-tools',
            label: 'iamnbutler/gpt-tools',
        },
        logo: logoCode,
    },
    {
        name: 'Zed.dev',
        lastUpdate: 2023,
        description:
            'A Next.js site for Zed',
        link: { href: 'https://zed.dev/', label: 'zed.dev' },
        logo: logoZed,
    },
    {
        name: 'Design Docs',
        lastUpdate: 2022,
        description:
            'An open-source, semi-opinionated design industry documentation focused on early career designers. A work in progress!',
        link: { href: 'https://www.designdocs.co/', label: 'designdocs.co' },
        github: {
            href: 'https://github.com/iamnbutler/design-docs',
            label: 'iamnbutler/design-docs',
        },
        logo: logoDesignDocs,
    },
    {
        name: 'fig-gen',
        lastUpdate: 2021,
        description:
            'Exploring Figma Automator actions that create generative visuals',
        github: {
            href: 'https://github.com/iamnbutler/fig-gen',
            label: 'iamnbutler/fig-gen',
        },
        logo: logoCode,
    },
    {
        name: 'Zed Fonts',
        lastUpdate: 2021,
        description:
            'A custom build of the Iosevka font for Zed.',
        github: {
            href: 'https://github.com/zed-industries/zed-fonts',
            label: 'zed-industries/zed-fonts',
        },
        logo: logoZed,
    },
    {
        name: 'Splash Page',
        lastUpdate: 2012,
        description:
            'A simple splash page for my upcoming site',
        github: {
            href: 'https://github.com/iamnbutler/splash-page',
            label: 'zed-industries/iamnbutler/splash-page',
        },
        logo: logoCode,
    }
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Things I’ve made.',
}

export default function Projects() {
    return (
        <SimpleLayout
            title="Just a few projects"
            intro="A non-exhaustive list of things I've worked on, or ongoing things."
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (
                    <Card as="li" key={project.name}>
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={project.logo}
                                alt=""
                                className="h-8 w-8"
                                unoptimized
                            />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={(project.link?.href || project.github?.href) ?? ''}>{project.name}</Card.Link>
                            <span className="ml-2 text-sm font-mono text-zinc-400 dark:text-zinc-600">{project.lastUpdate}</span>
                        </h2>
                        <Card.Description>{project.description}</Card.Description>
                        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                            <LinkIcon className="h-6 w-6 flex-none" />
                            <span className="ml-2">{(project.link?.label || project.github?.label) ?? ''}</span>
                        </p>
                    </Card>
                ))}
            </ul>
        </SimpleLayout>
    )
}
