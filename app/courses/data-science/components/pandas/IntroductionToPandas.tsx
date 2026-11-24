'use client';

import React, { useState } from 'react';
import { Table, Database, Layers, Info, Terminal } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function IntroductionToPandas() {
  const [activeTab, setActiveTab] = useState<'overview' | 'structures' | 'setup'>('overview');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Table className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Introduction to Pandas
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          <strong>Pandas</strong> (derived from the econometrics term <em>Panel Data</em>) is Python&apos;s premier package for data manipulation and analysis. Built on top of NumPy, it introduces labeled, relational data structures that make cleaning, exploring, and analyzing tabular datasets intuitive.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Database size={14} /> 1. Why Pandas?
          </button>
          <button 
            onClick={() => setActiveTab('structures')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'structures' 
                ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Layers size={14} /> 2. Series vs. DataFrame
          </button>
          <button 
            onClick={() => setActiveTab('setup')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'setup' 
                ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Terminal size={14} /> 3. Environment & Setup
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Why Pandas? */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                While NumPy excels at fast numerical math on homogeneous arrays, real-world datasets contain mixed types (text, dates, integers, floats), descriptive column headers, and missing values (<code className="text-emerald-300">NaN</code>). Pandas bridges that gap.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">Labeled Indexing</span>
                  <p className="text-xs text-slate-400">Access rows and columns by meaningful names (e.g., <code className="text-slate-300">&apos;Price&apos;</code>, <code className="text-slate-300">&apos;Date&apos;</code>) rather than raw integer positions alone.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">Missing Data & I/O</span>
                  <p className="text-xs text-slate-400">Built-in tools to load CSV/Excel/SQL files and clean or impute <code className="text-slate-300">NaN</code> values effortlessly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>Prerequisite Note:</strong> Because Pandas is built directly on top of NumPy, concepts like broadcasting, element-wise operations, and axis aggregations carry over directly.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd
import numpy as np

print("Pandas version:", pd.__version__)

# Quick preview: labeled tabular data with mixed types
data = {
    'Library': ['NumPy', 'Pandas', 'Matplotlib'],
    'Core_Structure': ['ndarray', 'DataFrame', 'Figure'],
    'Release_Year': [2006, 2008, 2003]
}

df = pd.DataFrame(data)
print("\\n", df)`}
                output={`Pandas version: 2.2.0\n\n       Library Core_Structure  Release_Year\n0       NumPy        ndarray          2006\n1      Pandas      DataFrame          2008\n2  Matplotlib         Figure          2003`}
              />
            </div>
          )}

          {/* TAB 2: Series vs. DataFrame */}
          {activeTab === 'structures' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Pandas adds two primary data structures to Python: the 1-dimensional <code className="text-cyan-300">Series</code> and the 2-dimensional <code className="text-cyan-300">DataFrame</code>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 rounded border border-cyan-500/30">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">pd.Series (1D)</span>
                  <p className="text-xs text-slate-400">A 1D labeled array capable of holding any data type. Think of it as a single column in a spreadsheet paired with an index.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">pd.DataFrame (2D)</span>
                  <p className="text-xs text-slate-400">A 2D labeled table with rows and columns where each column is a <code className="text-slate-300">Series</code> and columns can hold different data types.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

# 1. Pandas Series (1D labeled array)
groceries = pd.Series(data=[30, 6, 'Yes', 'No'], index=['eggs', 'apples', 'milk', 'bread'])
print("Pandas Series:\\n", groceries)

# 2. Pandas DataFrame (2D labeled table)
items = {
    'Bob': pd.Series([245, 25, 55], index=['bike', 'pants', 'watch']),
    'Alice': pd.Series([40, 110, 500, 45], index=['book', 'glasses', 'bike', 'pants'])
}
shopping_carts = pd.DataFrame(items)
print("\\nPandas DataFrame:\\n", shopping_carts)`}
                output={`Pandas Series:\n eggs       30\napples      6\nmilk      Yes\nbread      No\ndtype: object\n\nPandas DataFrame:\n            Bob  Alice\nbike     245.0  500.0\nbook       NaN   40.0\nglasses    NaN  110.0\npants     25.0   45.0\nwatch     55.0    NaN`}
              />
            </div>
          )}

          {/* TAB 3: Environment & Setup */}
          {activeTab === 'setup' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Pandas comes pre-installed with <strong>Anaconda</strong>. This curriculum targets <strong>Pandas 2.2.0</strong> so that all DataFrame methods, indexing behaviors, and <code className="text-purple-300">NaN</code> handling functions run cleanly without deprecation warnings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">Check Installed Version</span>
                  <p className="text-xs text-slate-400">Run <code className="text-slate-200">!conda list pandas</code> inside a Jupyter notebook cell or <code className="text-slate-200">conda list pandas</code> in your terminal.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">Install / Pin Version</span>
                  <p className="text-xs text-slate-400">Run <code className="text-slate-200">conda install pandas=2.2.0</code> in your Anaconda Prompt to match the course environment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-purple-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>Community Convention:</strong> Always import Pandas using the standard alias <code className="text-purple-300">import pandas as pd</code> so your code remains clean and readable across notebooks and production scripts.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

# Inspect core environment attributes
print("Loaded Pandas Version:", pd.__version__)
print("Core 1D Class:", pd.Series)
print("Core 2D Class:", pd.DataFrame)`}
                output={`Loaded Pandas Version: 2.2.0\nCore 1D Class: <class 'pandas.core.series.Series'>\nCore 2D Class: <class 'pandas.core.frame.DataFrame'>`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}