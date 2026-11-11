"use client";

import React, { useState, useEffect } from "react";
import { Info, X, Gauge, TrendingDown, ArrowRight } from "lucide-react";

export default function MLConceptsDialog() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
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
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
      >
        <Info size={14} />
        View ML Concepts
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Gauge className="text-purple-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">ML Parameters Explained</h2>
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
                When training an AI model, we use mathematical variables to control how the model learns. Here are the two most important ones:
              </p>

              {/* Learning Rate */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge size={16} className="text-cyan-400" />
                  <h3 className="font-semibold text-slate-200 text-sm">Learning Rate</h3>
                </div>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                  Think of this as the <strong>"step size"</strong> the model takes while trying to find the best solution. 
                </p>
                <div className="space-y-2 text-xs font-mono bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0">Too High:</span>
                    <span className="text-slate-500">The model overshoots the answer and never converges.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 shrink-0">Just Right:</span>
                    <span className="text-slate-500">The model steadily walks toward the optimal solution.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 shrink-0">Too Low:</span>
                    <span className="text-slate-500">The model takes tiny steps and takes forever to finish.</span>
                  </div>
                </div>
              </div>

              {/* Training Loss */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown size={16} className="text-orange-400" />
                  <h3 className="font-semibold text-slate-200 text-sm">Training Loss</h3>
                </div>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                  This is the <strong>"error score"</strong>. It measures how bad the AI's predictions are compared to the actual truth.
                </p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside marker:text-orange-500/50">
                  <li>High loss means the model is very wrong.</li>
                  <li>Low loss means the model is very accurate.</li>
                  <li>Our goal during training is to make the loss go down to <strong>0</strong>.</li>
                </ul>
              </div>

              {/* The Math Connection */}
              <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-4 flex gap-3 items-start">
                <div className="mt-0.5 text-indigo-400 shrink-0">
                  <ArrowRight size={16} />
                </div>
                <p className="text-xs text-indigo-200/80 leading-relaxed">
                  In the exercises below, we use <strong className="text-indigo-300">Assignment Operators</strong> (like <code>*=</code> and <code>+=</code>) to dynamically adjust these values during training to help the model learn better!
                </p>
              </div>

            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end shrink-0">
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}