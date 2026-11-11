// app/api/mock-question/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate network delay (like waiting for Python/LLM)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In the future, this array will come from your Supabase RAG system
  const mockQuestions = [
    "What is the difference between RAG and Fine-tuning?",
    "How does a vector database work?",
    "What is the primary purpose of embeddings?",
    "Explain the concept of a Context Window."
  ];

  const randomQuestion = mockQuestions[Math.floor(Math.random() * mockQuestions.length)];

  return NextResponse.json({ 
    question: randomQuestion,
    stage: 1 // We can send the stage to know which planet this belongs to
  });
}