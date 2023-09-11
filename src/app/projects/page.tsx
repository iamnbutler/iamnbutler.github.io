'use client'
import Image, { StaticImageData } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoZed from '@/images/logos/zed.png'
import logoDesignDocs from '@/images/logos/designdocs.svg'
import logoCode from '@/images/logos/code.svg'
import logoDesign from '@/images/logos/design.svg'
import logoArt from '@/images/logos/art.svg'
import { useMemo, useState } from 'react'
import { Button } from '@/components/Button'
import clsx from 'clsx'

const projectType = {
  code: 'Code',
  design: 'Design',
  art: 'Art',
  writing: 'Writing',
} as const

type ProjectType = typeof projectType[keyof typeof projectType]

const withFilterType = {
  details: 'Details',
  code: 'Code',
} as const

type WithFilterType = typeof withFilterType[keyof typeof withFilterType]

interface Project {
  name: string
  lastUpdate: number
  description: string
  type: ProjectType[]
  link?: {
    href: string
    label: string
  }
  github?: {
    href: string
    label: string
  }
  details?: {
    href: string
    label: string
  }
  logo: StaticImageData
}

const projects: Project[] = [
  {
    name: 'Leetcode',
    lastUpdate: 2023,
    description:
      'A collection of my Leetcode solutions',
    link: { href: 'https://github.com/iamnbutler/leetcode', label: 'iamnbutler/leetcode' },
    type: ['Code'],
    logo: logoCode,
  },
  {
    name: 'Zed',
    lastUpdate: 2023,
    description:
      'A native text editor turned collaboration platform to help developers build software together.',
    link: { href: 'https://zed.dev/download', label: 'zed.dev/download' },
    type: ['Code', 'Design'],
    logo: logoZed,
  },
  {
    name: 'GPT Tools',
    lastUpdate: 2023,
    description: 'a collection of prompts + scripts for working with gpt',
    github: {
      href: 'https://github.com/iamnbutler/gpt-tools',
      label: 'iamnbutler/gpt-tools',
    },
    type: ['Code'],
    logo: logoCode,
  },
  {
    name: 'Zed.dev',
    lastUpdate: 2023,
    description: 'A Next.js site for Zed',
    link: { href: 'https://zed.dev/', label: 'zed.dev' },
    type: ['Code', 'Design'],
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
    type: ['Code'],
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
    type: ['Art', 'Code'],
    logo: logoArt,
  },
  {
    name: 'Zed Fonts',
    lastUpdate: 2021,
    description: 'A custom build of the Iosevka font for Zed.',
    github: {
      href: 'https://github.com/zed-industries/zed-fonts',
      label: 'zed-industries/zed-fonts',
    },
    type: ['Design'],
    logo: logoZed,
  },
  {
    name: 'FB iOS11 GUI Backgrounds',
    lastUpdate: 2017,
    description: 'A set of abstract 3D backgrounds for the Facebook iOS 11 GUI resource.',
    github: {
      href: 'https://design.facebook.com/toolsandresources/ios-11-iphone-gui/',
      label: 'design.fb/ios-11-gui',
    },
    type: ['Art', 'Design'],
    logo: logoArt,
  },
  {
    name: 'Explorer',
    lastUpdate: 2016,
    description: 'A python pi-powered roverbot',
    github: {
      href: 'https://github.com/iamnbutler/explorer',
      label: 'iamnbutler/explorer',
    },
    type: ['Code'],
    logo: logoCode,
  },
  {
    name: 'Tetris',
    lastUpdate: 2015,
    description: 'Tetris written in processing, to be played on an LED matrix.',
    github: {
      href: 'https://github.com/iamnbutler/tetris',
      label: 'iamnbutler/tetris',
    },
    type: ['Code'],
    logo: logoCode,
  },
  {
    name: 'Music Stats',
    lastUpdate: 2015,
    description: 'A music stat charting experiment. Uses D3 and TSVs generated from iTunes playlists.',
    github: {
      href: 'https://github.com/iamnbutler/music-stats',
      label: 'iamnbutler/music-stats',
    },
    type: ['Code', 'Art'],
    logo: logoCode,
  },
  {
    name: 'Kaishi',
    lastUpdate: 2015,
    description: 'A minimal HTML/CSS project starter',
    github: {
      href: 'https://github.com/iamnbutler/kaishi',
      label: 'iamnbutler/kaishi',
    },
    type: ['Code'],
    logo: logoCode,
  },
  {
    name: 'Stagout',
    lastUpdate: 2013,
    description: 'A website for the rap/hip-hop duo Sandy Pearlman & Bones',
    github: {
      href: 'https://github.com/iamnbutler/stagout',
      label: 'iamnbutler/stagout',
    },
    type: ['Code', 'Design'],
    logo: logoCode,
  },
  {
    name: 'Splash Page',
    lastUpdate: 2012,
    description: 'A simple splash page for my upcoming site',
    github: {
      href: 'https://github.com/iamnbutler/splash-page',
      label: 'iamnbutler/splash-page',
    },
    type: ['Code', 'Design'],
    logo: logoCode,
  },
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

// export const metadata: Metadata = {
//   title: 'Projects',
//   description: 'Things I’ve made.',
// }

export default function Projects() {
  const [filter, setFilter] = useState<ProjectType | 'all'>('all');
  const [withFilters, setWithFilters] = useState<WithFilterType[]>([]);

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (filter !== 'all') {
      result = result.filter((p) => p.type.includes(filter));
    }

    withFilters.forEach((filter) => {
      if (filter === 'Code') {
        result = result.filter((p) => p.type.includes('Code'));
      } else if (filter === 'Details') {
        result = result.filter((p) => p.details);
      }
    });

    return result;
  }, [filter, withFilters]);

  return (
    <SimpleLayout
      title="Just a few projects"
      intro="A non-exhaustive list of things I've worked on, or ongoing things."
    >
      <div className='-mt-8 mb-16 flex gap-8 items-center'>
        <div className='flex flex-col'>
          <p className='text-xs text-zinc-400 dark:text-zinc-500'>Filter</p>
          <div className='flex gap-px items-center border border-zinc-200 dark:border-zinc-800 overflow-hidden rounded-lg'>
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              className={'rounded-md'}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            {Object.values(projectType).map((type) => (
              <Button
                key={type}
                variant={filter === type ? 'primary' : 'secondary'}
                disabled={projects.filter((p) => p.type.includes(type)).length === 0}
                className={clsx(
                  projects.filter((p) => p.type.includes(type)).length === 0 && 'opacity-40 cursor-not-allowed',
                  'rounded-md')}
                onClick={() => setFilter(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-xs text-zinc-400 dark:text-zinc-500'>With</p>
          <div className='flex gap-3'>
            {/* With Filters */}
            {Object.values(withFilterType).map((type) => (
              <Button
                key={type}
                variant={withFilters.includes(type) ? 'primary' : 'secondary'}
                className='rounded-md'
                onClick={() => setWithFilters(withFilters.includes(type)
                  ? withFilters.filter((f) => f !== type)
                  : [...withFilters, type])}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
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
              <Card.Link
                href={(project.link?.href || project.github?.href || project.details?.label) ?? ''}
              >
                {project.name}
              </Card.Link>
              <span className="ml-2 font-mono text-sm text-zinc-400 dark:text-zinc-600">
                {project.lastUpdate}
              </span>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">
                {(project.link?.label || project.github?.label || project.details?.label) ?? ''}
              </span>
            </p>
          </Card>
        ))}
        {filteredProjects.length === 0 && (
          <div className='col-span-full flex flex-col items-center justify-center'>
            <p className='text-zinc-400 dark:text-zinc-600'>No projects found.</p>
          </div>
        )}
      </ul>
    </SimpleLayout>
  )
}
