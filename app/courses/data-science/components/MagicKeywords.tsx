'use client';

import React, { useState } from 'react';
import { Wand2, Clock, LineChart, Bug, Terminal, Play } from 'lucide-react';

export default function MagicKeywords() {
  const [activeTab, setActiveTab] = useState<'timeit' | 'matplotlib' | 'pdb'>('timeit');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Wand2 className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Magic Keywords: Jupyter's Superpowers
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Magic keywords are special commands specific to the IPython kernel that let you control the notebook environment, make system calls, and profile code.
        </p>
      </div>

      {/* 2. Line vs Cell Magics */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <Terminal size={16} />
            <span>Line Magics (%)</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Preceded by a single percent sign (<code className="text-cyan-300">%</code>). They only apply to the single line of code they are written on.
          </p>
        </div>
        <div className="flex-1 p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Terminal size={16} />
            <span>Cell Magics (%%)</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Preceded by two percent signs (<code className="text-purple-300">%%</code>). They apply to the entire contents of the cell and must be placed on the very first line.
          </p>
        </div>
      </div>

      {/* 3. Interactive Magic Sandbox */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          Top 3 Magic Commands Explained
        </span>
        
        <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
          {/* Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('timeit')}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'timeit' ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Clock size={14} /> %timeit
            </button>
            <button 
              onClick={() => setActiveTab('matplotlib')}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'matplotlib' ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <LineChart size={14} /> %matplotlib inline
            </button>
            <button 
              onClick={() => setActiveTab('pdb')}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${activeTab === 'pdb' ? 'border-b-2 border-rose-500 text-rose-400 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Bug size={14} /> %pdb
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-5 min-h-[220px]">
            
            {activeTab === 'timeit' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Used for code optimization. It runs a piece of code multiple times and calculates the average execution time to give you a precise performance metric.
                </p>
                <div className="space-y-2">
                  <div className="bg-[#1E1E1E] border border-slate-700 p-3 rounded text-sm font-mono text-slate-300">
                    <span className="text-emerald-400">%timeit</span> [x**<span className="text-amber-300">2</span> <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> <span className="text-cyan-400">range</span>(<span className="text-amber-300">1000</span>)]
                  </div>
                  <div className="text-xs font-mono text-slate-400 px-3 py-1 flex items-center gap-2">
                    <Play size={10} className="text-emerald-500" />
                    238 µs ± 7.23 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'matplotlib' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  By default, plotting libraries might try to open visualizations in a new software window. This command forces matplotlib to embed the rendered charts directly inside the notebook below the cell.
                </p>
                <div className="space-y-2">
                  <div className="bg-[#1E1E1E] border border-slate-700 p-3 rounded text-sm font-mono text-slate-300">
                    <span className="text-cyan-400">%matplotlib inline</span><br/>
                    <span className="text-cyan-400">%config</span> InlineBackend.figure_format = <span className="text-amber-300">'retina'</span><br/>
                    <span className="text-slate-500"># The second line makes charts look crisp on high-res displays!</span>
                  </div>
                  <div className="flex justify-center p-2 bg-slate-900 rounded border border-slate-800 border-dashed">
                    <LineChart size={48} className="text-cyan-500/50" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pdb' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Turns on the interactive Python Debugger. When your code throws an error, the notebook will halt and open a text input box, allowing you to inspect variable values at the exact moment the code crashed.
                </p>
                <div className="space-y-2">
                  <div className="bg-[#1E1E1E] border border-slate-700 p-3 rounded text-sm font-mono text-slate-300">
                    <span className="text-rose-400">%pdb</span><br/>
                    <span className="text-cyan-400">sum</span>(<span className="text-amber-300">'a string'</span>) <span className="text-slate-500"># This will cause an error</span>
                  </div>
                  <div className="text-xs font-mono text-rose-400 bg-rose-950/30 border border-rose-900/50 px-3 py-2 rounded">
                    TypeError: unsupported operand type(s) for +: 'int' and 'str'<br/>
                    &gt; &lt;ipython-input-2&gt;(2)&lt;module&gt;()<br/>
                    ipdb&gt; _ <span className="text-slate-500 bg-slate-900 px-1 ml-2">Type 'q' to quit</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  );
}