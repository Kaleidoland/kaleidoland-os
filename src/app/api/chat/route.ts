import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
export const runtime='edge';
export async function POST(req:Request){
  const {messages}=await req.json();
  const result=await streamText({
    model:openai('gpt-4o-mini'),
    system:'You are ORBITAL OS, the AI-native interstellar operating system for Kaleidoland. Answer in French, concise, technical.',
    messages,
  });
  return result.toAIStreamResponse();
}
