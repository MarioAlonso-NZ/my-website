'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, Disc, X, CheckCircle2 } from 'lucide-react';

export default function SetsQuizDialog() {
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
        Sets Quiz Check
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
                  <Disc className="text-purple-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Quiz: Sets</h2>
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
              
              {/* Question 1: List to Set */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 1: List to Set Length Difference
                </span>
                <p className="text-xs text-slate-400">
                  What would the output of the following code be?
                </p>

                <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`a = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
b = set(a)
print(len(a) - len(b))`}
                </pre>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold font-mono">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>Answer: 6</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-400 text-xs space-y-1 pl-1">
                    <li><code className="text-cyan-400 font-mono">len(a)</code> is 10 (the total number of items in the list).</li>
                    <li><code className="text-cyan-400 font-mono">b = set(a)</code> removes all duplicates, leaving <code className="text-cyan-400 font-mono">{`{1, 2, 3, 4}`}</code> (<code className="text-cyan-400 font-mono">len(b) = 4</code>).</li>
                    <li><code className="text-white font-mono">10 - 4 = 6</code>.</li>
                  </ul>
                </div>
              </div>

              {/* Question 2: Add and Pop */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 2: Add and Pop Arbitrary Removal
                </span>
                <p className="text-xs text-slate-400">
                  After executing this code, will the number 5 be a part of the set <code className="text-cyan-400 font-mono">b</code>?
                </p>

                <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`a = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
b = set(a)
b.add(5)
b.pop()`}
                </pre>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold font-mono">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>Answer: Maybe</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-1">
                    Sets are unordered collections, meaning <code className="text-cyan-400 font-mono">.pop()</code> removes and returns a completely arbitrary element. The popped element could be 5, or it could be any other number in the set.
                  </p>
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