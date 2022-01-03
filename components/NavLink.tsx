import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

type NavLinkProps = {
  current: boolean
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function NavLink(
  { href, children, ...props }: React.PropsWithChildren<LinkProps>,
  { current }: NavLinkProps
) {
  const router = useRouter()

  current = router.asPath === href

  return (
    <Link key={href.toString()} href={href} {...props} passHref>
      <a
        className={classNames(
          current
            ? "text-black dark:text-white"
            : "text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white",
          "flex-grow"
        )}
      >
        {children}
        </a>
    </Link>
  )
}
