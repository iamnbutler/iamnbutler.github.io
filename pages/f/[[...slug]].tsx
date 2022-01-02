import { allDocs } from ".contentlayer/data";
import { Doc } from ".contentlayer/types";
import { GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { Button } from "../../components/Button";

// TODO: Remove this, left here as example for including components later
const mdxComponents = {
  Button,
};

type StaticProps = {
  doc: Doc;
  navInfo: { title: string; path: string }[];
};

const DocPage: React.FC<StaticProps> = ({ doc, navInfo }) => {
  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div>
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
  }));

  return { props: { doc, navInfo } };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allDocs.map((_) => `/f/${_._raw.flattenedPath}`),
  fallback: false,
});
