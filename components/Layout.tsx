import cn from "classnames";
import { useTheme } from "next-themes";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive ? "font-semibold" : "font-normal",
          "text-black dark:text-white"
        )}
      >
        {text}
      </a>
    </NextLink>
  );
}

export default function Layout(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "Nate Butler – Software Designer",
    description: `Software Design, Development, and other interests.`,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {/* <meta name="robots" content="follow, index" /> */}
        <meta content={meta.description} name="description" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="text-black dark:text-white">
        <nav className="space-x-4">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
        </nav>

        {/* TODO: Replace with our own theme picker */}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="m-2"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <p className="p-4">
              {resolvedTheme === "dark" ? (
                <span>dark</span>
              ) : (
                <span>light</span>
              )}
            </p>
          )}
        </button>
        <main id="skip">{children}</main>
      </div>
    </>
  );
}
