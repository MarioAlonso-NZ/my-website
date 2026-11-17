'use client';

import React, { useState } from 'react';
import { Edit3, Scissors, PlusSquare, ArrowDownToLine, Layers, HelpCircle, Code2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function AccessDeleteInsertNdarrays() {
  const [activeTab, setActiveTab] = useState<'access' | 'delete' | 'append' | 'stack'>('access');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Edit3 className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Manipulating Arrays: Access, Delete, Insert & Stack
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          NumPy ndarrays are <strong>mutable</strong>, meaning their elements can be changed after creation. You can access individual elements via indices, remove them, insert new ones, or even stack entire arrays together.
        </p>
      </div>

      {/* 2. Interactive Operation Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('access')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'access' ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Edit3 size={14} /> Access & Modify
          </button>
          <button 
            onClick={() => setActiveTab('delete')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'delete' ? 'border-b-2 border-rose-500 text-rose-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Scissors size={14} /> Delete
          </button>
          <button 
            onClick={() => setActiveTab('append')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'append' ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <PlusSquare size={14} /> Append & Insert
          </button>
          <button 
            onClick={() => setActiveTab('stack')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'stack' ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Layers size={14} /> Stacking
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[350px]">
          
          {/* TAB 1: Access & Modify */}
          {activeTab === 'access' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                You can access elements using positive indices (from the beginning) or negative indices (from the end). For 2D arrays, use the format <code className="text-emerald-300">[row, column]</code>. You can modify elements using the standard assignment operator <code>=</code>.
              </p>
              <RunnablePythonCode
                code={`import numpy as np

# 1D Array Access & Modify
x = np.array([1, 2, 3, 4, 5])
print("Original x =", x)
print("First element (positive):", x[0])
print("Last element (negative):", x[-1])

x[3] = 20 # Modify 4th element
print("\\nModified x =", x)

# 2D Array Access & Modify
X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("\\nElement at row 0, col 1:", X[0, 1])

X[0, 0] = 20 # Modify top-left element
print("Modified 2D Array:\\n", X)`}
                output={`Original x = [1 2 3 4 5]\nFirst element (positive): 1\nLast element (negative): 5\n\nModified x = [ 1  2  3 20  5]\n\nElement at row 0, col 1: 2\nModified 2D Array:\n [[20  2  3]\n [ 4  5  6]\n [ 7  8  9]]`}
              />
            </div>
          )}

          {/* TAB 2: Delete */}
          {activeTab === 'delete' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                The <code className="text-rose-300">np.delete(ndarray, elements, axis)</code> function removes elements. The <strong>axis</strong> keyword is crucial for 2D arrays: <code>axis=0</code> targets rows, and <code>axis=1</code> targets columns.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-rose-400 font-mono text-xs font-bold block mb-1">axis = 0</span>
                  <p className="text-xs text-slate-400">Deletes entire <strong>Rows</strong> (Horizontal cuts).</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-rose-400 font-mono text-xs font-bold block mb-1">axis = 1</span>
                  <p className="text-xs text-slate-400">Deletes entire <strong>Columns</strong> (Vertical cuts).</p>
                </div>
              </div>
              <RunnablePythonCode
                code={`import numpy as np

Y = np.array([[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]])

print("Original Y:\\n", Y)

# Delete the first row (index 0)
w = np.delete(Y, 0, axis=0)
print("\\nDeleted first row (axis=0):\\n", w)

# Delete first and last column (indices 0 and 2)
v = np.delete(Y, [0, 2], axis=1)
print("\\nDeleted 1st & 3rd columns (axis=1):\\n", v)`}
                output={`Original Y:\n [[1 2 3]\n [4 5 6]\n [7 8 9]]\n\nDeleted first row (axis=0):\n [[4 5 6]\n [7 8 9]]\n\nDeleted 1st & 3rd columns (axis=1):\n [[2]\n [5]\n [8]]`}
              />
            </div>
          )}

          {/* TAB 3: Append & Insert */}
          {activeTab === 'append' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                <code className="text-cyan-300">np.append()</code> adds elements to the <em>end</em> of the array. <code className="text-cyan-300">np.insert()</code> adds elements right <em>before</em> a specific index. Both require the <code>axis</code> parameter for 2D arrays.
              </p>
              <RunnablePythonCode
                code={`import numpy as np

x = np.array([1, 2, 3, 4, 5])
Y = np.array([[1, 2, 3], [4, 5, 6]])

# APPEND: Add 6, 7 to the end of 1D array
x_appended = np.append(x, [6, 7])
print("Appended 1D:\\n", x_appended)

# INSERT: Insert 3, 4 between 2 and 5 (at index 2)
x2 = np.array([1, 2, 5, 6, 7])
x_inserted = np.insert(x2, 2, [3, 4])
print("\\nInserted 1D (at index 2):\\n", x_inserted)

# APPEND 2D: Add a new row (axis=0)
v = np.append(Y, [[7, 8, 9]], axis=0)
print("\\nAppended new row (axis=0):\\n", v)`}
                output={`Appended 1D:\n [1 2 3 4 5 6 7]\n\nInserted 1D (at index 2):\n [1 2 3 4 5 6 7]\n\nAppended new row (axis=0):\n [[1 2 3]\n [4 5 6]\n [7 8 9]]`}
              />
            </div>
          )}

          {/* TAB 4: Stacking */}
          {activeTab === 'stack' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                You can combine existing arrays using <code className="text-purple-300">np.vstack()</code> (vertical stack, row-wise) or <code className="text-purple-300">np.hstack()</code> (horizontal stack, column-wise). <strong>Important:</strong> The shapes of the arrays must match along the stacking dimension.
              </p>
              <RunnablePythonCode
                code={`import numpy as np

x = np.array([1, 2])
Y = np.array([[3, 4], 
              [5, 6]])

# Vertical Stacking (x goes on top of Y)
z = np.vstack((x, Y))
print("Vertical Stack (vstack):\\n", z)

# Horizontal Stacking
# We must reshape 1D 'x' to be a 2D column vector (2x1) to match Y's rows
w = np.hstack((Y, x.reshape(2, 1)))
print("\\nHorizontal Stack (hstack):\\n", w)`}
                output={`Vertical Stack (vstack):\n [[1 2]\n [3 4]\n [5 6]]\n\nHorizontal Stack (hstack):\n [[3 4 1]\n [5 6 2]]`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}