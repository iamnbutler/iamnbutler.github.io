import { allFragments } from ".contentlayer/data";
import { pick } from "lib/utils";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import Fragment from "../components/Fragment";
import Layout from "../components/Layout";

export default function Index({
  fragments
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const filteredFragments = fragments.filter((fragment) =>
    fragment.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="">
      <Layout>
        <h1>Index</h1>
        <input
          aria-label="Search"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className=""
        />
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          All fragments
        </h3>
        {!filteredFragments.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No fragments found.
          </p>
        )}
        {filteredFragments.map((fragment) => (
          <Fragment key={fragment.title} title={fragment.title} slug={fragment.slug} />
        ))}
      </Layout>
    </div>
  );
}

export function getStaticProps() {
  const fragments = allFragments
    .map((fragment) => pick(fragment, ["title", "date", "slug"]))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return { props: { fragments } };
}
