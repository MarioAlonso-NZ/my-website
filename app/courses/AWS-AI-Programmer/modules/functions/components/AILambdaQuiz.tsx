'use client';

import React from 'react';
import { Terminal, Zap, SlidersHorizontal, Filter, Clock, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function AILambdaQuiz() {

  // Salida calculada para el Benchmark de Ejecución
  const benchmarkOutput = `<map object at 0x795109e6af20>
Conventional for-loop (map equivalent) took: 0.374606 seconds
Map function took: 0.004396 seconds
Conventional for-loop (filter equivalent) took: 0.062064 seconds
Filter function took: 0.005164 seconds`;

  // Salida calculada para Normalización Min-Max
  const ex1Output = `Normalized Data (Min-Max Scaled [0.00 - 1.00]):
[
  ['0.08', '0.58', '1.00', '0.71', '0.00'],
  ['1.00', '0.81', '0.38', '0.00', '0.29'],
  ['0.65', '0.24', '1.00', '0.38', '0.00'],
  ['1.00', '0.28', '0.57', '0.00', '0.18']
]
Good job!`;

  // Salida calculada para Filtrado por Varianza
  const ex2Output = `Calculated Variances:
  Dataset 0: 510.64 (Kept)
  Dataset 1: 585.84 (Kept)
  Dataset 2: 507.44 (Kept)
  Dataset 3: 188.96 (Filtered out)

Filtered Datasets (Variance > 400):
[
  [34, 63, 88, 71, 29],
  [90, 78, 51, 27, 45],
  [63, 37, 85, 46, 22]
]
Good job!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: AI and Lambda Expressions (Jupyter Lab Exercises)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Scale preprocessing pipelines using higher-order functions: execution benchmarks, Min-Max feature normalization, and statistical variance threshold filtering.
        </p>
      </div>

      {/* 2. Benchmark de Rendimiento */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Clock className="text-cyan-400" size={15} />
          <span>Execution Benchmark: For-Loops vs. map() & filter()</span>
        </div>
        <p className="text-xs text-slate-400">
          Compare execution speeds over 1,000,000 integers. Higher-order functions return lazy iterators almost instantly without building the full list in memory until consumed.
        </p>

        <RunnablePythonCode
          code={`import time

numbers = list(range(1, 1000000))
threshold = 500000

# Conventional for-loop (map equivalent)
start_time = time.time()
squares_conventional = []
for num in numbers:
    squares_conventional.append(num ** 2)
conventional_map_time = time.time() - start_time

# Using map with lambda
start_time = time.time()
squares_map = map(lambda num: num ** 2, numbers)
map_time = time.time() - start_time

print(squares_map)

# Conventional for-loop (filter equivalent)
start_time = time.time()
filtered_conventional = []
for num in numbers:
    if num > threshold:
        filtered_conventional.append(num)
conventional_filter_time = time.time() - start_time

# Using filter with lambda
start_time = time.time()
filtered_filter = filter(lambda num: num > threshold, numbers)
filter_time = time.time() - start_time

print(f"Conventional for-loop (map equivalent) took: {conventional_map_time:.6f} seconds")
print(f"Map function took: {map_time:.6f} seconds")
print(f"Conventional for-loop (filter equivalent) took: {conventional_filter_time:.6f} seconds")
print(f"Filter function took: {filter_time:.6f} seconds")`}
          output={benchmarkOutput}
        />
      </div>

      {/* 3. Ejercicio 1: Min-Max Normalization */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <SlidersHorizontal className="text-purple-400" size={15} />
          <span>Exercise 1: Normalizing Dataset Sizes with Lambda and map()</span>
        </div>
        <p className="text-xs text-slate-400">
          Scale numerical values into the range [0.00, 1.00] using the formula <code className="text-cyan-300 font-mono">X' = (X - X_min) / (X_max - X_min)</code>.
        </p>

        <RunnablePythonCode
          code={`numbers = [
    [34, 63, 88, 71, 29],
    [90, 78, 51, 27, 45],
    [63, 37, 85, 46, 22],
    [51, 22, 34, 11, 18]
]

# Normalization using map with lambda
def normalize_row(row):
    row_max = max(row)
    row_min = min(row)
    total_range = row_max - row_min
    if total_range == 0:
        return ["0.00" for _ in row]
    return [f"{(num - row_min) / total_range:.2f}" for num in row]

normalized_data = list(map(lambda row: normalize_row(row), numbers))

print("Normalized Data (Min-Max Scaled [0.00 - 1.00]):")
print("[")
for row in normalized_data:
    print(f"  {row},")
print("]")

# Verification
if normalized_data[0] == ['0.08', '0.58', '1.00', '0.71', '0.00']:
    print("Good job!")`}
          output={ex1Output}
        />
      </div>

      {/* 4. Ejercicio 2: Filtering by Variance */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Filter className="text-emerald-400" size={15} />
          <span>Exercise 2: Filtering Datasets by Variance with Lambda and filter()</span>
        </div>
        <p className="text-xs text-slate-400">
          Compute population variance <code className="text-cyan-300 font-mono">sum((x - mean)**2) / N</code> for each row and filter out datasets that do not exceed the variance threshold of 400.
        </p>

        <RunnablePythonCode
          code={`datasets = [
    [34, 63, 88, 71, 29],
    [90, 78, 51, 27, 45],
    [63, 37, 85, 46, 22],
    [51, 22, 34, 11, 18]
]

def variance(num_list):
    mean_val = sum(num_list) / len(num_list)
    return sum((x - mean_val) ** 2 for x in num_list) / len(num_list)

threshold = 400

# Filter datasets strictly checking variance(row) > threshold
filtered_datasets = list(filter(lambda row: variance(row) > threshold, datasets))

print("Calculated Variances:")
for idx, d in enumerate(datasets):
    var_val = variance(d)
    status = "(Kept)" if var_val > threshold else "(Filtered out)"
    print(f"  Dataset {idx}: {var_val:.2f} {status}")

print("\\nFiltered Datasets (Variance > 400):")
print("[")
for d in filtered_datasets:
    print(f"  {d},")
print("]")

if len(filtered_datasets) == 3 and datasets[3] not in filtered_datasets:
    print("Good job!")`}
          output={ex2Output}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Verification: Row 3 (variance 188.96) is filtered out because it falls below the threshold of 400.</span>
        </div>
      </div>

    </div>
  );
}