'use client';

import React, { useState } from 'react';
import { List, Layers, Search, Info, GitCompare } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function CreatingPandasSeries() {
  const [activeTab, setActiveTab] = useState<'vs-ndarray' | 'attributes' | 'membership'>('vs-ndarray');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <List className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Creating Pandas Series (vs. NumPy ndarrays)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          A <strong>Pandas Series</strong> is a one-dimensional, array-like object built on top of NumPy. Unlike standard NumPy <code className="text-emerald-300">ndarrays</code>, a Series lets you assign custom axis labels to every element and store multiple data types in the same structure.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('vs-ndarray')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'vs-ndarray' 
                ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <GitCompare size={14} /> 1. Series vs. ndarrays
          </button>
          <button 
            onClick={() => setActiveTab('attributes')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'attributes' 
                ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Layers size={14} /> 2. Series Attributes
          </button>
          <button 
            onClick={() => setActiveTab('membership')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'membership' 
                ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Search size={14} /> 3. Checking Index Labels
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Series vs. ndarrays */}
          {activeTab === 'vs-ndarray' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Create a Series using <code className="text-emerald-300">pd.Series(data, index)</code>. While it inherits NumPy&apos;s speed and array foundation, it introduces two major upgrades over a standard 1D <code className="text-emerald-300">ndarray</code>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 rounded border border-emerald-500/30">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">1. Custom Index Labels</span>
                  <p className="text-xs text-slate-400">Instead of being limited to integer positions (<code className="text-slate-300">0, 1, 2...</code>), you can name each index anything you want (e.g., <code className="text-slate-300">&apos;eggs&apos;</code>, <code className="text-slate-300">&apos;milk&apos;</code>).</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">2. Mixed Data Types</span>
                  <p className="text-xs text-slate-400">A single Series can hold integers, strings, and other types together (resulting in <code className="text-slate-300">dtype: object</code>), whereas NumPy ndarrays coerce elements into one uniform type.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

# Create a Pandas Series storing a grocery list with custom index labels
groceries = pd.Series(
    data=[30, 6, 'Yes', 'No'],
    index=['eggs', 'apples', 'milk', 'bread']
)

# Display the Series (indices on the left, data on the right)
print(groceries)`}
                output={`eggs       30\napples      6\nmilk      Yes\nbread      No\ndtype: object`}
              />
            </div>
          )}

          {/* TAB 2: Series Attributes */}
          {activeTab === 'attributes' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Because a Series is built on NumPy, it shares core structural attributes like <code className="text-cyan-300">.shape</code>, <code className="text-cyan-300">.ndim</code>, and <code className="text-cyan-300">.size</code>, while adding <code className="text-cyan-300">.values</code> and <code className="text-cyan-300">.index</code> to inspect data and labels separately.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">NumPy-Inherited Attributes</span>
                  <p className="text-xs text-slate-400"><code className="text-slate-200">.shape</code> (dimensions tuple), <code className="text-slate-200">.ndim</code> (always <code className="text-slate-200">1</code>), and <code className="text-slate-200">.size</code> (total element count).</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">Label &amp; Data Separation</span>
                  <p className="text-xs text-slate-400"><code className="text-slate-200">.values</code> returns the raw underlying array; <code className="text-slate-200">.index</code> returns the <code className="text-slate-200">Index</code> object of labels.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

groceries = pd.Series(data=[30, 6, 'Yes', 'No'], index=['eggs', 'apples', 'milk', 'bread'])

# Structural attributes
print('Groceries has shape:', groceries.shape)
print('Groceries has dimension:', groceries.ndim)
print('Groceries has a total of', groceries.size, 'elements')

# Separate data and index labels
print('\\nThe data in Groceries is:', groceries.values)
print('The index of Groceries is:', groceries.index)`}
                output={`Groceries has shape: (4,)\nGroceries has dimension: 1\nGroceries has a total of 4 elements\n\nThe data in Groceries is: [30 6 'Yes' 'No']\nThe index of Groceries is: Index(['eggs', 'apples', 'milk', 'bread'], dtype='object')`}
              />
            </div>
          )}

          {/* TAB 3: Checking Index Labels */}
          {activeTab === 'membership' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                When working with large Pandas Series where you cannot visually inspect every label, use Python&apos;s <code className="text-purple-300">in</code> operator to check whether a specific index label exists.
              </p>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-purple-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>Important:</strong> Using <code className="text-purple-300">label in series</code> checks the <strong>index labels</strong>, not the data values (similar to checking keys in a Python dictionary).
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

groceries = pd.Series(data=[30, 6, 'Yes', 'No'], index=['eggs', 'apples', 'milk', 'bread'])

# Check whether specific index labels exist in Groceries
x = 'bananas' in groceries
y = 'bread' in groceries

print('Is bananas an index label in Groceries:', x)
print('Is bread an index label in Groceries:', y)`}
                output={`Is bananas an index label in Groceries: False\nIs bread an index label in Groceries: True`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}