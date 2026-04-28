import { NextResponse } from 'next/server';
import { DB_POSTS } from '@/lib/data';

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return NextResponse.json({ posts: DB_POSTS });
}
