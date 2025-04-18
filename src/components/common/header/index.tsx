import { Link } from '../link';

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-2 shadow-sm md:px-8">
      <Link href="/">
        <h1 className="font-mono text-2xl font-bold text-gray-700">
          Search Repository
        </h1>
      </Link>
    </header>
  );
}
