"use client";

import React, { useState, useEffect } from "react";
import { Info, X, ScanSearch, Tag, Calendar, User, Building2 } from "lucide-react";

export default function NERDialog() {
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
        What is NER?
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
                  <ScanSearch className="text-emerald-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Named Entity Recognition</h2>
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
                <strong>NER</strong> is a Natural Language Processing (NLP) technique used to locate and classify specific pieces of information in text into predefined categories like <strong>People</strong>, <strong>Organizations</strong>, <strong>Locations</strong>, and <strong>Dates</strong>.
              </p>

              {/* Visual Example */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">How a model reads text:</h4>
                <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-slate-300">
                  <span>[</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 flex items-center gap-1">
                    <Building2 size={12}/> Apple
                  </span>
                  <span>] was founded by [</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30 flex items-center gap-1">
                    <User size={12}/> Steve Jobs
                  </span>
                  <span>] in [</span>
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded border border-amber-500/30 flex items-center gap-1">
                    <Calendar size={12}/> 1976
                  </span>
                  <span>].</span>
                </div>
              </div>

              {/* Why it matters */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-200 text-sm">Why do we prepare the text?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  NLP models often have strict limits on how much text they can process at once. As seen in the quiz, we must use functions like <code className="text-cyan-300">len()</code> and string concatenation to ensure names fit within the model's character limits before feeding them into the NER system.
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