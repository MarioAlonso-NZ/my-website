'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, AlertOctagon, TrendingDown, Clock, ShieldCheck, X } from 'lucide-react';

export default function EarlyStoppingDialog() {
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
      {/* Botón Disparador */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
      >
        <HelpCircle size={14} />
        What is Early Stopping?
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
                <div className="p-2 bg-rose-500/10 rounded-lg">
                  <AlertOctagon className="text-rose-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Early Stopping & Overfitting Prevention
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              
              {/* Concepto Central */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  The Overfitting Problem
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  During neural network training, continuing optimization for too many epochs risks learning idiosyncratic noise and outliers specific to the training set. This harms generalization to unseen samples.
                </p>
              </div>

              {/* Pilares Teóricos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-400 font-mono font-bold">
                    <TrendingDown size={14} />
                    <span>Validation Loss</span>
                  </div>
                  <p className="text-slate-400">
                    Metric computed on holdout data after each epoch. Decreasing loss indicates learning; increasing loss signals that overfitting has begun.
                  </p>
                </div>

                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold">
                    <Clock size={14} />
                    <span>Patience Parameter</span>
                  </div>
                  <p className="text-slate-400">
                    The grace period (number of epochs) to tolerate non-improving validation loss before halting, avoiding premature stops due to temporary loss fluctuations.
                  </p>
                </div>

              </div>

              {/* Comparativa de Estrategias */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  Stopping Strategies Comparison
                </span>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <th className="py-2.5 px-3">Method</th>
                        <th className="py-2.5 px-3">Trigger Condition</th>
                        <th className="py-2.5 px-3">Pros & Cons</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="py-2.5 px-3 text-rose-400 font-bold">Immediate Stop</td>
                        <td className="py-2.5 px-3 text-slate-300">val_loss &gt; best_loss</td>
                        <td className="py-2.5 px-3 text-slate-400">Fast, but sensitive to minor stochastic batch noise</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-cyan-400 font-bold">Patience Window</td>
                        <td className="py-2.5 px-3 text-slate-300">patience_counter &gt;= patience</td>
                        <td className="py-2.5 px-3 text-slate-400">Robust; permits recovery from local validation plateaus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Footer */}
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