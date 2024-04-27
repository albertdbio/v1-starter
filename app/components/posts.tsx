import Link from "next/link"

export function BlogPosts() {
  return (
    <div>
      <Link
        key={"functional-calling"}
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/${"functional-calling"}`}
      >
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            April 9, 2024
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            The Unreasonable Effectiveness of Functional Calling
          </p>
        </div>
      </Link>
    </div>
  )
}
