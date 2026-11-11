'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, ListChecks, HelpCircle, X, Check, Code } from 'lucide-react';

export default function ListsCheckDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
      >
        <HelpCircle size={14} />
        Check Understanding: Lists
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header (Fixed) */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <ListChecks className="text-cyan-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Check for Understanding: Lists</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body (Scrollable) */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              
              {/* Question 1 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 1: Data Types vs. Data Structures
                </span>
                <p className="text-xs text-slate-400">Which statements are true?</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Data structures are containers that can include different data types.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A list is an example of a data structure.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>All generic data structures are data types.</span>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 2: Properties of Lists
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 flex items-center gap-2">
                    <Check size={14} className="shrink-0" />
                    <span><strong>Mutable:</strong> Items can be updated in-place.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 flex items-center gap-2">
                    <Check size={14} className="shrink-0" />
                    <span><strong>Ordered:</strong> Accessible by index position.</span>
                  </div>
                </div>
              </div>

              {/* Questions 3 & 4 (Indexing & Slicing) */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Questions 3 & 4: Indexing & Slicing Reference
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']</span>
                </div>

                <div className="overflow-x-auto rounded-lg border border-slate-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 font-mono border-b border-slate-800">
                        <th className="py-2 px-3">Target</th>
                        <th className="py-2 px-3">Syntax</th>
                        <th className="py-2 px-3">Output</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      <tr>
                        <td className="py-2 px-3 text-slate-300">First element</td>
                        <td className="py-2 px-3 text-cyan-400">arr[0]</td>
                        <td className="py-2 px-3 text-slate-400">'a'</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-slate-300">Fourth element</td>
                        <td className="py-2 px-3 text-cyan-400">arr[3]</td>
                        <td className="py-2 px-3 text-slate-400">'d'</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-slate-300">Last element</td>
                        <td className="py-2 px-3 text-cyan-400">arr[len(arr) - 1]</td>
                        <td className="py-2 px-3 text-slate-400">'g'</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-slate-300">Second to last</td>
                        <td className="py-2 px-3 text-cyan-400">arr[-2]</td>
                        <td className="py-2 px-3 text-slate-400">'f'</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-slate-300">Slice ['c', 'd', 'e', 'f']</td>
                        <td className="py-2 px-3 text-purple-400">arr[2:6]</td>
                        <td className="py-2 px-3 text-slate-400">indices 2, 3, 4, 5</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-slate-300">Slice ['a', 'b', 'c']</td>
                        <td className="py-2 px-3 text-purple-400">arr[:3]</td>
                        <td className="py-2 px-3 text-slate-400">start to 3 exclusive</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-slate-300">Slice ['e', 'f', 'g']</td>
                        <td className="py-2 px-3 text-purple-400">arr[4:]</td>
                        <td className="py-2 px-3 text-slate-400">index 4 to end</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Footer (Fixed) */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}