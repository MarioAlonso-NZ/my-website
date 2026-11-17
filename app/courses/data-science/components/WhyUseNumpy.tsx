'use client';

import React from 'react';
import { Zap, Grid3X3, Calculator, BookOpen, Clock, Code2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function WhyUseNumpy() {
  
  // Salida simulada del código comparativo del video
  const performanceOutput = `--- Standard Python ---
Mean: 0.4999742
Time: 0.8523142 seconds

--- NumPy ---
Mean: 0.4999742
Time: 0.0120531 seconds

Conclusion: NumPy was approximately 70x faster!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Zap className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Why Use NumPy Instead of Python Lists?
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          While standard Python lists are versatile, NumPy is the foundational package for scientific computing in Python. It is so powerful that other major libraries, like Pandas, are built directly on top of it.
        </p>
      </div>

      {/* 2. Beneficios Principales */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          Key Benefits of NumPy
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Speed */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
              <Clock size={16} />
              <span>1. Blazing Speed</span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              When performing operations on large arrays, NumPy can be several orders of magnitude faster than Python lists. This is due to memory-efficient C-based arrays and optimized algorithms for arithmetic and statistical operations.
            </p>
          </div>

          {/* Multidimensional Arrays */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
              <Grid3X3 size={16} />
              <span>2. Matrices & Vectors</span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              It provides multidimensional array data structures. Machine learning algorithms (like Neural Networks) rely heavily on matrix multiplications, and NumPy is highly optimized for these Linear Algebra operations.
            </p>
          </div>

          {/* Built-in Functions */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
              <Calculator size={16} />
              <span>3. Built-in Math</span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              NumPy has a massive library of optimized built-in mathematical functions. You can execute complex computations with very little code, completely avoiding the need for slow, complicated <code>for</code> loops.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Demostración de Rendimiento (Código del video) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-emerald-400" size={15} />
          <span>Performance Test: Python Lists vs NumPy Arrays</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This code from the lesson calculates the mean of 100,000,000 random numbers to demonstrate the sheer speed difference.
        </p>

        <RunnablePythonCode
          code={`import time
import numpy as np

# Generate 100 million random numbers
x = np.random.random(100000000)

print("--- Standard Python ---")
start = time.time()
mean_python = sum(x) / len(x)
print("Mean:", mean_python)
print("Time:", time.time() - start, "seconds\\n")

print("--- NumPy ---")
start = time.time()
mean_numpy = np.mean(x)
print("Mean:", mean_numpy)
print("Time:", time.time() - start, "seconds")`}
          output={performanceOutput}
        />
      </div>

      {/* 4. Recursos Recomendados */}
      <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-3 mt-4">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
          <BookOpen size={16} />
          <span>Recommended Reading & Resources</span>
        </div>
        <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
          <li>
            <strong>Research Article:</strong> <a href="https://hal.inria.fr/inria-00564007/en" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">The NumPy array: a structure for efficient numerical computation</a> by Walt et. al., 2011.
          </li>
          <li>
            <strong>Official Documentation:</strong> Get in the habit of referring to the <a href="https://numpy.org/doc/stable/user/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NumPy User Guide</a> whenever you need a numerical utility function.
          </li>
        </ul>
      </div>

    </div>
  );
}