import { NextResponse } from 'next/server';

const QUESTION_BANK = [
  {
    id: "location",
    q: "Where are you currently located?",
    type: "single",
    options: ["At Home", "Office / Desk", "Outdoors", "Commuting / Transit", "Public Space (Cafe, Library)"]
  },
  {
    id: "energy",
    q: "If your current energy was weather, what would it be?",
    type: "single",
    options: ["Sunny & Clear", "Heavy Rain", "Foggy & Overcast", "Thunderstorm", "Calm Breeze"]
  },
  {
    id: "texture",
    q: "What texture does your brain feel like right now?",
    type: "single",
    options: ["Smooth Glass", "Tangled Wool", "Sharp Sandpaper", "Spongy & Soft", "Heavy Lead"]
  },
  {
    id: "physical",
    q: "Which of these are you experiencing physically? (Select all that apply)",
    type: "multi",
    options: ["Tense Shoulders", "Restless Legs", "Heavy Eyes", "Shallow Breathing", "Clenched Jaw"]
  },
  {
    id: "space",
    q: "How much space do you feel like you are taking up right now?",
    type: "single",
    options: ["Shrinking into a corner", "Contained in a box", "Floating aimlessly", "Filling the room", "Expanding infinitely"]
  },
  {
    id: "sound",
    q: "If your mood was a soundtrack, what is playing?",
    type: "single",
    options: ["Chaotic Jazz", "Loud Heavy Metal", "Lo-Fi Beats", "Absolute Silence", "Static White Noise"]
  }
];

export async function GET() {
  // Always ask the location question first so the game generates context-aware physical tasks
  const locationQ = QUESTION_BANK[0];
  const others = QUESTION_BANK.slice(1).sort(() => 0.5 - Math.random());
  
  // Return the location question + 4 random abstract questions
  const selected = [locationQ, ...others.slice(0, 4)];
  return NextResponse.json({ questions: selected });
}
