import { allDocs } from ".contentlayer/data";
import Link from "next/link";

type StaticProps = {
  navInfo: { title: string; path: string; category: string; date: string }[];
};

const DocPage: React.FC<StaticProps> = ({ navInfo }) => {
  return (
    <div>
      {/* Header */}

      {/* Content */}
      <article className="py-8 px-16 prose prose-xl max-w-none dark:prose-invert border-b border-black/20 dark:border-white/20">
        <h1>hello</h1>
        <p>
          welcome to my corner of the internet
        </p>
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
            <p className="flex-initial w-32">{category}</p>
            <p className="w-64 pr-16">{date}</p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer className="px-16 py-8">
        <p>
          say hi on{" "}
          <a
            href="https://twitter.com/iamnbutler"
            target="_blank"
            className="underline"
          >
            twitter
          </a>{" "}
          or send me an email (iamnbutler AT the mail that starts with g){" "}
        </p>
      </footer>
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
