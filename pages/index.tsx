import { allDocs } from '.contentlayer/data'

type StaticProps = {
  navInfo: { title: string; path: string }[]
}

const DocPage: React.FC<StaticProps> = ({ navInfo }) => {
  

  return (
    <div>
      <div style={{ display: 'flex', paddingBottom: 10, borderBottom: '1px solid #eee' }}>
        {navInfo.map(({ path, title }) => (
          <a key={path} href={path} style={{ paddingRight: 6 }}>
            {title}
          </a>
        ))}
      </div>
      <h1>hello</h1>
    </div>
  )
}

export default DocPage

export const getStaticProps = (): { props: StaticProps } => {

  const navInfo = allDocs.map((_) => ({ title: _.title, path: `/f/${_._raw.flattenedPath}` }))

  return { props: { navInfo } }
}