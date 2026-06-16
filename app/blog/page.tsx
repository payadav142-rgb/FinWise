import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        Financial Blogs
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Learn about investing, SIPs, mutual funds,
        taxes, fixed deposits, recurring deposits,
        personal finance and wealth creation through
        practical financial guides written for Indian
        investors.
      </p>

      <div className="mt-12 grid gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="rounded-2xl border p-6 transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              {blog.title}
            </h2>

            <p className="mt-3 text-muted-foreground">
              {blog.description}
            </p>

            <span className="mt-4 inline-block text-sm font-medium text-blue-600">
              Read Article →
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          Why Read Financial Blogs?
        </h2>

        <p className="mt-6 leading-8 text-muted-foreground">
          Financial education plays an important role
          in making informed money decisions. Our
          articles help investors understand mutual
          funds, SIPs, fixed deposits, taxes, loans
          and wealth creation strategies in a simple
          and practical way.
        </p>

        <p className="mt-6 leading-8 text-muted-foreground">
          Whether you are a beginner investor or an
          experienced saver, these guides can help
          you improve financial planning and achieve
          long-term financial goals.
        </p>
      </section>
    </main>
  );
}