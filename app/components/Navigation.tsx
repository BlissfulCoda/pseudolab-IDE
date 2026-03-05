import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full m-4">
      <ul className="flex gap-4 text-sm group text-gray-300">
        <li>
          <Link href="/" className="group-hover:text-gray-800">
            Features
          </Link>
        </li>
        <li>
          <Link href="/pages/ai-tutor" className="group-hover:text-gray-800">
            AI Tutor
          </Link>
        </li>
        <li>
          <Link href="/pages/references">Reference</Link>
        </li>
        <li>
          <Link href="/pages/how-it-works">How it works</Link>
        </li>
        <li>
          <Link href="/pages/specifications">Cambridge Specs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
