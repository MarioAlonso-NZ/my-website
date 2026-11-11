"use client";

import React, { useState, useEffect } from "react";
import { Info, X, Crosshair, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function AccuracyDialog() {
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
        What is Accuracy?
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Crosshair className="text-emerald-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Accuracy in ML</h2>
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
                <strong>Accuracy</strong> is the simplest metric. It asks: <em>"Out of all the predictions the model made, what percentage were correct?"</em>
              </p>

              {/* Formula Box */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center gap-2">
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">The Formula</div>
                <div className="font-mono text-lg text-emerald-400">
                  (TP + TN) / Total
                </div>
                <div className="text-[11px] text-slate-500 text-center">
                  True Positives + True Negatives <br /> divided by all predictions
                </div>
              </div>

              {/* The Accuracy Paradox */}
              <div className="bg-rose-950/20 border border-rose-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={16} className="text-rose-400" />
                  <h3 className="font-semibold text-rose-200 text-sm">The "Accuracy Paradox"</h3>
                </div>
                <p className="text-xs text-rose-200/70 mb-3 leading-relaxed">
                  Accuracy can be dangerously misleading if your dataset is <strong>imbalanced</strong>.
                </p>
                
                {/* Visual Example */}
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-300 font-semibold">Scenario: Disease Detection</p>
                  <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
                    <li>Dataset: 100 people (99 Healthy, 1 Sick).</li>
                    <li>Model: Predicts "Healthy" for <strong>everyone</strong>.</li>
                  </ul>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <span className="text-xs text-slate-500">Model Accuracy:</span>
                    <span className="text-sm font-bold text-emerald-400">99%</span>
                  </div>
                  <p className="text-[11px] text-rose-400 italic">
                    The model is 99% accurate, but it completely failed to find the sick person. This is why we need Precision and Recall!
                  </p>
                </div>
              </div>

              {/* Contextual Connection */}
              <div className="bg-slate-800/20 border border-slate-700/50 rounded-xl p-4 flex gap-3 items-start">
                <div className="mt-0.5 text-blue-400 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  In the exercise above, the model's accuracy improved from <strong>92.5%</strong> to <strong>94%</strong>. Assuming the dataset is balanced, this is a solid indicator that the hyperparameter tuning actually worked.
                </p>
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