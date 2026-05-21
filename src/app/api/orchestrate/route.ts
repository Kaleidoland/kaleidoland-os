import { NextResponse } from 'next/server';
import { MODELS } from '@/lib/ai';

const SPOC = 'clement@kaleidoland.fr';

export async function GET() {
  return NextResponse.json({ 
    status: 'ORCHESTRATOR_READY',
    spoc: SPOC,
    models: MODELS,
    ts: Date.now()
  });
}

export async function POST(req: Request) {
  const { prompt = 'test' } = await req.json();
  return NextResponse.json({
    spoc: SPOC,
    prompt,
    meta: { model: MODELS.meta, status: 'ready' },
    openai: { model: MODELS.openai, status: 'ready' },
    gemini: { model: MODELS.gemini, status: 'ready' },
    consensus: 'ORBITAL_EXPANSION_POSITIVE'
  });
}
