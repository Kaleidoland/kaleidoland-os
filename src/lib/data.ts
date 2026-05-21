import { PrismaClient } from '@prisma/client';
import { Pinecone } from '@pinecone-database/pinecone';
import { Redis } from '@upstash/redis';

export const prisma = new PrismaClient();
export const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY || '' });
export const redis = Redis.fromEnv();

export const TERRILS_COUNT = 334;
