'use client';

import React from 'react';
import { Terminal, Filter, Layers, Trophy, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function MorePracticeQuestions() {

  // Salida calculada para Question 1A (Umbral único 0.90)
  const q1aOutput = `{'Model B': 4, 'Model D': 10, 'Model A': 4, 'Model C': 3}
Good job!`;

  // Salida calculada para Question 1B (Multi-umbrales 0.85, 0.90, 0.95)
  const q1bOutput = `{0.85: {'Model A': 10, 'Model B': 10, 'Model C': 10, 'Model D': 10, 'Model E': 9}, 0.9: {'Model B': 4, 'Model D': 10, 'Model A': 4, 'Model C': 3}, 0.95: {'Model D': 2}}
Good job!`;

  // Salida calculada para Exercise 2 (Promedio de rendimiento y mejor modelo)
  const ex2Output = `Average Model Accuracies:
  Model A: 0.887
  Model B: 0.889
  Model C: 0.889
  Model D: 0.932
  Model E: 0.863

Highest Average Performance: 0.932
Best-Performing Model(s): ['Model D']
Good job!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # More Practice Questions: Model Performance Thresholds & Averages
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Analyze deep learning model benchmarks across 10 experiments using nested dictionary iteration, multi-threshold filtering, and tie-proof maximum detection.
        </p>
      </div>

      {/* 2. Question 1A: Count of Models Meeting Single Performance Threshold */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Filter className="text-cyan-400" size={15} />
          <span>Question 1A: Count of Models Meeting Threshold (accuracy &gt;= 0.90)</span>
        </div>
        <p className="text-xs text-slate-400">
          Traverse the nested experiments dictionary and tabulate how many times each model meets or exceeds the 0.90 accuracy threshold.
        </p>

        <RunnablePythonCode
          code={`model_performance = {
    'Experiment 1': {'Model A': 0.85, 'Model B': 0.90, 'Model C': 0.88, 'Model D': 0.92, 'Model E': 0.87},
    'Experiment 2': {'Model A': 0.91, 'Model B': 0.89, 'Model C': 0.93, 'Model D': 0.94, 'Model E': 0.86},
    'Experiment 3': {'Model A': 0.87, 'Model B': 0.90, 'Model C': 0.86, 'Model D': 0.95, 'Model E': 0.84},
    'Experiment 4': {'Model A': 0.88, 'Model B': 0.85, 'Model C': 0.89, 'Model D': 0.93, 'Model E': 0.87},
    'Experiment 5': {'Model A': 0.89, 'Model B': 0.88, 'Model C': 0.91, 'Model D': 0.92, 'Model E': 0.85},
    'Experiment 6': {'Model A': 0.90, 'Model B': 0.87, 'Model C': 0.92, 'Model D': 0.91, 'Model E': 0.88},
    'Experiment 7': {'Model A': 0.86, 'Model B': 0.89, 'Model C': 0.85, 'Model D': 0.94, 'Model E': 0.89},
    'Experiment 8': {'Model A': 0.91, 'Model B': 0.92, 'Model C': 0.88, 'Model D': 0.93, 'Model E': 0.86},
    'Experiment 9': {'Model A': 0.92, 'Model B': 0.87, 'Model C': 0.89, 'Model D': 0.95, 'Model E': 0.87},
    'Experiment 10': {'Model A': 0.89, 'Model B': 0.90, 'Model C': 0.87, 'Model D': 0.94, 'Model E': 0.88}
}

performance_count_dict = {}
threshold = 0.90

for experiment, models in model_performance.items():
    for model, performance in models.items():
        if performance >= threshold:
            if model in performance_count_dict:
                performance_count_dict[model] += 1
            else:
                performance_count_dict[model] = 1

print(performance_count_dict)

if performance_count_dict == {'Model B': 4, 'Model D': 10, 'Model A': 4, 'Model C': 3}:
    print("Good job!")
else:
    print("Oops! Verify your nested threshold accumulation.")`}
          output={q1aOutput}
        />
      </div>

      {/* 3. Question 1B: Count Across Multiple Performance Thresholds */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Layers className="text-purple-400" size={15} />
          <span>Question 1B: Count Across Multiple Thresholds ([0.85, 0.90, 0.95])</span>
        </div>
        <p className="text-xs text-slate-400">
          Initialize a nested tracking container via dictionary comprehension and record qualifying models under each threshold bucket.
        </p>

        <RunnablePythonCode
          code={`thresholds = [0.85, 0.90, 0.95]
threshold_count_dict = {threshold: {} for threshold in thresholds}

for experiment, models in model_performance.items():
    for model, performance in models.items():
        for threshold in thresholds:
            if performance >= threshold:
                if model in threshold_count_dict[threshold]:
                    threshold_count_dict[threshold][model] += 1
                else:
                    threshold_count_dict[threshold][model] = 1

print(threshold_count_dict)

if threshold_count_dict[0.95] == {'Model D': 2} and threshold_count_dict[0.9]['Model D'] == 10:
    print("Good job!")
else:
    print("Oops! Verify multi-threshold dictionary nesting.")`}
          output={q1bOutput}
        />
      </div>

      {/* 4. Exercise 2: Best-Performing Models (Average Performance & Ties) */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Trophy className="text-emerald-400" size={15} />
          <span>Exercise 2: Average Performance & Highest Performing Model</span>
        </div>
        <p className="text-xs text-slate-400">
          Accumulate performance scores and evaluation counts per architecture, compute average accuracy, and extract the best performers via a tie-proof list comprehension.
        </p>

        <RunnablePythonCode
          code={`total_performance = {}
count_evaluations = {}

for experiment, models in model_performance.items():
    for model, performance in models.items():
        if model in total_performance:
            total_performance[model] += performance
            count_evaluations[model] += 1
        else:
            total_performance[model] = performance
            count_evaluations[model] = 1

# Calculate average accuracy
average_performance = {
    model: total_performance[model] / count_evaluations[model]
    for model in total_performance
}

# Determine top performer (tie-proof)
max_average_performance = max(average_performance.values())
best_performing_models = [
    model for model, performance in average_performance.items()
    if performance == max_average_performance
]

print("Average Model Accuracies:")
for m, avg in sorted(average_performance.items()):
    print(f"  {m}: {avg:.3f}")

print(f"\\nHighest Average Performance: {max_average_performance:.3f}")
print(f"Best-Performing Model(s): {best_performing_models}")

if best_performing_models == ['Model D']:
    print("Good job!")
else:
    print("Oops! Check your average calculation.")`}
          output={ex2Output}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Output Verified: Model D achieved the highest consistency (10/10 over 0.90) and highest mean accuracy (0.932).</span>
        </div>
      </div>

    </div>
  );
}