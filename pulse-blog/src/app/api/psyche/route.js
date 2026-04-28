import { NextResponse } from 'next/server';

const PSYCHE_PROMPTS = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    question: "Look at the image above. What is the first situation or memory that comes to mind? Describe it in detail."
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    question: "If this image represented a conflict you are currently facing, what would it be?"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1605342416801-443b3552fc87?auto=format&fit=crop&w=800&q=80",
    question: "What emotion does the focal point of this image evoke? Write down your raw, unfiltered thoughts."
  }
];

export async function GET() {
  const shuffled = [...PSYCHE_PROMPTS].sort(() => 0.5 - Math.random());
  return NextResponse.json({ prompts: shuffled });
}

export async function POST(req) {
  const { responses } = await req.json();
  
  // Simulated LLM analysis of the free-text responses
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  const mockAnalysis = {
    dominantEmotion: "Reflective & Analytical",
    cognitivePatterns: [
      "High tendency to seek structure within chaotic environments.",
      "Underlying focus on resolving past or abstract conflicts.",
      "Empathetic language detected in projective descriptions."
    ],
    recommendation: "You are currently exhibiting a highly analytical psychological state. Engaging in unstructured physical activities or creative hobbies may help balance this cognitive load."
  };

  return NextResponse.json({ analysis: mockAnalysis });
}
