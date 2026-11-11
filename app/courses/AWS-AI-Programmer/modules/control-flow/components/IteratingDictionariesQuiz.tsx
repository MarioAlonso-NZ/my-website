'use client';

import React from 'react';
import { Terminal, CheckCircle2, Cpu, Filter, Layers, Calculator, Binary } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function IteratingDictionariesQuiz() {
  
  // Salidas calculadas para cada ejercicio del notebook
  const ex1Output = `result = 26
Nice work!`;

  const ex2Output = `Example 1 Result: 8
Example 2 Result: 7
Example 3 Result: 12`;

  const ex3Output = `model_count = 26
non_model_count = 8
Nice work!`;

  const ex4Output = `total_parameters = 600
Nice work!`;

  const ex5Output = `Updated categories: {'regression': 2, 'classification': 1, 'clustering': 1}
Nice work!`;

  const ex6Output = `Filtered models: {'model_a': 0.95, 'model_c': 0.85, 'model_d': 0.9}
Passing models count: 3
Nice work!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: AI and Iterating Through Dictionaries (Jupyter Lab Exercises)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Six practical exercises covering dictionary iteration, membership checks, dual-counter classification, aggregation, category grouping, and threshold filtering.
        </p>
      </div>

      {/* Ejercicio 1: Count Model Types */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Cpu className="text-cyan-400" size={15} />
          <span>Exercise 1: Count Model Types</span>
        </div>
        <p className="text-xs text-slate-400">
          Count the total count of specific model types in a dataset using membership test (<code className="text-cyan-300 font-mono">in</code>), skipping non-model items like <code className="text-rose-400 font-mono">'datasets'</code>.
        </p>

        <RunnablePythonCode
          code={`result = 0
model_counts = {
    'logistic_regression': 4,
    'decision_tree': 19,
    'random_forest': 3,
    'datasets': 8
}
model_types = ['logistic_regression', 'decision_tree', 'random_forest', 'support_vector_machine']

# Iterate through dictionary items
for key, value in model_counts.items():
    if key in model_types:
        result += value

print(f"result = {result}")

# Notebook grading check
def get_solution(counts, types):
    return sum(v for k, v in counts.items() if k in types)

if result == get_solution(model_counts, model_types):
    print("Nice work!")`}
          output={ex1Output}
        />
      </div>

      {/* Ejercicio 2: Validate Model Type Counting Function */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <CheckCircle2 className="text-emerald-400" size={15} />
          <span>Exercise 2: Validate Model Type Counting Across Multiple Datasets</span>
        </div>
        <p className="text-xs text-slate-400">
          Validate that your solution generalizes properly across diverse dictionary payloads.
        </p>

        <RunnablePythonCode
          code={`model_types = ['logistic_regression', 'decision_tree', 'random_forest', 'support_vector_machine']

# Example 1
dataset_1 = {'support_vector_machine': 5, 'neural_network': 19, 'random_forest': 3, 'datasets': 8, 'linear_regression': 4}
result_1 = sum(v for k, v in dataset_1.items() if k in model_types)
print(f"Example 1 Result: {result_1}")

# Example 2
dataset_2 = {'naive_bayes': 5, 'k_means': 2, 'random_forest': 3, 'datasets': 8, 'decision_tree': 4}
result_2 = sum(v for k, v in dataset_2.items() if k in model_types)
print(f"Example 2 Result: {result_2}")

# Example 3
dataset_3 = {'k_means': 2, 'datasets': 3, 'support_vector_machine': 8, 'logistic_regression': 4, 'pandas': 10}
result_3 = sum(v for k, v in dataset_3.items() if k in model_types)
print(f"Example 3 Result: {result_3}")`}
          output={ex2Output}
        />
      </div>

      {/* Ejercicio 3: Count Model Types and Other Items */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Binary className="text-purple-400" size={15} />
          <span>Exercise 3: Dual Counting (Model Types vs. Non-Models)</span>
        </div>
        <p className="text-xs text-slate-400">
          Maintain two independent running sums using an <code className="text-cyan-300 font-mono">if / else</code> block during key-value iteration.
        </p>

        <RunnablePythonCode
          code={`model_count = 0
non_model_count = 0

model_counts = {
    'logistic_regression': 4,
    'decision_tree': 19,
    'random_forest': 3,
    'datasets': 8
}
model_types = ['logistic_regression', 'decision_tree', 'random_forest', 'support_vector_machine']

for key, value in model_counts.items():
    if key in model_types:
        model_count += value
    else:
        non_model_count += value

print(f"model_count = {model_count}")
print(f"non_model_count = {non_model_count}")

if model_count == 26 and non_model_count == 8:
    print("Nice work!")`}
          output={ex3Output}
        />
      </div>

      {/* Ejercicio 4: Calculate Total Model Parameters */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Calculator className="text-cyan-400" size={15} />
          <span>Exercise 4: Calculate Total Model Parameters</span>
        </div>
        <p className="text-xs text-slate-400">
          Sum up network parameter counts for matching architectures.
        </p>

        <RunnablePythonCode
          code={`model_parameters = {
    'logistic_regression': 100,
    'decision_tree': 200,
    'random_forest': 300,
    'datasets': 50
}
model_types = ['logistic_regression', 'decision_tree', 'random_forest', 'support_vector_machine']
total_parameters = 0

for model, params in model_parameters.items():
    if model in model_types:
        total_parameters += params

print(f"total_parameters = {total_parameters}")

if total_parameters == 600:
    print("Nice work!")`}
          output={ex4Output}
        />
      </div>

      {/* Ejercicio 5: Separate Models by Type */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Layers className="text-amber-400" size={15} />
          <span>Exercise 5: Group and Categorize Models by Machine Learning Task</span>
        </div>
        <p className="text-xs text-slate-400">
          Iterate over model classifications and increment frequency counts in a categories tracking dictionary.
        </p>

        <RunnablePythonCode
          code={`model_info = {
    'model_a': 'regression',
    'model_b': 'classification',
    'model_c': 'clustering',
    'model_d': 'regression'
}
model_categories = {'regression': 0, 'classification': 0, 'clustering': 0}

for model, category in model_info.items():
    if category in model_categories:
        model_categories[category] += 1

print(f"Updated categories: {model_categories}")

if model_categories == {'regression': 2, 'classification': 1, 'clustering': 1}:
    print("Nice work!")`}
          output={ex5Output}
        />
      </div>

      {/* Ejercicio 6: Filter Models by Accuracy */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Filter className="text-emerald-400" size={15} />
          <span>Exercise 6: Filter Deep Learning Models by Accuracy Threshold</span>
        </div>
        <p className="text-xs text-slate-400">
          Filter a dictionary to retain only models meeting or exceeding <code className="text-cyan-300 font-mono">accuracy_threshold &gt;= 0.85</code> and count qualifying entries.
        </p>

        <RunnablePythonCode
          code={`model_accuracies = {
    'model_a': 0.95,
    'model_b': 0.80,
    'model_c': 0.85,
    'model_d': 0.90
}
accuracy_threshold = 0.85
filtered_models = {}
count = 0

for model, accuracy in model_accuracies.items():
    if accuracy >= accuracy_threshold:
        filtered_models[model] = accuracy
        count += 1

print(f"Filtered models: {filtered_models}")
print(f"Passing models count: {count}")

if count == 3 and 'model_b' not in filtered_models:
    print("Nice work!")`}
          output={ex6Output}
        />
      </div>

    </div>
  );
}