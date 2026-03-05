import Link from "next/link";

const Navigation = () => {
  return (
    <div className="w-full m-4">
      <ul className="flex gap-4 text-sm group text-gray-300">
        <Link href="/" className="group-hover:text-gray-800">
          Features
        </Link>
        <Link href="/pages/ai-tutor" className="group-hover:text-gray-800">
          AI Tutor
        </Link>
        <Link href="/pages/references">Reference</Link>
        <Link href="/pages/how-it-works">How it works</Link>
        <Link href="/pages/specifications">Cambridge Specs</Link>
      </ul>
    </div>
  );
};

export default Navigation;
