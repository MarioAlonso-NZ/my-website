'use client';

import React, { useState } from 'react';
import { Calculator, BarChart2, Radio, Info, Code2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ArithmeticBroadcastingNdarrays() {
  const [activeTab, setActiveTab] = useState<'arithmetic' | 'stats' | 'broadcasting'>('arithmetic');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Calculator className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Arithmetic Operations and Broadcasting
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          NumPy allows for blazing-fast element-wise operations and matrix mathematics. When arrays have different shapes, NumPy uses a feature called <strong>Broadcasting</strong> to align them automatically.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('arithmetic')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'arithmetic' ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Calculator size={14} /> Basic Arithmetic
          </button>
          <button 
            onClick={() => setActiveTab('stats')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'stats' ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <BarChart2 size={14} /> Math & Stats
          </button>
          <button 
            onClick={() => setActiveTab('broadcasting')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'broadcasting' ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Radio size={14} /> Broadcasting
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Basic Arithmetic */}
          {activeTab === 'arithmetic' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                You can perform element-wise addition, subtraction, multiplication, and division between ndarrays. You can use standard arithmetic symbols (e.g., <code className="text-emerald-300">+</code>) or NumPy's functional approach (e.g., <code className="text-emerald-300">np.add()</code>). The functional approach allows for more advanced keyword tweaking.
              </p>
              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded mb-4">
                <Info className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Both arrays <strong>must have the exact same shape</strong> or be broadcastable to perform these element-wise operations.
                </p>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

X = np.array([[1, 2], [3, 4]])
Y = np.array([[5.5, 6.5], [7.5, 8.5]])

print("X =\\n", X)
print("Y =\\n", Y)

# Using symbols vs functions
print("\\nX + Y =\\n", X + Y)
print("np.add(X,Y) =\\n", np.add(X, Y))

print("\\nX * Y =\\n", X * Y)`}
                output={`X =\n [[1 2]\n [3 4]]\nY =\n [[ 5.5  6.5]\n [ 7.5  8.5]]\n\nX + Y =\n [[  6.5   8.5]\n [ 10.5  12.5]]\nnp.add(X,Y) =\n [[  6.5   8.5]\n [ 10.5  12.5]]\n\nX * Y =\n [[  5.5  13. ]\n [ 22.5  34. ]]`}
              />
            </div>
          )}

          {/* TAB 2: Math & Stats */}
          {activeTab === 'stats' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                NumPy provides mathematical functions that apply to all elements at once (like <code className="text-cyan-300">np.sqrt()</code> or <code className="text-cyan-300">np.exp()</code>), and statistical functions (like <code className="text-cyan-300">mean()</code>, <code className="text-cyan-300">max()</code>, <code className="text-cyan-300">std()</code>).
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">.mean(axis = 0)</span>
                  <p className="text-xs text-slate-400">Calculates the mean of elements across <strong>Columns</strong>.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">.mean(axis = 1)</span>
                  <p className="text-xs text-slate-400">Calculates the mean of elements across <strong>Rows</strong>.</p>
                </div>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

X = np.array([[1, 2], [3, 4]])
print("Original X:\\n", X)

# Math
print("\\nSQRT(X) =\\n", np.sqrt(X))

# Stats
print("\\nAverage of ALL elements:", X.mean())
print("Average of columns (axis=0):", X.mean(axis=0))
print("Average of rows (axis=1):", X.mean(axis=1))
print("Sum of all elements:", X.sum())`}
                output={`Original X:\n [[1 2]\n [3 4]]\n\nSQRT(X) =\n [[1.         1.41421356]\n [1.73205081 2.        ]]\n\nAverage of ALL elements: 2.5\nAverage of columns (axis=0): [2. 3.]\nAverage of rows (axis=1): [1.5 3.5]\nSum of all elements: 10`}
              />
            </div>
          )}

          {/* TAB 3: Broadcasting */}
          {activeTab === 'broadcasting' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                <strong>Broadcasting</strong> is how NumPy handles operations between arrays of different shapes. For example, if you multiply a 2D matrix by a single number (a scalar), NumPy seamlessly "broadcasts" that number across every element. It can also broadcast 1D arrays across 2D arrays if their dimensions are compatible.
              </p>
              <RunnablePythonCode
                code={`import numpy as np

Y = np.array([[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]])
              
# 1. Broadcasting a Scalar (Single Number)
print("3 * Y =\\n", 3 * Y)
print("\\nY - 3 =\\n", Y - 3)

# 2. Broadcasting a 1D array across a 2D array
x = np.array([1, 2, 3]) # Shape (3,)
print("\\nx + Y =\\n", x + Y)`}
                output={`3 * Y =\n [[ 3  6  9]\n [12 15 18]\n [21 24 27]]\n\nY - 3 =\n [[-2 -1  0]\n [ 1  2  3]\n [ 4  5  6]]\n\nx + Y =\n [[ 2  4  6]\n [ 5  7  9]\n [ 8 10 12]]`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}