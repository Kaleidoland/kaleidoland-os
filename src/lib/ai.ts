import OpenAI from 'openai';
import Replicate from 'replicate';
import { VertexAI } from '@google-cloud/vertexai';

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || 'sk-placeholder' });
export const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN || 'r8_placeholder' });
export const vertex = new VertexAI({ project: 'lanazrion-os-core', location: 'europe-west1' });

export const MODELS = {
  meta: 'meta/meta-llama-3.1-405b-instruct',
  openai: 'gpt-4o',
  gemini: 'gemini-1.5-pro'
};
