import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        Financial Blogs
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Learn investing, taxes, savings and personal
        finance through practical guides.
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
          </Link>
        ))}
      </div>
    </main>
  );
}