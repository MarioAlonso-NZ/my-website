'use client';

import React from 'react';
import { Zap, GitCompare, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function LambdaExpressions() {

  // Salida calculada para la comparativa def vs lambda
  const compOutput = `def multiply(4, 7):    28
lambda multiply(4, 7): 28`;

  // Salida calculada para Higher-Order Functions (map, filter, sorted)
  const higherOrderOutput = `Squared features (map):
  [4, 9, 16, 25]

High-performing models (filter >= 0.90):
  [('ResNet', 0.92), ('EfficientNet', 0.95)]

Sorted by loss ascending (sorted key):
  [('Model A', 0.12), ('Model C', 0.25), ('Model B', 0.45)]`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Zap className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Lambda Expressions (Anonymous Functions)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Anonymous, inline functions defined on the fly without a formal identifier name, particularly useful when passed into higher-order functions.
        </p>
      </div>

      {/* 2. Anatomía de una Función Lambda */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Sparkles className="text-purple-400" size={15} />
          <span>Components of a Lambda Function</span>
        </div>
        <p className="text-xs text-slate-400">
          A lambda expression is defined with three structured components:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
            <span className="text-cyan-400 font-bold block">1. lambda keyword</span>
            <p className="text-slate-400">Signals to the Python interpreter that an anonymous function is being constructed.</p>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
            <span className="text-purple-400 font-bold block">2. Arguments + Colon (:)</span>
            <p className="text-slate-400">Comma-separated parameters (e.g., <code className="text-slate-300 font-mono">x, y:</code>) evaluated at call time.</p>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
            <span className="text-emerald-400 font-bold block">3. Evaluated Expression</span>
            <p className="text-slate-400">Single expression whose evaluated outcome is implicitly returned (no <code className="text-slate-300 font-mono">return</code> keyword).</p>
          </div>
        </div>
      </div>

      {/* 3. Comparativa: def vs. lambda */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <GitCompare className="text-cyan-400" size={15} />
          <span>Comparison: Standard def Function vs. Lambda Expression</span>
        </div>
        <p className="text-xs text-slate-400">
          Both declarations evaluate identically, but lambda compresses a multiline routine down to a concise single-line assignment.
        </p>

        <RunnablePythonCode
          code={`# Standard def function
def multiply_def(x, y):
    return x * y

# Anonymous lambda function assigned to a variable
multiply_lambda = lambda x, y: x * y

# Both are called identically
result_def = multiply_def(4, 7)
result_lambda = multiply_lambda(4, 7)

print(f"def multiply(4, 7):    {result_def}")
print(f"lambda multiply(4, 7): {result_lambda}")`}
          output={compOutput}
        />
      </div>

      {/* 4. Higher-Order Functions en Pipelines de AI */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Filter className="text-emerald-400" size={15} />
          <span>Higher-Order Functions in AI: map(), filter(), and sorted()</span>
        </div>
        <p className="text-xs text-slate-400">
          Lambdas shine when supplied directly as callable arguments to functions without littering global scope with single-use names.
        </p>

        <RunnablePythonCode
          code={`# 1. map(): Transform feature inputs
features = [2, 3, 4, 5]
squared_features = list(map(lambda x: x ** 2, features))
print("Squared features (map):")
print(f"  {squared_features}")

# 2. filter(): Retain models exceeding accuracy threshold
models = [('ResNet', 0.92), ('MobileNet', 0.88), ('EfficientNet', 0.95), ('AlexNet', 0.84)]
passing_models = list(filter(lambda m: m[1] >= 0.90, models))
print("\\nHigh-performing models (filter >= 0.90):")
print(f"  {passing_models}")

# 3. sorted(): Sort architectures by loss ascending
model_losses = [('Model B', 0.45), ('Model A', 0.12), ('Model C', 0.25)]
sorted_by_loss = sorted(model_losses, key=lambda item: item[1])
print("\\nSorted by loss ascending (sorted key):")
print(f"  {sorted_by_loss}")`}
          output={higherOrderOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-cyan-400" />
          <span>Best Practice: Use lambda for short expressions passed to higher-order functions. For complex or multi-statement logic, define a standard function with def.</span>
        </div>
      </div>

    </div>
  );
}