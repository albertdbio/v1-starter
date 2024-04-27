import { BlogPosts } from "./components/posts"

export const runtime = "edge"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Albert | Web, AI, Writing
      </h1>
      <p className="mb-4">
        {`I am a seasoned software developer with extensive experience in TypeScript and a solid foundation in Machine Learning.
        I have deployed production systems involving Next.js, Remix, Tailwind, React Server Components, PostgresSQL, and MongoDB.
        Additionally, I have experience fine-tuning large image models and developing ETL and RAG systems using vector embeddings and Large Language Models.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
