import OpenAI from "openai"

let client: OpenAI | null = null

export function getOpenAI() {
  const key = process.env.OPENAI_API_KEY

  if (!key) {
    throw new Error("OPENAI_API_KEY missing (runtime only required)")
  }

  if (!client) {
    client = new OpenAI({ apiKey: key })
  }

  return client
}
