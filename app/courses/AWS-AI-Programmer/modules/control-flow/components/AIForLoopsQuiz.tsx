'use client';

import React from 'react';
import { Terminal, Code2, Tag, ListOrdered, FileCode } from 'lucide-react';

export default function AIForLoopsQuiz() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: AI and For Loops (Jupyter Lab Exercises)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Four practical exercises on string manipulation, in-place list modification with indices, prefix filtering, and dynamic HTML formatting using for loops.
        </p>
      </div>

      {/* Ejercicio 1: Create Model Identifiers */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Exercise 1: Create Model Identifiers</span>
        </div>
        <p className="text-xs text-slate-400">
          Iterate over a list of model names, convert each name to lowercase, replace spaces with underscores, and append it to a new list.
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`model_names = ["Logistic Regression", "Decision Tree", "Random Forest", "Support Vector Machine"]
model_identifiers = []

for name in model_names:
    model_identifiers.append(name.lower().replace(" ", "_"))

print(model_identifiers)
# Output: ['logistic_regression', 'decision_tree', 'random_forest', 'support_vector_machine']`}
        </pre>
      </div>

      {/* Ejercicio 2: Modify Model Identifiers with Range */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ListOrdered className="text-purple-400" size={15} />
          <span>Exercise 2: Modify Model Identifiers with range()</span>
        </div>
        <p className="text-xs text-slate-400">
          Modify the original list in-place using index iteration with <code className="text-cyan-300 font-mono">range(len(model_identifiers))</code>.
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`model_identifiers = ["Logistic Regression", "Decision Tree", "Random Forest", "Support Vector Machine"]

for i in range(len(model_identifiers)):
    model_identifiers[i] = model_identifiers[i].lower().replace(" ", "_")

print(model_identifiers)
# Output: ['logistic_regression', 'decision_tree', 'random_forest', 'support_vector_machine']`}
        </pre>
      </div>

      {/* Ejercicio 3: Prediction Tag Counter */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Tag className="text-emerald-400" size={15} />
          <span>Exercise 3: Prediction Tag Counter</span>
        </div>
        <p className="text-xs text-slate-400">
          Iterate over strings and count occurrences that match the target prefix using <code className="text-cyan-300 font-mono">.startswith("Predicted:")</code>.
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`predictions = ['Predicted: 0.95', 'Actual: 0.90', 'Predicted: 0.85']
count = 0

for prediction in predictions:
    if prediction.startswith("Predicted:"):
        count += 1

print(f"Total Predictions: {count}")
# Output: Total Predictions: 2`}
        </pre>
      </div>

      {/* Ejercicio 4: Create an HTML List of Model Metrics */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <FileCode className="text-amber-400" size={15} />
          <span>Exercise 4: Create an HTML List of Model Metrics</span>
        </div>
        <p className="text-xs text-slate-400">
          Iterate over benchmark metrics to dynamically construct a formatted HTML unordered list string.
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`metrics = ['Accuracy: 0.95', 'Precision: 0.92', 'Recall: 0.88']
html_str = "<ul>\\n"

for metric in metrics:
    html_str += "<li>{}</li>\\n".format(metric)

html_str += "</ul>"

print(html_str)
# Output:
# <ul>
# <li>Accuracy: 0.95</li>
# <li>Precision: 0.92</li>
# <li>Recall: 0.88</li>
# </ul>`}
        </pre>
      </div>

    </div>
  );
}