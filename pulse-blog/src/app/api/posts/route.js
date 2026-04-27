import { NextResponse } from 'next/server';

// This is our simulated database. Once Supabase is configured in production,
// this API route can directly query Supabase instead of returning this static array.
const DB_POSTS = [
  {
    id: 1,
    title: "The Heartbeat of Equity: Fixing the Healthcare Divide",
    slug: "/posts/healthcare-revolution",
    date: "April 28, 2026",
    category: "Responsible",
    tags: ["Social", "Healthcare"],
    excerpt: "Exploring the gap between India and US systems and our initiative to fix the geographic lottery.",
    youtubeVideo: {
      title: "The Geographic Lottery: Indian Healthcare vs US",
      thumbnail: "/video-thumb.png",
      url: "https://www.youtube.com/results?search_query=Pulse+Initiatives+Healthcare+Divide"
    }
  },
  {
    id: 2,
    title: "Scaling Referral Protocols for Rural India",
    slug: "/tech/scaling-referral-systems",
    date: "April 27, 2026",
    category: "Tech",
    tags: ["Progressive", "Infrastructure"],
    excerpt: "A deep dive into the decentralized architecture needed to connect 600,000 villages.",
    youtubeVideo: null
  },
  {
    id: 3,
    title: "Digital Privacy in the Age of Health Insurance",
    slug: "/posts/healthcare-revolution", 
    date: "April 26, 2026",
    category: "Progressive",
    tags: ["Responsible", "Data"],
    excerpt: "How we can build trust-less verification systems to prevent insurance fraud.",
    youtubeVideo: null
  }
];

export async function GET() {
  // Simulate network delay for realistic DB feel
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({ posts: DB_POSTS });
}
