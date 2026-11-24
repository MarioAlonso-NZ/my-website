'use client';

import React, { useState } from 'react';
import { Table2, Layers, Filter, ListTree, Info, AlertCircle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function CreatingPandasDataFrames() {
  const [activeTab, setActiveTab] = useState<'dict-series' | 'attributes-subset' | 'other-methods'>('dict-series');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Table2 className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Creating Pandas DataFrames
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          A <strong>Pandas DataFrame</strong> is a two-dimensional, spreadsheet-like table with labeled rows and columns capable of holding multiple data types. One of the most powerful ways to build a DataFrame manually is a two-step workflow: first assembling a <strong>dictionary of Pandas Series</strong>, then passing it to <code className="text-emerald-300">pd.DataFrame()</code>.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('dict-series')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'dict-series' 
                ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Table2 size={14} /> 1. Dict of Series → DataFrame
          </button>
          <button 
            onClick={() => setActiveTab('attributes-subset')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'attributes-subset' 
                ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Layers size={14} /> 2. Attributes &amp; Subsetting
          </button>
          <button 
            onClick={() => setActiveTab('other-methods')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'other-methods' 
                ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <ListTree size={14} /> 3. Dict of Lists &amp; List of Dicts
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Dict of Series -> DataFrame */}
          {activeTab === 'dict-series' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Building a DataFrame from a <strong>dictionary of Pandas Series</strong> is a clean, two-step process:
              </p>

              {/* Two-Step Visual Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 rounded border border-emerald-500/30">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">Step 1: Build a Dictionary of Series</span>
                  <p className="text-xs text-slate-400">Each dictionary <strong>key</strong> becomes a column name (e.g., <code className="text-slate-200">&apos;Alice&apos;</code>, <code className="text-slate-200">&apos;Bob&apos;</code>), and each value is a <code className="text-slate-200">pd.Series</code> holding prices and item index labels.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">Step 2: Convert with pd.DataFrame()</span>
                  <p className="text-xs text-slate-400">Pandas builds the row index from the <strong>union</strong> of all Series indices and aligns values automatically—inserting <code className="text-slate-200">NaN</code> wherever a column lacks a matching row label.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-950/20 border border-amber-500/30 rounded">
                <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Why <code className="text-amber-300">NaN</code> Appears:</strong> <code className="text-amber-300">NaN</code> (<em>Not a Number</em>) marks missing entries—for example, Alice didn&apos;t buy a <code className="text-slate-200">watch</code> and Bob didn&apos;t buy a <code className="text-slate-200">book</code> or <code className="text-slate-200">glasses</code>. Before feeding data into an ML model, you will clean or impute these <code className="text-amber-300">NaN</code> values. If you omit Series index labels, Pandas defaults to <code className="text-slate-200">0, 1, 2...</code>.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

# STEP 1: Create a dictionary of Pandas Series
items = {
    'Alice': pd.Series(data=[40, 110, 500, 45], index=['book', 'glasses', 'bike', 'pants']),
    'Bob': pd.Series(data=[245, 25, 55], index=['bike', 'pants', 'watch'])
}

print("Type of items:", type(items))

# STEP 2: Convert the dictionary into a Pandas DataFrame
shopping_carts = pd.DataFrame(items)

print("\\nshopping_carts DataFrame:\\n", shopping_carts)`}
                output={`Type of items: <class 'dict'>\n\nshopping_carts DataFrame:\n          Alice    Bob\nbike     500.0  245.0\nbook      40.0    NaN\nglasses  110.0    NaN\npants     45.0   25.0\nwatch      NaN   55.0`}
              />
            </div>
          )}

          {/* TAB 2: Attributes & Subsetting */}
          {activeTab === 'attributes-subset' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Inspect a DataFrame&apos;s structure using NumPy-like attributes (<code className="text-cyan-300">.shape</code>, <code className="text-cyan-300">.ndim</code>, <code className="text-cyan-300">.size</code>, <code className="text-cyan-300">.values</code>) plus <code className="text-cyan-300">.index</code> and <code className="text-cyan-300">.columns</code>. You can also filter which rows or columns enter the DataFrame at creation time using the <code className="text-cyan-300">index</code> and <code className="text-cyan-300">columns</code> keywords.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">columns=[&apos;Bob&apos;]</span>
                  <p className="text-xs text-slate-400">Creates a DataFrame containing only the specified column(s) from the dictionary.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">index=[&apos;glasses&apos;, &apos;bike&apos;]</span>
                  <p className="text-xs text-slate-400">Restricts the DataFrame to only the requested row labels (combinable with <code className="text-slate-200">columns</code>).</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

items = {
    'Alice': pd.Series(data=[40, 110, 500, 45], index=['book', 'glasses', 'bike', 'pants']),
    'Bob': pd.Series(data=[245, 25, 55], index=['bike', 'pants', 'watch'])
}
shopping_carts = pd.DataFrame(items)

# 1. Inspect DataFrame attributes
print('Shape:', shopping_carts.shape, '| Dim:', shopping_carts.ndim, '| Size:', shopping_carts.size)
print('Row index:', shopping_carts.index)
print('Columns:', shopping_carts.columns)

# 2. Subset specific rows and columns during creation
alice_sel = pd.DataFrame(items, index=['glasses', 'bike'], columns=['Alice'])
print('\\nSelected items for Alice:\\n', alice_sel)`}
                output={`Shape: (5, 2) | Dim: 2 | Size: 10\nRow index: Index(['bike', 'book', 'glasses', 'pants', 'watch'], dtype='object')\nColumns: Index(['Alice', 'Bob'], dtype='object')\n\nSelected items for Alice:\n          Alice\nglasses    110\nbike       500`}
              />
            </div>
          )}

          {/* TAB 3: Dict of Lists & List of Dicts */}
          {activeTab === 'other-methods' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Beyond dictionaries of Series, you can also construct DataFrames manually from a <strong>dictionary of lists</strong> (where every list must have the exact same length) or a <strong>list of Python dictionaries</strong> (where each dictionary represents a row).
              </p>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-purple-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Neither plain lists nor Python dictionaries carry built-in row labels, so Pandas assigns <code className="text-purple-300">0, 1, 2...</code> by default unless you pass custom labels via <code className="text-purple-300">index=[...]</code>.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

# Method A: Dictionary of equal-length lists + custom row labels
data = {'Floats': [4.5, 8.2, 9.6], 'Integers': [1, 2, 3]}
df_lists = pd.DataFrame(data, index=['label 1', 'label 2', 'label 3'])
print("From dict of lists:\\n", df_lists)

# Method B: List of dictionaries (each dict = 1 row) + custom row labels
items2 = [
    {'bikes': 20, 'pants': 30, 'watches': 35},
    {'watches': 10, 'glasses': 50, 'bikes': 15, 'pants': 5}
]
store_items = pd.DataFrame(items2, index=['store 1', 'store 2'])
print("\\nFrom list of dicts:\\n", store_items)`}
                output={`From dict of lists:\n          Floats  Integers\nlabel 1     4.5         1\nlabel 2     8.2         2\nlabel 3     9.6         3\n\nFrom list of dicts:\n          bikes  pants  watches  glasses\nstore 1     20     30       35      NaN\nstore 2     15      5       10     50.0`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}