'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, Layers, X, CheckCircle2, Code2 } from 'lucide-react';

export default function TuplesQuizDialog() {
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
        Tuples Quiz Check
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
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Layers className="text-purple-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Quiz: Tuples</h2>
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
              
              {/* Question 1: Qualities vs Data Structure */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 1: Data Structure Qualities
                </span>
                <p className="text-xs text-slate-400">Match the qualities to their respective data structure:</p>
                
                <div className="overflow-x-auto rounded-lg border border-slate-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 font-mono border-b border-slate-800">
                        <th className="py-2.5 px-3">Data Structure</th>
                        <th className="py-2.5 px-3">Order</th>
                        <th className="py-2.5 px-3">Mutability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      <tr className="hover:bg-slate-900/30 transition">
                        <td className="py-2.5 px-3 font-semibold text-white">Tuples</td>
                        <td className="py-2.5 px-3 text-cyan-400">Ordered</td>
                        <td className="py-2.5 px-3 text-rose-400 font-medium">Immutable</td>
                      </tr>
                      <tr className="hover:bg-slate-900/30 transition">
                        <td className="py-2.5 px-3 font-semibold text-white">Lists</td>
                        <td className="py-2.5 px-3 text-cyan-400">Ordered</td>
                        <td className="py-2.5 px-3 text-emerald-400 font-medium">Mutable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Question 2: Code Output Evaluation */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 2: Tuple Syntax & Output
                </span>
                <p className="text-xs text-slate-400">
                  What is the output of the following Python code?
                </p>

                <div className="relative">
                  <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`tuple_a = 1, 2
tuple_b = (1, 2)

print(tuple_a == tuple_b)
print(tuple_a[1])`}
                  </pre>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold font-mono">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>Answer: True, 2</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-400 text-xs space-y-1 pl-1">
                    <li>
                      Parentheses are optional when defining tuples, so <code className="text-cyan-400 font-mono">tuple_a</code> and <code className="text-cyan-400 font-mono">tuple_b</code> are equal.
                    </li>
                    <li>
                      Indexing starts at 0, so index 1 evaluates to the second element: <strong className="text-white">2</strong>.
                    </li>
                  </ul>
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