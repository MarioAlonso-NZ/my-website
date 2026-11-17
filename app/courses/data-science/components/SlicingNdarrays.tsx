'use client';

import React, { useState } from 'react';
import { Scissors, Copy, ListChecks, Search, AlertTriangle, Code2, Grid3X3 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function SlicingNdarrays() {
  const [activeTab, setActiveTab] = useState<'basic' | 'views' | 'indices' | 'utils'>('basic');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Scissors className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Slicing ndarrays (Extracting Subsets)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Slicing allows you to access specific subsets of your arrays by combining indices with the colon <code className="text-emerald-300">:</code> symbol. In multidimensional arrays, you specify a slice for each dimension separated by a comma.
        </p>
      </div>

      {/* 2. Interactive Operation Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('basic')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'basic' ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Scissors size={14} /> Basic Slicing
          </button>
          <button 
            onClick={() => setActiveTab('views')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'views' ? 'border-b-2 border-rose-500 text-rose-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Copy size={14} /> Views vs Copies
          </button>
          <button 
            onClick={() => setActiveTab('indices')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'indices' ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <ListChecks size={14} /> Array Indexing
          </button>
          <button 
            onClick={() => setActiveTab('utils')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'utils' ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Search size={14} /> Diag & Unique
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[350px]">
          
          {/* TAB 1: Basic Slicing */}
          {activeTab === 'basic' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                There are three main ways to slice: <code className="text-emerald-300">[start:end]</code>, <code className="text-emerald-300">[start:]</code>, and <code className="text-emerald-300">[:end]</code>. Note that the <strong>end index is always excluded</strong>.
              </p>
              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded mb-4">
                <Grid3X3 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>Rank Note:</strong> Selecting a single column like <code>X[:, 2]</code> returns a 1D array (Rank 1). To keep it as a 2D column vector (Rank 2), use a slice range: <code>X[:, 2:3]</code>.
                </p>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

X = np.arange(20).reshape(4, 5)
print("Original X:\\n", X)

# Select rows 1 to 3, and columns 2 to 4 (Indices 1:4 and 2:5)
Z = X[1:4, 2:5]
print("\\nZ (Rows 1-3, Cols 2-4):\\n", Z)

# Select all elements in the 3rd column (Index 2) -> Returns Rank 1
q = X[:, 2]
print("\\nq (3rd column as 1D):", q)

# Select all elements in the 3rd column but keep it Rank 2
R = X[:, 2:3]
print("\\nR (3rd column as 2D):\\n", R)`}
                output={`Original X:\n [[ 0  1  2  3  4]\n [ 5  6  7  8  9]\n [10 11 12 13 14]\n [15 16 17 18 19]]\n\nZ (Rows 1-3, Cols 2-4):\n [[ 7  8  9]\n [12 13 14]\n [17 18 19]]\n\nq (3rd column as 1D): [ 2  7 12 17]\n\nR (3rd column as 2D):\n [[ 2]\n [ 7]\n [12]\n [17]]`}
              />
            </div>
          )}

          {/* TAB 2: Views vs Copies */}
          {activeTab === 'views' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-start gap-3 p-3 bg-rose-950/20 border border-rose-900/50 rounded mb-4">
                <AlertTriangle className="text-rose-400 shrink-0 mt-0.5" size={18} />
                <div className="space-y-1">
                  <span className="text-rose-400 font-semibold font-mono text-xs block">Crucial: Slices are VIEWS, not copies!</span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    When you slice an array (e.g., <code>Z = X[1:4]</code>), NumPy does <strong>not</strong> create a new array in memory. <code>Z</code> is just a "window" looking at <code>X</code>. If you modify <code>Z</code>, the original <code>X</code> will also change! To prevent this, you must explicitly use <code>np.copy()</code> or the <code>.copy()</code> method.
                  </p>
                </div>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

X = np.arange(20).reshape(4, 5)

# --- THE DANGER OF VIEWS ---
Z_view = X[1:4, 2:5]
Z_view[0, 0] = 555 # Modifying the slice...
print("X after modifying Z_view (It changed!):\\n", X)

# --- THE SAFE WAY: COPIES ---
X = np.arange(20).reshape(4, 5) # Reset X
W_copy = X[1:4, 2:5].copy() # Using .copy() method
W_copy[0, 0] = 444 # Modifying the copy...

print("\\nX after modifying W_copy (Remains unchanged):\\n", X)
print("\\nW_copy:\\n", W_copy)`}
                output={`X after modifying Z_view (It changed!):\n [[  0   1   2   3   4]\n [  5   6 555   8   9]\n [ 10  11  12  13  14]\n [ 15  16  17  18  19]]\n\nX after modifying W_copy (Remains unchanged):\n [[ 0  1  2  3  4]\n [ 5  6  7  8  9]\n [10 11 12 13 14]\n [15 16 17 18 19]]\n\nW_copy:\n [[444   8   9]\n [ 12  13  14]\n [ 17  18  19]]`}
              />
            </div>
          )}

          {/* TAB 3: Array Indexing */}
          {activeTab === 'indices' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Instead of using ranges, you can pass an entire list or 1D ndarray of specific indices to extract non-sequential rows or columns. This is extremely useful for randomly sampling data in Machine Learning.
              </p>
              <RunnablePythonCode
                code={`import numpy as np

X = np.arange(20).reshape(4, 5)
print("Original X:\\n", X)

# Array of specific indices we want to extract
indices = np.array([1, 3]) 

# Extract row 1 and row 3
Y = X[indices, :]
print("\\nRows 1 and 3:\\n", Y)

# Extract col 1 and col 3
Z = X[:, indices]
print("\\nCols 1 and 3:\\n", Z)`}
                output={`Original X:\n [[ 0  1  2  3  4]\n [ 5  6  7  8  9]\n [10 11 12 13 14]\n [15 16 17 18 19]]\n\nRows 1 and 3:\n [[ 5  6  7  8  9]\n [15 16 17 18 19]]\n\nCols 1 and 3:\n [[ 1  3]\n [ 6  8]\n [11 13]\n [16 18]]`}
              />
            </div>
          )}

          {/* TAB 4: Diag & Unique */}
          {activeTab === 'utils' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800 space-y-1">
                  <span className="text-purple-400 font-mono text-xs block">np.diag(array, k=0)</span>
                  <p className="text-xs text-slate-400">Extracts diagonal elements. <code>k=0</code> is the main diagonal. <code>{'k>0'}</code> is above, <code>k&lt;0</code> is below.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800 space-y-1">
                  <span className="text-purple-400 font-mono text-xs block">np.unique(array)</span>
                  <p className="text-xs text-slate-400">Scans the entire array and returns a sorted 1D array of the unique elements, removing duplicates.</p>
                </div>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

# --- DIAG ---
X = np.arange(25).reshape(5, 5)
print("Main Diagonal (k=0):", np.diag(X))
print("Above Diagonal (k=1):", np.diag(X, k=1))
print("Below Diagonal (k=-1):", np.diag(X, k=-1))

# --- UNIQUE ---
# Array with repeated values
Y = np.array([[1, 2, 3], 
              [5, 2, 8], 
              [1, 2, 3]])

print("\\nOriginal Array Y with duplicates:\\n", Y)
print("Unique elements:", np.unique(Y))`}
                output={`Main Diagonal (k=0): [ 0  6 12 18 24]\nAbove Diagonal (k=1): [ 1  7 13 19]\nBelow Diagonal (k=-1): [ 5 11 17 23]\n\nOriginal Array Y with duplicates:\n [[1 2 3]\n [5 2 8]\n [1 2 3]]\nUnique elements: [1 2 3 5 8]`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}