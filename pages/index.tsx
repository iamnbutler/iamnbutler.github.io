import { allDocs } from ".contentlayer/data";
import Link from "next/link";
import Footer from "../components/Footer";

type StaticProps = {
  navInfo: { title: string; path: string; category: string; date: string }[];
};

const DocPage: React.FC<StaticProps> = ({ navInfo }) => {
  return (
    <div>
      {/* Header */}

      {/* Content */}
      <article className="py-8 px-16 prose max-w-none dark:prose-invert border-b border-black/20 dark:border-white/20">
        <h1>hey</h1>
        <p>welcome to my corner of the internet 🌎</p>
      </article>

      {/* Doc List */}
      <ul className="w-full">
        {navInfo.map(({ path, title, category, date }) => (
          <li
            key={path}
            className="flex space-x-4 border-b border-black/20 dark:border-white/20 items-center justify-between"
          >
            <Link href={path}>
              <a className="underline flex-grow py-4 block px-16">
                <h3>{title}</h3>
              </a>
            </Link>
            <p className="font-mono flex-initial w-32">{category}</p>
            <p className="font-mono  w-64 pr-16">
              <time dateTime="{date}">{new Date(date).toLocaleDateString()}</time>
            </p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DocPage;

export const getStaticProps = (): { props: StaticProps } => {
  const navInfo = allDocs.map((_) => ({
    title: _.title,
    path: `/f/${_._raw.flattenedPath}`,
    category: _.category || "",
    date: _.date || "",
  }));

  return { props: { navInfo } };
};
