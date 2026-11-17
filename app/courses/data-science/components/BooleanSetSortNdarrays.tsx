'use client';

import React, { useState } from 'react';
import { Filter, Combine, ArrowDownWideNarrow, AlertTriangle, Code2, HelpCircle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function BooleanSetSortNdarrays() {
  const [activeTab, setActiveTab] = useState<'boolean' | 'sets' | 'sort'>('boolean');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Filter className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Boolean Indexing, Sets, and Sorting
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          When you don't know the exact indices of the elements you want, you can select them using logical arguments, compare arrays using set theory, and sort your data efficiently.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('boolean')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'boolean' ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Filter size={14} /> Boolean Indexing
          </button>
          <button 
            onClick={() => setActiveTab('sets')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'sets' ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Combine size={14} /> Set Operations
          </button>
          <button 
            onClick={() => setActiveTab('sort')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'sort' ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <ArrowDownWideNarrow size={14} /> Sorting
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Boolean Indexing */}
          {activeTab === 'boolean' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Boolean indexing allows you to select elements using logical arguments (e.g., <code className="text-emerald-300">{'X > 10'}</code>). You can combine conditions using the <code className="text-emerald-300">&</code> (AND) or <code className="text-emerald-300">|</code> (OR) operators. It is also extremely useful for assigning new values to elements that meet a specific condition.
              </p>
              <RunnablePythonCode
                code={`import numpy as np

X = np.arange(25).reshape(5, 5)

print("Elements greater than 10:")
print(X[X > 10])

print("\\nElements between 10 and 17:")
print(X[(X > 10) & (X < 17)])

# Assigning new values using Boolean Indexing
X[(X > 10) & (X < 17)] = -1
print("\\nX after modifying elements between 10 and 17:\\n", X)`}
                output={`Elements greater than 10:\n[11 12 13 14 15 16 17 18 19 20 21 22 23 24]\n\nElements between 10 and 17:\n[11 12 13 14 15 16]\n\nX after modifying elements between 10 and 17:\n [[ 0  1  2  3  4]\n [ 5  6  7  8  9]\n [10 -1 -1 -1 -1]\n [-1 -1 17 18 19]\n [20 21 22 23 24]]`}
              />
            </div>
          )}

          {/* TAB 2: Set Operations */}
          {activeTab === 'sets' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                NumPy provides functions to compare 1D ndarrays, similar to mathematical set theory. This is useful for finding common elements or unique differences between two datasets.
              </p>
              <ul className="text-xs font-mono text-slate-400 space-y-2 bg-slate-900/50 p-3 rounded border border-slate-800 mb-4">
                <li><span className="text-cyan-400">np.intersect1d(x, y)</span> - Elements in BOTH x and y.</li>
                <li><span className="text-cyan-400">np.setdiff1d(x, y)</span> - Elements in x that are NOT in y.</li>
                <li><span className="text-cyan-400">np.union1d(x, y)</span> - ALL unique elements from both x and y.</li>
              </ul>
              <RunnablePythonCode
                code={`import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([6, 7, 2, 8, 4])

print("x =", x)
print("y =", y)

print("\\nIntersection (both in x and y):")
print(np.intersect1d(x, y))

print("\\nDifference (in x but not in y):")
print(np.setdiff1d(x, y))

print("\\nUnion (all unique elements):")
print(np.union1d(x, y))`}
                output={`x = [1 2 3 4 5]\ny = [6 7 2 8 4]\n\nIntersection (both in x and y):\n[2 4]\n\nDifference (in x but not in y):\n[1 3 5]\n\nUnion (all unique elements):\n[1 2 3 4 5 6 7 8]`}
              />
            </div>
          )}

          {/* TAB 3: Sorting */}
          {activeTab === 'sort' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-start gap-3 p-3 bg-amber-950/20 border border-amber-900/50 rounded">
                <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <div className="space-y-1">
                  <span className="text-amber-400 font-semibold font-mono text-xs block">Function vs Method (Out of place vs In place)</span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Using <code className="text-amber-300">np.sort(x)</code> is a <strong>function</strong> that returns a sorted <em>copy</em> (out of place). Using <code className="text-amber-300">x.sort()</code> is a <strong>method</strong> that sorts the array <em>in place</em>, modifying the original variable forever.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">axis = 0 ("Down")</span>
                  <p className="text-xs text-slate-400">Sorts elements vertically within each <strong>Column</strong>.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">axis = 1 ("Across")</span>
                  <p className="text-xs text-slate-400">Sorts elements horizontally within each <strong>Row</strong>.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import numpy as np

# --- Out of Place vs In Place ---
x = np.array([9, 6, 4, 7])
sorted_x = np.sort(x) # Out of place
print("np.sort() returns:", sorted_x)
print("But original x is intact:", x)

x.sort() # In place
print("After x.sort(), original is changed:", x)

# --- Sorting 2D Arrays with Axis ---
X = np.array([[6, 1, 7], 
              [3, 9, 8], 
              [2, 5, 4]])

print("\\nSorted by Columns (axis=0):\\n", np.sort(X, axis=0))
print("\\nSorted by Rows (axis=1):\\n", np.sort(X, axis=1))`}
                output={`np.sort() returns: [4 6 7 9]\nBut original x is intact: [9 6 4 7]\nAfter x.sort(), original is changed: [4 6 7 9]\n\nSorted by Columns (axis=0):\n [[2 1 4]\n [3 5 7]\n [6 9 8]]\n\nSorted by Rows (axis=1):\n [[1 6 7]\n [3 8 9]\n [2 4 5]]`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}