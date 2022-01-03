import { allDocs } from ".contentlayer/data";
import Footer from "./Footer";
import NavLink from "./NavLink";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Get a list of all docs from contentLayer
  const navInfo = allDocs.map((_) => ({
    title: _.title,
    path: `/${_._raw.flattenedPath}`,
    category: _.category || "",
    date: _.date || "",
  }));

  return (
    <div
      className="flex h-screen overflow-hidden border border-black/20 dark:border-white/20"
      id="app-layout"
    >
      <div className="w-1/3 overflow-y-auto custom-scroll-view border-r border-black/20 dark:border-white/20">
        <div className="flex flex-col">
          <header className="p-4 prose max-w-none dark:prose-invert border-b border-black/20 dark:border-white/20">
            <p>welcome to my corner of the internet 🌎</p>
          </header>
        </div>
        <ul className="w-full">
          {navInfo.map(({ path, title, category, date }) => (
            <li
              key={path}
              className="flex space-x-4 border-b border-black/20 dark:border-white/20 items-center p-4 justify-between"
            >
              <NavLink href={path}>{title}</NavLink>
              <p className="font-mono flex-none w-32 text-right">{category}</p>
              <p className="font-mono flex-none w-32 text-right">
                <time dateTime="{date}">
                  {new Date(date).toLocaleDateString()}
                </time>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <main className="w-2/3 overflow-y-auto custom-scroll-view">
        {children}
        <Footer />
      </main>
    </div>
  );
}
