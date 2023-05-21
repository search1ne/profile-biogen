import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/pd-logo-black.svg"
          className="m:w-12 m:h-12 w-16 h-16"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          bio-generatoor
        </h1>
      </Link>
      <a
        href="https://searchone.dev"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/luckyzero-modified.svg"
          className="m:w-12 m:h-12 w-16 h-16"
          width={32}
          height={32}
        />
      </a>
    </header>
  );
}