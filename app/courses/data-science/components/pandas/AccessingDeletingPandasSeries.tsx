'use client';

import React, { useState } from 'react';
import { Pointer, Edit3, Trash2, Info, AlertTriangle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function AccessingDeletingPandasSeries() {
  const [activeTab, setActiveTab] = useState<'access' | 'mutate' | 'delete'>('access');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Pointer className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Accessing and Deleting Elements in Pandas Series
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Pandas Series let you retrieve elements by <strong>index labels</strong> or <strong>numerical positions</strong> (both positive and negative). Like NumPy ndarrays, Series are mutable—you can update values directly or remove entries either out-of-place or in-place using <code className="text-emerald-300">.drop()</code>.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('access')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'access' 
                ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Pointer size={14} /> 1. Accessing (.loc &amp; .iloc)
          </button>
          <button 
            onClick={() => setActiveTab('mutate')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'mutate' 
                ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Edit3 size={14} /> 2. Mutating Elements
          </button>
          <button 
            onClick={() => setActiveTab('delete')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'delete' 
                ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Trash2 size={14} /> 3. Deleting (.drop)
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Accessing (.loc & .iloc) */}
          {activeTab === 'access' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                To eliminate ambiguity between labeled indices and numerical positions, Pandas provides two explicit attributes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 rounded border border-emerald-500/30">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">.loc (Location)</span>
                  <p className="text-xs text-slate-400">Explicitly selects elements using their <strong>labeled index</strong> (e.g., <code className="text-slate-200">groceries.loc[[&apos;eggs&apos;, &apos;apples&apos;]]</code>).</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">.iloc (Integer Location)</span>
                  <p className="text-xs text-slate-400">Explicitly selects elements using their <strong>numerical position</strong>, including negative indices (e.g., <code className="text-slate-200">groceries.iloc[-1]</code>).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-950/20 border border-amber-500/30 rounded">
                <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Pandas 3.0+ Compatibility:</strong> Plain square brackets <code className="text-amber-300">[ ]</code> treat integers as <em>index labels</em>, so <code className="text-amber-300">groceries[0]</code> raises a <code className="text-amber-300">KeyError</code>. Always use <code className="text-emerald-300">.iloc[0]</code> for positional indexing.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

groceries = pd.Series(data=[30, 6, 'Yes', 'No'], index=['eggs', 'apples', 'milk', 'bread'])

# 1. Access using index labels & .loc
print('Single label (eggs):', groceries['eggs'])
print('\\nMultiple labels (milk, bread):\\n', groceries[['milk', 'bread']])
print('\\nUsing .loc:\\n', groceries.loc[['eggs', 'apples']])

# 2. Access using numerical indices with .iloc
print('\\nFirst element (.iloc[0]):', groceries.iloc[0])
print('\\nLast element (.iloc[[-1]]):\\n', groceries.iloc[[-1]])
print('\\nMultiple positions (.iloc[[2, 3]]):\\n', groceries.iloc[[2, 3]])`}
                output={`Single label (eggs): 30\n\nMultiple labels (milk, bread):\n milk     Yes\nbread     No\ndtype: object\n\nUsing .loc:\n eggs      30\napples     6\ndtype: object\n\nFirst element (.iloc[0]): 30\n\nLast element (.iloc[[-1]]):\n bread    No\ndtype: object\n\nMultiple positions (.iloc[[2, 3]]):\n milk     Yes\nbread     No\ndtype: object`}
              />
            </div>
          )}

          {/* TAB 2: Mutating Elements */}
          {activeTab === 'mutate' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Pandas Series are <strong>mutable</strong>, meaning you can reassign values after creation by referencing their index label directly.
              </p>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct assignment like <code className="text-cyan-300">groceries[&apos;eggs&apos;] = 2</code> modifies the Series <strong>in-place</strong> without creating a copy.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

groceries = pd.Series(data=[30, 6, 'Yes', 'No'], index=['eggs', 'apples', 'milk', 'bread'])
print('Original Grocery List:\\n', groceries)

# Change the number of eggs to 2
groceries['eggs'] = 2

print('\\nModified Grocery List:\\n', groceries)`}
                output={`Original Grocery List:\n eggs       30\napples      6\nmilk      Yes\nbread      No\ndtype: object\n\nModified Grocery List:\n eggs        2\napples      6\nmilk      Yes\nbread      No\ndtype: object`}
              />
            </div>
          )}

          {/* TAB 3: Deleting (.drop) */}
          {activeTab === 'delete' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Use the <code className="text-purple-300">Series.drop(label)</code> method to remove items by their index label. By default, <code className="text-purple-300">.drop()</code> operates <strong>out-of-place</strong>, leaving your original Series untouched unless you pass <code className="text-purple-300">inplace=True</code>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">Out-of-Place (Default)</span>
                  <p className="text-xs text-slate-400"><code className="text-slate-200">groceries.drop(&apos;apples&apos;)</code> returns a new Series without <code className="text-slate-200">&apos;apples&apos;</code>; the original remains intact.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-purple-500/30">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">In-Place Mutation</span>
                  <p className="text-xs text-slate-400"><code className="text-slate-200">groceries.drop(&apos;apples&apos;, inplace=True)</code> permanently removes <code className="text-slate-200">&apos;apples&apos;</code> from the original Series.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

groceries = pd.Series(data=[30, 6, 'Yes', 'No'], index=['eggs', 'apples', 'milk', 'bread'])

# 1. Out-of-place deletion (original Series stays intact)
print('Remove apples (out-of-place):\\n', groceries.drop('apples'))
print('\\nOriginal after out-of-place drop:\\n', groceries)

# 2. In-place deletion (modifies original Series directly)
groceries.drop('apples', inplace=True)
print('\\nOriginal after in-place drop:\\n', groceries)`}
                output={`Remove apples (out-of-place):\n eggs      30\nmilk     Yes\nbread     No\ndtype: object\n\nOriginal after out-of-place drop:\n eggs       30\napples      6\nmilk      Yes\nbread      No\ndtype: object\n\nOriginal after in-place drop:\n eggs      30\nmilk     Yes\nbread     No\ndtype: object`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}