import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          FinWise
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/calculators"
            className="transition hover:text-blue-600"
          >
            Calculators
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-600"
          >
            About
          </Link>
          <a href="/blog">Blog</a>

          <Link
            href="/contact"
            className="transition hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            href="/calculators"
            className="rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}