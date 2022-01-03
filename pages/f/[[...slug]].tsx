import { allDocs } from ".contentlayer/data";
import { Doc } from ".contentlayer/types";
import { GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";

// TODO: Remove this, left here as example for including components later
const mdxComponents = {
  Button,
};

type StaticProps = {
  doc: Doc;
  navInfo: { title: string; path: string; category: string; date: string }[];
};

const DocPage: React.FC<StaticProps> = ({ doc, navInfo }) => {
  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div className="flex">
      <div className="w-2/5 border-r border-black/20 dark:border-white/20">
        <SideNav />
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
                <time dateTime="{date}">
                  {new Date(date).toLocaleDateString()}
                </time>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/5">
        <nav className="px-16 py-8">
          <Link href="/">
            <a className="hover:underline">&larr; Back home</a>
          </Link>
        </nav>
        <article className="py-8 px-16 prose prose-xl dark:prose-invert">
          <h1>{doc.title}</h1>
          <MDXContent components={mdxComponents} />
          <footer>
            <p>Thanks for reading!</p>
            <Link href="/">
              <a className="hover:underline">&larr; Back home</a>
            </Link>
          </footer>
        </article>
        <Footer />
      </div>
    </div>
  );
};

export default DocPage;

export const getStaticProps = ({
  params: { slug = [] },
}): { props: StaticProps } => {
  const pagePath = slug.join("/");
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === pagePath)!;

  const navInfo = allDocs.map((_) => ({
    title: _.title,
    path: `/f/${_._raw.flattenedPath}`,
    category: _.category || "",
    date: _.date || "",
  }));

  return { props: { doc, navInfo } };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allDocs.map((_) => `/f/${_._raw.flattenedPath}`),
  fallback: false,
});
