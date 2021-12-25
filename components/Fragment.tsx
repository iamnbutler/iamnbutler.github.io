import Link from "next/link";

export default function Fragment({
  title, slug,
// @ts-ignore
}: Pick<Fragment, "title" | "slug">) {
  return (
    <li key={title}>
      <Link href={`/fragment/${slug}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}