'use client';

import React from 'react';
import { Layers, CheckCircle2, ShieldCheck, BoxSelect } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function MoreWhileLoopsQuiz() {
  
  // Salidas calculadas para cada ejercicio del notebook
  const ex1Output = `processed_images = 100
Good job!`;

  const ex2Output = `Case 1 (total >= batch): result = 100
Case 2 (total < batch): result = 10
Good job!`;

  const ex3Output = `limit = 50 -> nearest_batch = 36 (6 * 6)
Good job!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Layers className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: More on While Loops (Batch Processing & Square Search)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Simulate machine learning dataset batch processing, validate edge conditions when samples are smaller than batch size, and find maximal perfect square dimensions using while loops.
        </p>
      </div>

      {/* Ejercicio 1: Count Image Batches */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <BoxSelect className="text-cyan-400" size={15} />
          <span>Exercise 1: Count Image Batches</span>
        </div>
        <p className="text-xs text-slate-400">
          Simulate feeding image batches into a model until all dataset samples are processed, incrementing by <code className="text-cyan-300 font-mono">batch_size</code>.
        </p>

        <RunnablePythonCode
          code={`total_images = 100
batch_size = 20

processed_images = 0
while processed_images < total_images:
    processed_images += batch_size

print(f"processed_images = {processed_images}")

# Notebook grading check
def get_solution(total_images, batch_size):
    processed_images = 0
    while processed_images < total_images:
        processed_images += batch_size
    return processed_images

correct = get_solution(total_images, batch_size)

if processed_images == correct:
    print("Good job!")
else:
    print("Oops! It doesn't look like the expected answer.")`}
          output={ex1Output}
        />
      </div>

      {/* Ejercicio 2: Validate Batch Processing (Edge Case Handling) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ShieldCheck className="text-emerald-400" size={15} />
          <span>Exercise 2: Validate Batch Processing with Edge Cases</span>
        </div>
        <p className="text-xs text-slate-400">
          Handle datasets where <code className="text-cyan-300 font-mono">total_images &lt; batch_size</code> without overshooting the sample count.
        </p>

        <RunnablePythonCode
          code={`def process_batches(total_images, batch_size):
    if total_images < batch_size:
        return total_images
    else:
        processed_images = 0
        while processed_images < total_images:
            processed_images += batch_size
        return processed_images

# Case 1: Standard batching
result_1 = process_batches(100, 20)
print(f"Case 1 (total >= batch): result = {result_1}")

# Case 2: Fewer images than batch size
result_2 = process_batches(10, 20)
print(f"Case 2 (total < batch): result = {result_2}")

if result_1 == 100 and result_2 == 10:
    print("Good job!")
else:
    print("Oops! It doesn't look like the expected answer.")`}
          output={ex2Output}
        />
      </div>

      {/* Ejercicio 3: Find Nearest Batch Size (Largest Perfect Square) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <CheckCircle2 className="text-purple-400" size={15} />
          <span>Exercise 3: Find Nearest Batch Size (Square Search)</span>
        </div>
        <p className="text-xs text-slate-400">
          Find the largest batch size that is a perfect square strictly less than an integer limit using <code className="text-cyan-300 font-mono">(current_value + 1) ** 2 &lt; limit</code>.
        </p>

        <RunnablePythonCode
          code={`limit = 50
nearest_batch = 0
current_value = 0

while (current_value + 1) ** 2 < limit:
    current_value += 1
    nearest_batch = current_value ** 2

print(f"limit = {limit} -> nearest_batch = {nearest_batch} ({current_value} * {current_value})")

# Notebook grading check
def get_solution(limit):
    current_value = 0
    while (current_value + 1) ** 2 < limit:
        current_value += 1
        nearest_batch = current_value ** 2
    return nearest_batch

correct_ans = get_solution(limit)

if nearest_batch == correct_ans:
    print("Good job!")
else:
    print("Not quite. Did you assign your result to \`nearest_batch\`?")`}
          output={ex3Output}
        />
      </div>

    </div>
  );
}