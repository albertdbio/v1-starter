import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import { z } from "zod"
import { Pre, RawCode, highlight } from "codehike/code"
import { Selection, Selectable, SelectionProvider } from "codehike/utils"
import Content from "./content.md"
// From token-transitions example
import { tokenTransitions } from "@/components/annotations/token-transitions"

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
})
export default function Page() {
  const { steps } = parseRoot(Content, Schema)
  return (
    <SelectionProvider className="flex flex-col">
      <div className="">
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={["click"]}
            className=""
          >
            <h2 className="text-xl">{step.title}</h2>
            <div>{step.children}</div>
          </Selectable>
        ))}
      </div>
      <div className="">
        <div className="">
          <Selection
            from={steps.map((step) => (
              <Code codeblock={step.code} />
            ))}
          />
        </div>
      </div>
    </SelectionProvider>
  )
}

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(
    codeblock,
    "github-dark",
  )
  return (
    <Pre
      code={highlighted}
      className="bg-zinc-900 rounded-md p-6 overflow-x-auto"
      handlers={[tokenTransitions]}
    />
  )
}