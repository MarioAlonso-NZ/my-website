'use client';

import React from 'react';
import { Target, DivideCircle, PieChart, Lightbulb, Code2, AlertTriangle } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function NumpyMiniProject() {
  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Target className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Mini-Project: Mean Normalization and Data Separation
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          In machine learning, algorithms require data to be properly scaled and separated before training begins. In this capstone project, you will use broadcasting, statistical functions, and slicing to prepare a simulated dataset.
        </p>
      </div>

      {/* 2. Core Concepts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Concept 1: Mean Normalization */}
        <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <DivideCircle size={16} />
            <span>1. Mean Normalization</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Also known as feature scaling, the goal is to distribute the data evenly around zero so that the average (mean) of all elements is exactly zero. This helps neural networks train faster. The formula applied to each column is:
          </p>
          <div className="bg-[#1E1E1E] p-3 rounded-lg border border-slate-800 text-cyan-200 flex justify-center overflow-x-auto">
            <BlockMath math="\text{Norm\_Col}_i = \frac{\text{Col}_i - \mu_i}{\sigma_i}" />
          </div>
          <p className="text-[11px] text-slate-500">
            Where <InlineMath math="\mu_i" /> is the column's mean and <InlineMath math="\sigma_i" /> is the standard deviation.
          </p>
        </div>

        {/* Concept 2: Data Separation */}
        <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <PieChart size={16} />
            <span>2. Data Separation</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            After normalizing the data, it is customary to shuffle and split the dataset into three distinct sets to properly train and evaluate a model without bias. The standard distribution is:
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <strong className="text-slate-300 w-28">Training Set:</strong> <span className="text-emerald-400 font-mono">60%</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <strong className="text-slate-300 w-28">Cross Validation:</strong> <span className="text-cyan-400 font-mono">20%</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <strong className="text-slate-300 w-28">Test Set:</strong> <span className="text-purple-400 font-mono">20%</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Helper / Cheat Sheet */}
      <div className="p-5 bg-amber-950/10 border border-amber-900/30 rounded-xl space-y-4">
        <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm border-b border-amber-900/30 pb-2">
          <Lightbulb size={18} />
          <span>Project Hints & Required Functions</span>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
              <Code2 size={14} /> Generating the Mock Data
            </div>
            <p className="text-xs text-slate-400">
              You need a 1000x20 array of random integers between [0, 5000]. Remember that the interval is half-open (exclusive of the stop value).
              Use: <code className="bg-slate-950 text-emerald-300 px-1 rounded">np.random.randint(0, 5001, size=(1000, 20))</code>
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
              <Code2 size={14} /> Column-wise Statistics
            </div>
            <p className="text-xs text-slate-400">
              To calculate the mean (<InlineMath math="\mu" />) and standard deviation (<InlineMath math="\sigma" />) for <em>each column</em>, you must use the axis parameter. 
              Use: <code className="bg-slate-950 text-cyan-300 px-1 rounded">X.mean(axis=0)</code> and <code className="bg-slate-950 text-cyan-300 px-1 rounded">X.std(axis=0)</code>
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
              <Code2 size={14} /> Shuffling Indices
            </div>
            <p className="text-xs text-slate-400">
              Before separating the data, you need an array of shuffled row indices. You can get the total number of rows dynamically using <code>X.shape[0]</code>.
              Use: <code className="bg-slate-950 text-purple-300 px-1 rounded">np.random.permutation(X.shape[0])</code>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}