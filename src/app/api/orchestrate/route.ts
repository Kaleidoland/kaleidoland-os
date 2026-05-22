import { getOpenAI } from "@/lib/openai"

export async function POST(req: Request) {
  const openai = getOpenAI()

  const body = await req.json().catch(() => ({}))

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are Kaleidoland OS" },
      { role: "user", content: body?.prompt || "hello" }
    ]
  })

  return Response.json(response)
}
