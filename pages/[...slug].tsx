import { allDocs } from ".contentlayer/data";
import { Doc } from ".contentlayer/types";
import { GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

// TODO: Remove this, left here as example for including components later
const mdxComponents = {
  Button,
};

type StaticProps = {
  doc: Doc;
};

const DocPage: React.FC<StaticProps> = ({ doc }) => {
  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <Layout>
      <article className="prose dark:prose-invert max-w-2xl py-8 mx-auto">
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
    </Layout>
  );
};

export default DocPage;

export const getStaticProps = ({
  params: { slug = [] },
}): { props: StaticProps } => {
  const pagePath = slug.join("/");
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === pagePath)!;

  return { props: { doc } };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allDocs.map((_) => `/${_._raw.flattenedPath}`),
  fallback: false,
});
