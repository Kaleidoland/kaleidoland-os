import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'nodejs';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: 'K-OS Sovereign Engine via Vertex/Gemini Nexus.' }, { role: 'user', content: prompt }],
    });
    return NextResponse.json({ content: completion.choices[0].message.content });
  } catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }); }
}
