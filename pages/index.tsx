import { allDocs } from ".contentlayer/data";

type StaticProps = {
  navInfo: { title: string; path: string; category: string; date: string }[];
};

const DocPage: React.FC<StaticProps> = ({ navInfo }) => {
  return (
    <div>
      <h1>hello</h1>
      <p>welcome to my corner of the internet</p>
      <ul>
        {navInfo.map(({ path, title, category, date }) => (
          <li className="flex">
            <a key={path} href={path}>
              <h3>{title}</h3>
            </a>
            <p>{category}</p>
            <p>{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocPage;

export const getStaticProps = (): { props: StaticProps } => {
  const navInfo = allDocs.map((_) => ({
    title: _.title,
    path: `/f/${_._raw.flattenedPath}`,
    category: _.title,
    date: _.title,
  }));

  return { props: { navInfo } };
};
