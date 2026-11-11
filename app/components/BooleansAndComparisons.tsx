'use client';

import React from 'react';
import PrecisionRecallDialog from './PrecisionRecallDialog';
import RunnablePythonCode from './RunnablePythonCode'; // <-- Import the runnable component

export default function BooleansAndComparisons() {
  
  const pythonOutput = `Model 1 Precision: 0.83
Model 1 Recall: 0.91
Model 2 Precision: 0.90
Model 2 Recall: 0.82
Is Model 1 precision higher than Model 2? False
Is Model 1 recall higher than Model 2? True`;

  const pythonCode = `# Model 1 metrics
model1_tp = 50
model1_fp = 10
model1_fn = 5

# Model 2 metrics
model2_tp = 45
model2_fp = 5
model2_fn = 10

# Calculate precision and recall for Model 1
model1_precision = model1_tp / (model1_tp + model1_fp)
model1_recall = model1_tp / (model1_tp + model1_fn)

# Calculate precision and recall for Model 2
model2_precision = model2_tp / (model2_tp + model2_fp)
model2_recall = model2_tp / (model2_tp + model2_fn)

# Compare performance using comparison operators
precision_comparison_result = model1_precision > model2_precision
recall_comparison_result = model1_recall > model2_recall

# Output the results
print(f"Model 1 Precision: {model1_precision:.2f}")
print(f"Model 1 Recall: {model1_recall:.2f}")
print(f"Model 2 Precision: {model2_precision:.2f}")
print(f"Model 2 Recall: {model2_recall:.2f}")
print(f"Is Model 1 precision higher than Model 2? {precision_comparison_result}")
print(f"Is Model 1 recall higher than Model 2? {recall_comparison_result}")`;

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">

      {/* Introducción */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="space-y-3">
          <h3 className="font-bold text-white text-base"># Quiz: Comparing Precision and Recall</h3>
          <p className="text-xs text-slate-400">
            In this exercise, we gain practical experience evaluating machine learning model performance using precision and recall, especially important when dealing with imbalanced datasets.
          </p>
        </div>
        {/* The Dialog Button */}
        <PrecisionRecallDialog />
      </div>

      {/* Escenario */}
      <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">Scenario</h4>
        <p className="text-xs text-slate-300">
          We are evaluating two machine learning models based on their performance metrics:
        </p>
        <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 font-mono">
          <li><span className="text-white font-semibold">Model 1:</span> 50 true positives, 10 false positives, 5 false negatives</li>
          <li><span className="text-white font-semibold">Model 2:</span> 45 true positives, 5 false positives, 10 false negatives</li>
        </ul>
      </div>

      {/* Bloque de Código de Solución (Now Runnable!) */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-purple-400">Python Implementation & Logic</h4>
        
        <RunnablePythonCode 
          code={pythonCode} 
          output={pythonOutput} 
        />
        
      </div>

    </div>
  );
}