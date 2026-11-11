"use client";

import React, { useState, useEffect } from "react";
import { Info, X, Target, Search, CheckCircle2, AlertTriangle } from "lucide-react";

export default function PrecisionRecallDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors shrink-0"
      >
        <Info size={14} />
        What are Precision & Recall?
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
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Target className="text-blue-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Precision vs. Recall</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body (Scrollable) */}
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
              
              <p className="text-sm text-slate-400">
                When evaluating a classification model, accuracy isn't always enough—especially with <strong className="text-slate-200">imbalanced datasets</strong>. We use Precision and Recall to see the full picture.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Precision Card */}
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={16} className="text-green-400" />
                    <h3 className="font-semibold text-slate-200 text-sm">Precision</h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-3 flex-grow">
                    Out of all the times the model predicted <strong>Positive</strong>, how many were <strong>actually Positive</strong>?
                  </p>
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 font-mono text-[11px] text-center text-green-300 mb-3">
                    TP / (TP + FP)
                  </div>
                  <div className="text-[11px] text-slate-500 italic">
                    Analogy: A spam filter. If it flags 10 emails, We want all 10 to be actual spam (no false alarms).
                  </div>
                </div>

                {/* Recall Card */}
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Search size={16} className="text-purple-400" />
                    <h3 className="font-semibold text-slate-200 text-sm">Recall</h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-3 flex-grow">
                    Out of all the <strong>actual Positive</strong> cases, how many did the model <strong>find</strong>?
                  </p>
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 font-mono text-[11px] text-center text-purple-300 mb-3">
                    TP / (TP + FN)
                  </div>
                  <div className="text-[11px] text-slate-500 italic">
                    Analogy: A cancer test. We want to find all sick patients. Missing one (False Negative) is dangerous.
                  </div>
                </div>
              </div>

              {/* The Trade-off Section */}
              <div className="bg-slate-800/20 border border-slate-700/50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-200 text-sm mb-3">The Trade-off</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                    <p className="text-slate-400">We can usually increase Precision by being stricter, but this will often <strong>lower Recall</strong> (We miss more true positives).</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-slate-400">The <strong>F1-Score</strong> is a metric that combines both Precision and Recall into a single number to find the perfect balance.</p>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end shrink-0">
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
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