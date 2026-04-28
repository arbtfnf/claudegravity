import { NextResponse } from 'next/server';

const MOCK_QUESTIONS = [
  { type: "DSA", title: "Two Sum in O(N)", desc: "Find two numbers that add up to target in O(N) time using a HashMap." },
  { type: "OOPS", title: "Design a Parking Lot", desc: "Define the classes, interfaces, and design patterns for a multi-level parking lot." },
  { type: "HLD", title: "Design a URL Shortener", desc: "Design a highly available URL shortener like bit.ly. Consider DB sharding and unique ID generation." },
  { type: "LLD", title: "Rate Limiter", desc: "Implement a sliding window rate limiter in code. Focus on thread-safety." },
  { type: "DSA", title: "Reverse Linked List", desc: "Reverse a singly linked list in-place in O(N) time and O(1) space." },
  { type: "HLD", title: "Design a Chat System", desc: "Design a real-time chat application like WhatsApp. Consider WebSockets and Message Queues." },
  { type: "OOPS", title: "Design a Chess Game", desc: "What are the core classes and interactions for a Chess game? Focus on state management." },
  { type: "DSA", title: "Merge Intervals", desc: "Given an array of intervals, merge all overlapping intervals efficiently." },
  { type: "LLD", title: "Cache Eviction", desc: "Implement an LRU Cache with O(1) get and put operations using a Doubly Linked List." },
  { type: "HLD", title: "Design Netflix", desc: "Design a video streaming service. Discuss CDN integration, transcoding, and scalable storage." }
];

export async function GET() {
  // In a real app, this would query a DB for the user's daily set or fetch from LLM.
  return NextResponse.json({ questions: MOCK_QUESTIONS });
}
