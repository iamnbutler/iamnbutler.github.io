import Link from 'next/link';

export default function NotFound() {
  return (
      <div className="">
        <h1>404</h1>
        <Link href="/">
          <a>
            Return Home
          </a>
        </Link>
      </div>
  );
}
