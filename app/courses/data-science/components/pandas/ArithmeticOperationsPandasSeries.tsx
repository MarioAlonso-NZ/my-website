'use client';

import React, { useState } from 'react';
import { Calculator, Target, AlertTriangle, Info, Sparkles } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ArithmeticOperationsPandasSeries() {
  const [activeTab, setActiveTab] = useState<'basic' | 'selected' | 'mixed'>('basic');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Calculator className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Arithmetic Operations on Pandas Series
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Just like NumPy <code className="text-emerald-300">ndarrays</code>, Pandas Series support fast element-wise arithmetic with scalar values, NumPy mathematical functions, targeted updates on selected labels, and even operations on mixed data types when valid.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('basic')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'basic' 
                ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Calculator size={14} /> 1. Element-Wise &amp; NumPy Math
          </button>
          <button 
            onClick={() => setActiveTab('selected')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'selected' 
                ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Target size={14} /> 2. Selected Elements
          </button>
          <button 
            onClick={() => setActiveTab('mixed')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'mixed' 
                ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Sparkles size={14} /> 3. Mixed Data Types
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Element-Wise & NumPy Math */}
          {activeTab === 'basic' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                You can apply standard arithmetic operators (<code className="text-emerald-300">+</code>, <code className="text-emerald-300">-</code>, <code className="text-emerald-300">*</code>, <code className="text-emerald-300">/</code>) directly between a Series and a single number, or pass the entire Series into NumPy mathematical functions like <code className="text-emerald-300">np.exp()</code>, <code className="text-emerald-300">np.sqrt()</code>, and <code className="text-emerald-300">np.power()</code>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">Scalar Broadcasting</span>
                  <p className="text-xs text-slate-400">Operations like <code className="text-slate-200">fruits + 2</code> or <code className="text-slate-200">fruits / 2</code> apply to every element while preserving index labels.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">NumPy Universal Functions</span>
                  <p className="text-xs text-slate-400">Functions such as <code className="text-slate-200">np.sqrt(fruits)</code> return a new Series with the transformed values.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd
import numpy as np

# Create a Pandas Series storing a grocery list of fruits
fruits = pd.Series(data=[10, 6, 3], index=['apples', 'oranges', 'bananas'])

# 1. Basic element-wise arithmetic
print('fruits + 2:\\n', fruits + 2)
print('\\nfruits / 2:\\n', fruits / 2)

# 2. NumPy mathematical functions on a Series
print('\\nEXP(X):\\n', np.exp(fruits))
print('\\nSQRT(X):\\n', np.sqrt(fruits))
print('\\nPOW(X, 2):\\n', np.power(fruits, 2))`}
                output={`fruits + 2:\n apples     12\noranges     8\nbananas     5\ndtype: int64\n\nfruits / 2:\n apples     5.0\noranges    3.0\nbananas    1.5\ndtype: float64\n\nEXP(X):\n apples     22026.465795\noranges      403.428793\nbananas       20.085537\ndtype: float64\n\nSQRT(X):\n apples     3.162278\noranges    2.449490\nbananas    1.732051\ndtype: float64\n\nPOW(X, 2):\n apples     100\noranges     36\nbananas      9\ndtype: int64`}
              />
            </div>
          )}

          {/* TAB 2: Selected Elements */}
          {activeTab === 'selected' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Instead of transforming the entire Series, you can target specific items using label indexing, <code className="text-cyan-300">.loc</code>, or positional indexing with <code className="text-cyan-300">.iloc</code>.
              </p>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  These expressions return the computed result without mutating the original <code className="text-cyan-300">fruits</code> Series unless you explicitly reassign the result back.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

fruits = pd.Series(data=[10, 6, 3], index=['apples', 'oranges', 'bananas'])

# Add 2 only to bananas
print('Amount of bananas + 2 =', fruits['bananas'] + 2)

# Subtract 2 from apples using positional index
print('Amount of apples - 2 =', fruits.iloc[0] - 2)

# Double apples and oranges
print('\\nDouble apples and oranges:\\n', fruits[['apples', 'oranges']] * 2)

# Halve apples and oranges using .loc
print('\\nHalf apples and oranges:\\n', fruits.loc[['apples', 'oranges']] / 2)`}
                output={`Amount of bananas + 2 = 5\nAmount of apples - 2 = 8\n\nDouble apples and oranges:\n apples     20\noranges    12\ndtype: int64\n\nHalf apples and oranges:\n apples     5.0\noranges    3.0\ndtype: float64`}
              />
            </div>
          )}

          {/* TAB 3: Mixed Data Types */}
          {activeTab === 'mixed' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                You can perform arithmetic on a Series with mixed data types (such as integers and strings) <strong>only if the operation is valid for every data type</strong> in that Series.
              </p>

              <div className="flex items-start gap-3 p-3 bg-amber-950/20 border border-amber-500/30 rounded">
                <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Watch Out for TypeError:</strong> Multiplication (<code className="text-purple-300">* 2</code>) works on both numbers (doubles the value) and strings (repeats the text, e.g., <code className="text-purple-300">&apos;YesYes&apos;</code>). However, division (<code className="text-amber-300">/ 2</code>) is undefined for strings and will raise a <code className="text-amber-300">TypeError</code>.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

groceries = pd.Series(data=[30, 6, 'Yes', 'No'], index=['eggs', 'apples', 'milk', 'bread'])

# Valid: '*' is defined for both integers and strings
print('groceries * 2:\\n', groceries * 2)

# Invalid: '/' is not defined for strings -> raises TypeError
# print(groceries / 2)`}
                output={`groceries * 2:\n eggs          60\napples        12\nmilk      YesYes\nbread       NoNo\ndtype: object`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}