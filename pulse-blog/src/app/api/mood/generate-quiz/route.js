import { NextResponse } from 'next/server';

const QUESTION_BANK = [
  "If your current energy was weather, what would it be?",
  "What texture does your brain feel like right now?",
  "If you had to move your body right now, how fast would it be (1-10)?",
  "Are your thoughts sharp with edges, or cloudy and soft?",
  "What color is the ambient noise around you?",
  "If you could teleport to any temperature, what would it be?",
  "Does your mind feel heavy like a stone or light like a feather?",
  "What geometric shape describes your mood?",
  "If your mood was a soundtrack, what instrument is playing the loudest?",
  "How much space do you feel like you are taking up right now?"
];

export async function GET() {
  // In the future, call Gemma LLM here to generate new questions.
  // For now, shuffle and return 5 questions for brevity.
  const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
  return NextResponse.json({ questions: shuffled.slice(0, 5) });
}
