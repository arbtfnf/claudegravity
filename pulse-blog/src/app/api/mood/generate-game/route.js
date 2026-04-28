import { NextResponse } from 'next/server';

export async function POST(req) {
  const { answers } = await req.json();
  
  // In the future, pass answers to Gemma LLM to synthesize the game.
  // Mock response for now:
  const mockGame = {
    title: "The Neon Pathfinder",
    theme: "Exploration & Grounding",
    tasks: [
      { id: 1, description: "Walk exactly 100 steps away from your current location.", type: "physical", completed: false },
      { id: 2, description: "Find and take a photo of something bright yellow.", type: "ar", completed: false },
      { id: 3, description: "Do 10 deep breaths while looking at the sky.", type: "mindfulness", completed: false }
    ]
  };

  // Simulate LLM processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  return NextResponse.json({ game: mockGame });
}
