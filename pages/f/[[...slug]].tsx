import { allPages } from '.contentlayer/data'
import { Page } from '.contentlayer/types'
import { GetStaticPaths } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

type StaticProps = {
  page: Page
  navInfo: { title: string; path: string }[]
}

const Page: React.FC<StaticProps> = ({ page, navInfo }) => {
  const MDXContent = useMDXComponent(page.body.code)

  return (
    <div>
      <div style={{ display: 'flex', paddingBottom: 10, borderBottom: '1px solid #eee' }}>
        {navInfo.map(({ path, title }) => (
          <a key={path} href={path} style={{ paddingRight: 6 }}>
            {title}
          </a>
        ))}
      </div>
      <h1>{page.title}</h1>
      <MDXContent />
    </div>
  )
}

export default Page

export const getStaticProps = ({ params: { slug = [] } }): { props: StaticProps } => {
  const pagePath = slug.join('/')
  const page = allPages.find((page) => page._raw.flattenedPath === pagePath)!

  const navInfo = allPages.map((_) => ({ title: _.title, path: `/${_._raw.flattenedPath}` }))

  return { props: { page, navInfo } }
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allPages.map((_) => `/${_._raw.flattenedPath}`),
  fallback: false,
})
