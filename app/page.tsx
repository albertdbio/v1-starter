import { BlogPosts } from "@/components/posts"

export const runtime = "edge"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <ul className="list-disc pl-4">
        <li className="pb-1">
          I am a Senior Full-Stack Engineer specializing in TypeScript,
          Functional Programming, and Machine Learning.
        </li>
        <li className="pb-1">
          I have deployed production systems involving Next.js, Remix, React
          Server Components, Puppeteer, MongoDB, PostgresSQL and Vespa.
        </li>
        <li className="pb-1">
          I have developed ETL pipelines with serverless functions and RAG
          systems using ColBERT embeddings, OpenAI Function Calling, and
          Generative UI.
        </li>
        <li className="pb-1">
          I have experience implementing and fine-tuning large image models,
          U-Net and ResUNet, for image impainting using PyTorch.
        </li>
      </ul>
      <div className="pt-14 py-6">
        <BlogPosts />
      </div>
    </section>
  )
}
