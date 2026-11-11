'use client';

import React from 'react';
import { Scissors, CheckCircle2, AlertCircle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function TweetFeatureSummary() {
  
  // Salida calculada para la solución del ejercicio en el notebook
  const tweetOutput = `Feature 1: High accuracy
Feature 2: Low latency
Feature 3: Scalability
Feature 4: Robustness
Feature 5: Interpretability
Summary Length: 120 characters
Well done!`;

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <h3 className="font-bold text-base">
            # Exercise: Feature Summary for Tweet (Character Limit Control)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Concatenate deep learning model feature descriptions into a single string summary for social media while preventing character overflow using string truncation and loop termination directives.
        </p>
      </div>

      {/* 2. Planteamiento y Restricciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. Input Collection</span>
          <p className="text-slate-400">List of 5 feature strings describing model qualities.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Delimiter Format</span>
          <p className="text-slate-400">Separate consecutive entries with newline characters (<code className="text-slate-300 font-mono">\n</code>).</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-rose-400 font-bold block">3. Hard Constraint</span>
          <p className="text-slate-400">Summary length must strictly satisfy <code className="text-rose-300 font-mono">len &lt;= 140</code> characters.</p>
        </div>
      </div>

      {/* 3. Bloque Ejecutable con RunnablePythonCode */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Scissors className="text-emerald-400" size={15} />
          <span>Python Implementation & Grading Check</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          Iterate through features, evaluate whether adding the next description exceeds 140 characters, apply string slicing if necessary, and terminate iteration via <code className="text-cyan-300 font-mono">break</code>.
        </p>

        <RunnablePythonCode
          code={`features = [
    "Feature 1: High accuracy",
    "Feature 2: Low latency",
    "Feature 3: Scalability",
    "Feature 4: Robustness",
    "Feature 5: Interpretability"
]

feature_summary = ""

# Iterate through features and concatenate with newline delimiters
for feature in features:
    # If adding the next feature exceeds 140 characters, truncate and break
    if len(feature_summary) + len(feature) + 1 > 140:
        if feature_summary:
            feature_summary += "\\n"
        feature_summary += feature[:140 - len(feature_summary)]
        break
    
    if feature_summary:
        feature_summary += "\\n"
    feature_summary += feature

print(feature_summary)
print(f"Summary Length: {len(feature_summary)} characters")

# Notebook grading check
def get_solution(features):
    summary = ""
    for feature in features:
        if len(summary) + len(feature) + 1 > 140:
            if summary:
                summary += "\\n"
            summary += feature[:140 - len(summary)]
            break
        if summary:
            summary += "\\n"
        summary += feature
    return summary

correct_ans = get_solution(features)

if feature_summary == correct_ans:
    print("Well done!")
else:
    print("Make sure you are inserting newlines between each feature and keeping within 140 chars.")`}
          output={tweetOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Output Verified: Exactly 120 characters generated without exceeding the 140-character threshold.</span>
        </div>
      </div>

    </div>
  );
}