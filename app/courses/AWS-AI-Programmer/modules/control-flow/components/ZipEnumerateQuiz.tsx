'use client';

import React from 'react';
import { Terminal, Binary, Shuffle, ListOrdered, Grid3X3, BookOpen } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ZipEnumerateQuiz() {
  
  // Salidas calculadas para cada ejercicio
  const ex1Output = `['Model1: 0.95, 0.94, 0.93', 'Model2: 0.89, 0.88, 0.87', 'Model3: 0.92, 0.91, 0.91', 'Model4: 0.87, 0.86, 0.85', 'Model5: 0.93, 0.92, 0.91']
Good job!`;

  const ex2Output = `{'Model1': 0.95, 'Model2': 0.89, 'Model3': 0.92, 'Model4': 0.87, 'Model5': 0.93}
Good job!`;

  const ex3Output = `Unzipped Model Names: ('Model1', 'Model2', 'Model3', 'Model4', 'Model5')
Unzipped Accuracies: (0.95, 0.89, 0.92, 0.87, 0.93)
Good job!`;

  const ex4Output = `Transposed Matrix (3-by-4):
(0.95, 0.89, 0.92, 0.87)
(0.94, 0.88, 0.91, 0.86)
(0.93, 0.87, 0.9, 0.85)
Good job!`;

  const ex5Output = `Updated model_descriptions:
['Model1 Description 0.95', 'Model2 Description 0.89', 'Model3 Description 0.92', 'Model4 Description 0.87', 'Model5 Description 0.93']
Good job!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: AI, Zip, and Enumerate (Jupyter Lab Exercises)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Five exercises covering multi-sequence zipping, dictionary generation, tuple unzipping, matrix transposition, and in-place enumeration updates.
        </p>
      </div>

      {/* Ejercicio 1: Zip Model Metrics */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Binary className="text-cyan-400" size={15} />
          <span>Exercise 1: Zip Model Metrics</span>
        </div>
        <p className="text-xs text-slate-400">
          Pair parallel lists into formatted strings using <code className="text-cyan-300 font-mono">zip(model_names, accuracy, precision, recall)</code>.
        </p>

        <RunnablePythonCode
          code={`model_names = ["Model1", "Model2", "Model3", "Model4", "Model5"]
accuracy = [0.95, 0.89, 0.92, 0.87, 0.93]
precision = [0.94, 0.88, 0.91, 0.86, 0.92]
recall = [0.93, 0.87, 0.91, 0.85, 0.91]
model_metrics = []

for model, metric1, metric2, metric3 in zip(model_names, accuracy, precision, recall):
    model_metrics.append(f'{model}: {metric1}, {metric2}, {metric3}')

print(model_metrics)

# Notebook grading
correct_answer = [
    "Model1: 0.95, 0.94, 0.93",
    "Model2: 0.89, 0.88, 0.87",
    "Model3: 0.92, 0.91, 0.91",
    "Model4: 0.87, 0.86, 0.85",
    "Model5: 0.93, 0.92, 0.91"
]

if model_metrics == correct_answer:
    print("Good job!")
else:
    print("Oops! It doesn't look like the expected answer.")`}
          output={ex1Output}
        />
      </div>

      {/* Ejercicio 2: Zip Metrics to Dictionary */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <BookOpen className="text-purple-400" size={15} />
          <span>Exercise 2: Zip Metrics to Dictionary</span>
        </div>
        <p className="text-xs text-slate-400">
          Construct a key-value dictionary mapping model names to accuracies via dictionary comprehension with <code className="text-cyan-300 font-mono">zip()</code>.
        </p>

        <RunnablePythonCode
          code={`model_names = ["Model1", "Model2", "Model3", "Model4", "Model5"]
accuracies = [0.95, 0.89, 0.92, 0.87, 0.93]

model_performance = {model: accuracy for model, accuracy in zip(model_names, accuracies)}
print(model_performance)

# Notebook grading
correct_answer = {"Model1": 0.95, "Model2": 0.89, "Model3": 0.92, "Model4": 0.87, "Model5": 0.93}
if model_performance == correct_answer:
    print("Good job!")
else:
    print("Oops! It doesn't look like the expected answer.")`}
          output={ex2Output}
        />
      </div>

      {/* Ejercicio 3: Unzip Model Metrics */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Shuffle className="text-emerald-400" size={15} />
          <span>Exercise 3: Unzip Model Metrics with Asterisk (*)</span>
        </div>
        <p className="text-xs text-slate-400">
          Separate a tuple of pairs into two distinct tuples using unpacking: <code className="text-cyan-300 font-mono">zip(*model_performance)</code>.
        </p>

        <RunnablePythonCode
          code={`model_performance = (("Model1", 0.95), ("Model2", 0.89), ("Model3", 0.92), ("Model4", 0.87), ("Model5", 0.93))

# Unzip into two tuples
model_names, accuracies = zip(*model_performance)

print(f"Unzipped Model Names: {model_names}")
print(f"Unzipped Accuracies: {accuracies}")

# Notebook grading
correct_answer_names = ("Model1", "Model2", "Model3", "Model4", "Model5")
correct_answer_accuracies = (0.95, 0.89, 0.92, 0.87, 0.93)

if model_names == correct_answer_names and accuracies == correct_answer_accuracies:
    print("Good job!")
else:
    print("Oops! It doesn't look like the expected answer.")`}
          output={ex3Output}
        />
      </div>

      {/* Ejercicio 4: Transpose Metrics Matrix */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Grid3X3 className="text-amber-400" size={15} />
          <span>Exercise 4: Transpose Metrics Matrix (4-by-3 to 3-by-4)</span>
        </div>
        <p className="text-xs text-slate-400">
          Transpose a 4-by-3 matrix of evaluation scores into a 3-by-4 list of tuples with <code className="text-cyan-300 font-mono">list(zip(*metrics_data))</code>.
        </p>

        <RunnablePythonCode
          code={`metrics_data = (
    (0.95, 0.94, 0.93),
    (0.89, 0.88, 0.87),
    (0.92, 0.91, 0.90),
    (0.87, 0.86, 0.85)
)

# Transpose the matrix
metrics_data_transpose = [tuple(t) for t in zip(*metrics_data)]

print("Transposed Matrix (3-by-4):")
for row in metrics_data_transpose:
    print(row)

# Notebook grading
correct_answer = [
    (0.95, 0.89, 0.92, 0.87),
    (0.94, 0.88, 0.91, 0.86),
    (0.93, 0.87, 0.90, 0.85)
]

if metrics_data_transpose == correct_answer:
    print("Good job!")
else:
    print("Oops! It doesn't look like the expected answer.")`}
          output={ex4Output}
        />
      </div>

      {/* Ejercicio 5: Enumerate Model Performances */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ListOrdered className="text-cyan-400" size={15} />
          <span>Exercise 5: Enumerate Model Performances (In-Place Update)</span>
        </div>
        <p className="text-xs text-slate-400">
          Modify the original descriptions list in-place by indexing with <code className="text-cyan-300 font-mono">model_descriptions[index] = ...</code> using <code className="text-cyan-300 font-mono">enumerate()</code>.
        </p>

        <RunnablePythonCode
          code={`model_descriptions = [
    "Model1 Description",
    "Model2 Description",
    "Model3 Description",
    "Model4 Description",
    "Model5 Description"
]
accuracies = [0.95, 0.89, 0.92, 0.87, 0.93]

# Iterate and update each entry with its corresponding accuracy
for index, model in enumerate(model_descriptions):
    model_descriptions[index] = f"{model} {accuracies[index]}"

print("Updated model_descriptions:")
print(model_descriptions)

# Notebook grading
correct_answer = [
    "Model1 Description 0.95",
    "Model2 Description 0.89",
    "Model3 Description 0.92",
    "Model4 Description 0.87",
    "Model5 Description 0.93"
]

if model_descriptions == correct_answer:
    print("Good job!")
else:
    print("Oops! It doesn't look like the expected answer.")`}
          output={ex5Output}
        />
      </div>

    </div>
  );
}