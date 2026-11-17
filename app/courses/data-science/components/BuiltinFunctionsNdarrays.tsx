'use client';

import React, { useState } from 'react';
import { Settings2, ListOrdered, LayoutGrid, Dices, Terminal, HelpCircle, AlertTriangle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function BuiltinFunctionsNdarrays() {
  const [activeTab, setActiveTab] = useState<'constants' | 'sequences' | 'reshape' | 'random'>('constants');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Header */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Settings2 className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Using Built-in Functions to Create ndarrays
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          NumPy provides heavily optimized built-in functions to generate arrays from scratch, saving you from writing nested loops. We can categorize these into constants, sequences, shape-modifiers, and random number generators.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('constants')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'constants' ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Settings2 size={14} /> Constants & Matrices
          </button>
          <button 
            onClick={() => setActiveTab('sequences')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'sequences' ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <ListOrdered size={14} /> Sequences
          </button>
          <button 
            onClick={() => setActiveTab('reshape')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'reshape' ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <LayoutGrid size={14} /> Reshaping
          </button>
          <button 
            onClick={() => setActiveTab('random')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'random' ? 'border-b-2 border-amber-500 text-amber-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Dices size={14} /> Randomness
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[300px]">
          
          {/* TAB 1: Constants */}
          {activeTab === 'constants' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Create arrays filled with specific values or generate Linear Algebra matrices. Notice that <code>zeros</code>, <code>ones</code>, and <code>eye</code> default to <code>float64</code> unless you specify a <code>dtype</code>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <ul className="text-xs font-mono text-slate-400 space-y-2 bg-slate-900/50 p-3 rounded border border-slate-800">
                  <li><span className="text-emerald-400">np.zeros((rows, cols))</span> - Fills with 0s.</li>
                  <li><span className="text-emerald-400">np.ones((rows, cols))</span> - Fills with 1s.</li>
                  <li><span className="text-emerald-400">np.full((rows, cols), X)</span> - Fills with X.</li>
                </ul>
                <ul className="text-xs font-mono text-slate-400 space-y-2 bg-slate-900/50 p-3 rounded border border-slate-800">
                  <li><span className="text-emerald-400">np.eye(N)</span> - N x N Identity Matrix.</li>
                  <li><span className="text-emerald-400">np.diag([a,b,c])</span> - Diagonal Matrix.</li>
                </ul>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

print("Zeros:")
print(np.zeros((2, 3)))

print("\\nFull of Fives:")
print(np.full((2, 2), 5))

print("\\nIdentity Matrix (eye):")
print(np.eye(3))`}
                output={`Zeros:\n[[0. 0. 0.]\n [0. 0. 0.]]\n\nFull of Fives:\n[[5 5]\n [5 5]]\n\nIdentity Matrix (eye):\n[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]`}
              />
            </div>
          )}

          {/* TAB 2: Sequences */}
          {activeTab === 'sequences' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Generate evenly spaced intervals. Use <code>arange</code> for integer steps (like standard Python ranges), and use <code>linspace</code> when you need an exact number of fractional elements between two bounds.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 bg-slate-900/50 p-3 rounded border border-slate-800 space-y-1">
                  <span className="text-cyan-400 font-mono text-xs block">np.arange(start, stop, step)</span>
                  <p className="text-xs text-slate-400">Stop value is <strong>exclusive</strong>. Best for integers.</p>
                </div>
                <div className="flex-1 bg-slate-900/50 p-3 rounded border border-slate-800 space-y-1">
                  <span className="text-cyan-400 font-mono text-xs block">np.linspace(start, stop, N)</span>
                  <p className="text-xs text-slate-400">Stop value is <strong>inclusive</strong>. Best for generating N floating-point numbers.</p>
                </div>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

print("arange (4 to 9, step 1):")
print(np.arange(4, 10))

print("\\narange (1 to 13, step 3):")
print(np.arange(1, 14, 3))

print("\\nlinspace (0 to 25, exactly 10 numbers):")
print(np.linspace(0, 25, 10))`}
                output={`arange (4 to 9, step 1):\n[4 5 6 7 8 9]\n\narange (1 to 13, step 3):\n[ 1  4  7 10 13]\n\nlinspace (0 to 25, exactly 10 numbers):\n[ 0.          2.77777778  5.55555556  8.33333333 11.11111111\n 13.88888889 16.66666667 19.44444444 22.22222222 25.        ]`}
              />
            </div>
          )}

          {/* TAB 3: Reshaping */}
          {activeTab === 'reshape' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                You can change the shape of an array without changing its data using <code>reshape</code>. It can be called as a standalone function or directly as a method on the array.
              </p>
              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded mb-4">
                <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>The Size Rule:</strong> The new shape must have the exact same total number of elements as the original. You can reshape a 20-element 1D array into a <code>4x5</code> matrix, but not into a <code>3x3</code> matrix (which only holds 9 elements).
                </p>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

# Method Chaining: Create 1D array of 20, immediately shape to 4x5
Y = np.arange(20).reshape(4, 5)

print("Y =")
print(Y)
print(f"\\nDimensions (Rank): {Y.ndim} | Shape: {Y.shape}")`}
                output={`Y =\n[[ 0  1  2  3  4]\n [ 5  6  7  8  9]\n [10 11 12 13 14]\n [15 16 17 18 19]]\n\nDimensions (Rank): 2 | Shape: (4, 5)`}
              />
            </div>
          )}

          {/* TAB 4: Randomness */}
          {activeTab === 'random' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Random ndarrays are critical in Machine Learning (e.g., initializing weights in Neural Networks). NumPy offers multiple distributions within its <code>np.random</code> module.
              </p>
              <ul className="text-xs font-mono text-slate-400 space-y-2 bg-slate-900/50 p-3 rounded border border-slate-800 mb-4">
                <li><span className="text-amber-400">np.random.random(shape)</span> - Floats between [0.0, 1.0)</li>
                <li><span className="text-amber-400">np.random.randint(start, stop, size)</span> - Integers between [start, stop)</li>
                <li><span className="text-amber-400">np.random.normal(mean, std, size)</span> - Gaussian/Normal distribution</li>
              </ul>
              <RunnablePythonCode
                code={`import numpy as np

print("Random Integers (between 4 and 14):")
print(np.random.randint(4, 15, size=(3, 2)))

print("\\nNormal Distribution (Mean=0, StdDev=0.1):")
X = np.random.normal(0, 0.1, size=(2, 2))
print(X)`}
                output={`Random Integers (between 4 and 14):\n[[ 7 11]\n [ 9 11]\n [ 6  7]]\n\nNormal Distribution (Mean=0, StdDev=0.1):\n[[-0.04643974  0.08856722]\n [-0.02096011 -0.02946155]]`}
              />
            </div>
          )}

        </div>
      </div>

    </div>
  );
}