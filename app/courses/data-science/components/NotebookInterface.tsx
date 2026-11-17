'use client';

import React, { useState } from 'react';
import { LayoutTemplate, Code2, FileText, Wrench, Search, Download, Play, SquareTerminal } from 'lucide-react';

export default function NotebookInterface() {
  const [activeCell, setActiveCell] = useState<'code' | 'markdown'>('code');
  const [isExecuted, setIsExecuted] = useState(false);

  const handleRun = () => {
    setIsExecuted(true);
  };

  const handleReset = () => {
    setIsExecuted(false);
  };

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <LayoutTemplate className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            The Notebook Interface & Anatomy
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          A Jupyter Notebook consists of a sequence of "cells" that can be executed independently. You can change a cell's type to write executable Python or format explanatory text.
        </p>
      </div>

      {/* 2. Interactive Cell Simulator */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Fake Jupyter Toolbar */}
        <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-emerald-400 transition-colors" title="Save">💾</button>
            <button className="text-slate-400 hover:text-emerald-400 transition-colors" title="Add Cell">➕</button>
            <div className="h-4 w-px bg-slate-800" />
            <button onClick={handleRun} className="flex items-center gap-1 text-emerald-500 hover:text-emerald-400 font-semibold text-xs bg-emerald-500/10 px-2 py-1 rounded transition-colors">
              <Play size={12} /> Run
            </button>
            <button onClick={handleReset} className="text-slate-400 hover:text-rose-400 text-xs transition-colors">
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Cell Type:</span>
            <select 
              value={activeCell}
              onChange={(e) => {
                setActiveCell(e.target.value as 'code' | 'markdown');
                setIsExecuted(false);
              }}
              className="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded px-2 py-1 outline-none focus:border-emerald-500"
            >
              <option value="code">Code</option>
              <option value="markdown">Markdown</option>
            </select>
          </div>
        </div>

        {/* Cell Content Area */}
        <div className="p-4 space-y-2">
          {activeCell === 'code' ? (
            <div className="flex gap-2">
              <div className="text-xs font-mono text-cyan-500 w-12 pt-2 text-right shrink-0">
                In [{isExecuted ? '1' : ' '}]:
              </div>
              <div className="flex-grow space-y-2">
                <div className="bg-[#1E1E1E] border border-slate-700 p-3 rounded text-sm font-mono text-slate-300">
                  <span className="text-purple-400">print</span>(<span className="text-amber-300">'Notebooks are great!'</span>)
                </div>
                {isExecuted && (
                  <div className="text-sm font-mono text-slate-300 px-3 py-1">
                    Notebooks are great!
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <div className="w-12 shrink-0" /> {/* Spacer */}
              <div className="flex-grow">
                {!isExecuted ? (
                  <div className="bg-[#1E1E1E] border border-slate-700 p-3 rounded text-sm font-mono text-slate-300">
                    <span className="text-cyan-400"># Data Analysis Conclusion</span><br/>
                    This dataset shows a <strong>strong correlation</strong>.
                  </div>
                ) : (
                  <div className="px-3 py-2 prose prose-invert prose-sm">
                    <h1 className="text-xl font-bold text-white mb-2">Data Analysis Conclusion</h1>
                    <p className="text-slate-300">This dataset shows a <strong>strong correlation</strong>.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Core Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Command Palette */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <Search size={16} />
            <span>Command Palette (Ctrl + Shift + P)</span>
          </div>
          <p className="text-xs text-slate-400 font-sans">
            A searchable panel containing every possible action in Jupyter (like merging cells, clearing outputs, or toggling line numbers). It speeds up your workflow by eliminating the need to click through menus.
          </p>
        </div>

        {/* Exporting & Downloading */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Download size={16} />
            <span>Exporting Notebooks</span>
          </div>
          <p className="text-xs text-slate-400 font-sans">
            You can download your <code className="text-slate-300">.ipynb</code> file in multiple formats via the File menu. Export as HTML to share with non-programmers, or as a <code className="text-slate-300">.py</code> file to run your analysis as a standard Python script.
          </p>
        </div>

      </div>
    </div>
  );
}