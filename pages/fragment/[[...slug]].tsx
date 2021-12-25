import { allFragments } from '.contentlayer/data';
import type { Fragment } from '.contentlayer/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post }: { post: Fragment }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: allFragments.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allFragments.find((post) => post.slug === params.slug);

  return { props: { post } };
}
