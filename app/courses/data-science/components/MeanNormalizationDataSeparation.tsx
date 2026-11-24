'use client';

import React, { useState } from 'react';
import { Scale, Sigma, SplitSquareVertical, Info, Sparkles } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function MeanNormalizationDataSeparation() {
  const [activeTab, setActiveTab] = useState<'concept' | 'normalization' | 'separation'>('concept');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Scale className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Mini-Project: Mean Normalization and Data Separation
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          In machine learning, raw features often span vastly different numeric ranges. <strong>Mean Normalization</strong> centers and scales your features around zero so no single attribute dominates training, while <strong>Data Separation</strong> partitions the normalized dataset into unbiased Training, Cross-Validation, and Test splits.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('concept')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'concept' 
                ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Sparkles size={14} /> 1. Dataset & Feature Scaling
          </button>
          <button 
            onClick={() => setActiveTab('normalization')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'normalization' 
                ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Sigma size={14} /> 2. Mean Normalization
          </button>
          <button 
            onClick={() => setActiveTab('separation')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'separation' 
                ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <SplitSquareVertical size={14} /> 3. Data Separation (60/20/20)
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Dataset & Feature Scaling */}
          {activeTab === 'concept' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Many machine learning algorithms learn by adjusting internal weights. If one feature spans <code className="text-emerald-300">0 to 5,000</code> while another spans <code className="text-emerald-300">0 to 1</code>, the larger feature can disproportionately skew gradient updates. <strong>Mean normalization</strong> scales each column so its values sit in a compact interval centered around <code className="text-emerald-300">0</code>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">Standard Min-Max Scaling</span>
                  <p className="text-xs text-slate-400">Compresses values into a fixed <code className="text-slate-300">[0, 1]</code> interval.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">Mean Normalization</span>
                  <p className="text-xs text-slate-400">Centers the distribution at <code className="text-slate-300">mean = 0</code> with <code className="text-slate-300">std = 1</code> (typically within <code className="text-slate-300">[-3, 3]</code>).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  To simulate a dataset of <strong>1,000 samples</strong> with <strong>20 features</strong> ranging from <code className="text-emerald-300">0</code> to <code className="text-emerald-300">5000</code> inclusive, pass <code className="text-emerald-300">5001</code> as the exclusive upper bound to <code className="text-emerald-300">np.random.randint()</code>.
                </p>
              </div>

              <RunnablePythonCode
                code={`import numpy as np

# Create a 1000 x 20 ndarray with random integers in [0, 5001)
X = np.random.randint(0, 5001, size=(1000, 20))

print("Shape of X:", X.shape)
print("Min value:", X.min(), "| Max value:", X.max())
print("First 2 rows (first 5 cols):\\n", X[:2, :5])`}
                output={`Shape of X: (1000, 20)\nMin value: 0 | Max value: 5000\nFirst 2 rows (first 5 cols):\n [[4610 2616 1912 3179 4088]\n [ 586 1992 4407 1687 2516]]`}
              />
            </div>
          )}

          {/* TAB 2: Mean Normalization */}
          {activeTab === 'normalization' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                To mean-normalize <code className="text-cyan-300">X</code>, subtract the column average (<code className="text-cyan-300">μᵢ</code>) from every element in column <code className="text-cyan-300">i</code> and divide by that column's standard deviation (<code className="text-cyan-300">σᵢ</code>). Thanks to <strong>NumPy Broadcasting</strong>, a 1D vector of shape <code className="text-cyan-300">(20,)</code> automatically aligns across all <code className="text-cyan-300">1,000</code> rows.
              </p>

              {/* Formula & Axis Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">Formula</span>
                  <p className="text-xs font-mono text-slate-200">X_norm = (X - μ) / σ</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">X.mean(axis=0)</span>
                  <p className="text-xs text-slate-400">Computes the <strong>20</strong> column means instead of 1 global scalar.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-cyan-400 font-mono text-xs font-bold block mb-1">X.std(axis=0)</span>
                  <p className="text-xs text-slate-400">Computes the <strong>20</strong> column standard deviations.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import numpy as np

X = np.random.randint(0, 5001, size=(1000, 20))

# Calculate column-wise mean and standard deviation -> shape (20,)
ave_cols = X.mean(axis=0)
std_cols = X.std(axis=0)

print("ave_cols shape:", ave_cols.shape)
print("std_cols shape:", std_cols.shape)

# Vectorized Mean Normalization via Broadcasting
X_norm = (X - ave_cols) / std_cols

# Verification: global mean ≈ 0, column mins/maxes balanced around 0
print("\\nGlobal mean of X_norm:", X_norm.mean())
print("Avg of column minimums:", X_norm.min(axis=0).mean())
print("Avg of column maximums:", X_norm.max(axis=0).mean())`}
                output={`ave_cols shape: (20,)\nstd_cols shape: (20,)\n\nGlobal mean of X_norm: 3.552713678800501e-18\nAvg of column minimums: -1.7399314665554122\nAvg of column maximums: 1.7198878832982598`}
              />
            </div>
          )}

          {/* TAB 3: Data Separation */}
          {activeTab === 'separation' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                Once normalized, split <code className="text-purple-300">X_norm</code> into three disjoint subsets using <code className="text-purple-300">np.random.permutation()</code> so rows are shuffled without replacement (preventing data leakage between splits).
              </p>

              {/* 60 / 20 / 20 Visual Split Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-purple-500/30">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">Training (60%)</span>
                  <p className="text-xs text-slate-400"><code className="text-slate-200">[:600]</code> → 600 rows used to fit model weights.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">Cross-Val (20%)</span>
                  <p className="text-xs text-slate-400"><code className="text-slate-200">[600:800]</code> → 200 rows for tuning hyperparameters.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-purple-400 font-mono text-xs font-bold block mb-1">Test Set (20%)</span>
                  <p className="text-xs text-slate-400"><code className="text-slate-200">[800:]</code> → 200 rows for final unbiased evaluation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-purple-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Passing <code className="text-purple-300">X_norm.shape[0]</code> (<code className="text-purple-300">1000</code>) to <code className="text-purple-300">np.random.permutation()</code> generates a shuffled 1D array of row indices from <code className="text-purple-300">0</code> to <code className="text-purple-300">999</code>, guaranteeing every row appears in exactly one subset.
                </p>
              </div>

              <RunnablePythonCode
                code={`import numpy as np

X = np.random.randint(0, 5001, size=(1000, 20))
X_norm = (X - X.mean(axis=0)) / X.std(axis=0)

# 1. Generate shuffled row indices from 0 to 999
row_indices = np.random.permutation(X_norm.shape[0])

# 2. Compute 60% and 80% cutoff indices
sixty = int(len(X_norm) * 0.6)
eighty = int(len(X_norm) * 0.8)

# 3. Slice X_norm using fancy indexing
X_train = X_norm[row_indices[:sixty], :]
X_crossVal = X_norm[row_indices[sixty:eighty], :]
X_test = X_norm[row_indices[eighty:], :]

print("X_train shape:", X_train.shape)
print("X_crossVal shape:", X_crossVal.shape)
print("X_test shape:", X_test.shape)`}
                output={`X_train shape: (600, 20)\nX_crossVal shape: (200, 20)\nX_test shape: (200, 20)`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}