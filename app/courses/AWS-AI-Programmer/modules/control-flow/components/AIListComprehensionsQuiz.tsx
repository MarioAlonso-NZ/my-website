'use client';

import React from 'react';
import { Terminal, FileText, TrendingDown, Filter, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function AIListComprehensionsQuiz() {
  
  // Salida calculada para el Ejercicio 1 (Extract Model Acronyms)
  const ex1Output = `['LR', 'DT', 'RF', 'SVM', 'NB']
Good job!`;

  // Salida calculada para el Ejercicio 2 (Learning Rate Decay)
  const ex2Output = `['0.100000', '0.010000', '0.001000', '0.000100', '0.000010', '0.000001']
Good job!`;

  // Salida calculada para el Ejercicio 3 (Filter Models by Performance)
  const ex3Output = `['Logistic Regression', 'Random Forest', 'Naive Bayes']
Good job!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: AI and List Comprehensions (Jupyter Lab Exercises)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Apply list comprehensions to extract model acronysm, simulate multiplicative learning rate decay, and filter high-performing architectures.
        </p>
      </div>

      {/* Ejercicio 1: Extract Model Acronyms */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <FileText className="text-cyan-400" size={15} />
          <span>Exercise 1: Extract Model Acronyms</span>
        </div>
        <p className="text-xs text-slate-400">
          Extract the first letter of each word in model names, uppercase them, and join them into acronym strings using a nested comprehension: <code className="text-cyan-300 font-mono">["".join([w[0] for w in model.split()]) for model in models]</code>.
        </p>

        <RunnablePythonCode
          code={`models = [
    "Logistic Regression",
    "Decision Tree",
    "Random Forest",
    "Support Vector Machine",
    "Naive Bayes"
]

# Nested list comprehension to extract and join initials
model_acronyms = ["".join([word[0] for word in model.split()]) for model in models]
print(model_acronyms)

# Notebook grading check
correct_answer = ['LR', 'DT', 'RF', 'SVM', 'NB']
if model_acronyms == correct_answer:
    print("Good job!")
else:
    print("Not quite! Did you create the acronyms correctly?")`}
          output={ex1Output}
        />
      </div>

      {/* Ejercicio 2: Learning Rate Decay */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <TrendingDown className="text-purple-400" size={15} />
          <span>Exercise 2: Multiplicative Learning Rate Decay Schedule</span>
        </div>
        <p className="text-xs text-slate-400">
          Compute the decaying learning rates across the initial 6 steps (<code className="text-cyan-300 font-mono">range(6)</code>) using exponentiation <code className="text-cyan-300 font-mono">initial_lr * (decay_factor ** i)</code> and format each to 6 decimal places.
        </p>

        <RunnablePythonCode
          code={`initial_lr = 0.1
decay_factor = 0.1

# Generate learning rates exponentially and format to 6 decimals
learning_rates = [format(initial_lr * (decay_factor ** i), '.6f') for i in range(6)]
print(learning_rates)

# Notebook grading check
correct_answer = ['0.100000', '0.010000', '0.001000', '0.000100', '0.000010', '0.000001']
if learning_rates == correct_answer:
    print("Good job!")
else:
    print("Not quite! Are you sure the decay factor is applied correctly for each step?")`}
          output={ex2Output}
        />
      </div>

      {/* Ejercicio 3: Filter Models by Performance */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Filter className="text-emerald-400" size={15} />
          <span>Exercise 3: Filter Models by Performance Threshold (&gt;= 85%)</span>
        </div>
        <p className="text-xs text-slate-400">
          Filter a dictionary's keys using an inline condition over dictionary values: <code className="text-cyan-300 font-mono">[m for m in model_performances if model_performances[m] &gt;= 85]</code>.
        </p>

        <RunnablePythonCode
          code={`model_performances = {
    "Logistic Regression": 90,
    "Decision Tree": 75,
    "Random Forest": 92,
    "Support Vector Machine": 80,
    "Naive Bayes": 88
}

# List comprehension with filtering condition
passed_models = [model for model in model_performances if model_performances[model] >= 85]
print(passed_models)

# Notebook grading check
correct_answer = ['Logistic Regression', 'Random Forest', 'Naive Bayes']
if passed_models == correct_answer:
    print("Good job!")
else:
    print("Not quite! Did you use the corresponding performance to filter each model?")`}
          output={ex3Output}
        />
      </div>

    </div>
  );
}