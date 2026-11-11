'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, XCircle, X, Layers } from 'lucide-react';

export default function DataStructuresCheckDialog() {
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
        Data Structures Check
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
                <h2 className="text-lg font-bold text-white tracking-tight">Check for Understanding: Data Structures</h2>
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
              
              {/* Question 1: Tuples */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 1: Tuples Characteristics
                </span>
                <p className="text-xs text-slate-400">Which statements about tuples are true?</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A tuple is an ordered data structure.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A tuple can be indexed and sliced like a list.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <XCircle size={16} className="text-rose-400/80 shrink-0" />
                    <span className="line-through">A tuple is mutable / defined with curly braces {`{}`}.</span>
                  </div>
                </div>
              </div>

              {/* Question 2: Sets */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 2: Sets Characteristics
                </span>
                <p className="text-xs text-slate-400">Which statements about sets are true?</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A set is a mutable data structure.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A set does not contain duplicate elements.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <XCircle size={16} className="text-rose-400/80 shrink-0" />
                    <span className="line-through">Sets are ordered / can be indexed and sliced.</span>
                  </div>
                </div>
              </div>

              {/* Question 3: Curly Braces */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 3: Curly Braces Usage
                </span>
                <p className="text-xs text-slate-400">
                  Is a set the only data structure defined with curly braces: <code className="text-cyan-400 font-mono">{`{}`}</code>?
                </p>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300">
                  <strong>False:</strong> Both sets and dictionaries use curly braces. Dictionaries use key-value pairs (<code className="text-cyan-300 font-mono">{`{key: value}`}</code>), whereas sets contain standalone values (<code className="text-cyan-300 font-mono">{`{val1, val2}`}</code>).
                </div>
              </div>

              {/* Question 4: Dictionaries */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 4: Dictionaries Characteristics
                </span>
                <p className="text-xs text-slate-400">Which statements about dictionaries are true?</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A dictionary is a mutable data structure.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A dictionary is an ordered data structure (in Python 3.7+).</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>A dictionary can be indexed using keys.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>The keys of a dictionary are unique.</span>
                  </div>
                </div>
              </div>

              {/* Question 5: Code Diagnosis */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Question 5: Identify the Issue
                </span>
                <p className="text-xs text-slate-400">
                  What causes the error when attempting to use mutable objects as keys?
                </p>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 font-medium">
                  The dictionary is using a mutable datatype for its keys (e.g. attempting to use a list instead of a tuple or string).
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