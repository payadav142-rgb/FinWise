import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-muted-foreground">
        The page you are looking for does not
        exist or may have been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Go Home
        </Link>

        <Link
          href="/calculators"
          className="rounded-xl border px-6 py-3"
        >
          View Calculators
        </Link>
      </div>
    </main>
  );
}