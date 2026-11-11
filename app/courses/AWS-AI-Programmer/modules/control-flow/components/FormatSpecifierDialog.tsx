'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, AlignLeft, X, Code2 } from 'lucide-react';

export default function FormatSpecifierDialog() {
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
        {"Explain {:<20} Notation"}
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
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <AlignLeft className="text-cyan-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  String Formatting: <code className="text-cyan-300 font-mono text-base">{`{:<20}`}</code>
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
              
              {/* Desglose de Sintaxis */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Syntax Anatomy Breakdown
                </span>
                <p className="text-xs text-slate-400">
                  Inside replacement braces <code className="text-cyan-300 font-mono">{`{}`}</code>, a colon <code className="text-cyan-300 font-mono">:</code> introduces format specifiers that control column width and alignment:
                </p>

                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-center space-y-1">
                    <span className="text-purple-400 font-bold text-base block">:</span>
                    <span className="text-slate-400 text-[11px]">Format specifier separator</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-center space-y-1">
                    <span className="text-cyan-400 font-bold text-base block">&lt;</span>
                    <span className="text-slate-400 text-[11px]">Left-aligns the inserted string</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-center space-y-1">
                    <span className="text-emerald-400 font-bold text-base block">20</span>
                    <span className="text-slate-400 text-[11px]">Minimum field width of 20 chars</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  If the text is shorter than 20 characters, Python pads the remaining spaces to the right with whitespace so that the following column aligns straight into a grid.
                </p>
              </div>

              {/* Ejemplo de Código */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
                  Visual Alignment Demonstration
                </span>
                <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`# Without {:<20} (ragged columns):
print("Actor: {} Role: {}".format("Jerry Seinfeld", "Jerry Seinfeld"))
print("Actor: {} Role: {}".format("Julia Louis-Dreyfus", "Elaine Benes"))

# Output:
# Actor: Jerry Seinfeld Role: Jerry Seinfeld
# Actor: Julia Louis-Dreyfus Role: Elaine Benes

# With {:<20} (clean column alignment):
print("Actor: {:<20} Role: {}".format("Jerry Seinfeld", "Jerry"))
print("Actor: {:<20} Role: {}".format("Julia Louis-Dreyfus", "Elaine"))

# Output:
# Actor: Jerry Seinfeld       Role: Jerry
# Actor: Julia Louis-Dreyfus  Role: Elaine`}
                </pre>
              </div>

              {/* Tabla de Modificadores */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Alignment Flags Reference
                </span>
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <th className="py-2.5 px-3">Flag</th>
                        <th className="py-2.5 px-3">Alignment</th>
                        <th className="py-2.5 px-3">Example Result (width 10)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="py-2 px-3 text-cyan-400 font-bold">&lt;</td>
                        <td className="py-2 px-3 text-slate-300">Left align</td>
                        <td className="py-2 px-3 text-slate-400"><code>"AI        "</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-purple-400 font-bold">&gt;</td>
                        <td className="py-2 px-3 text-slate-300">Right align</td>
                        <td className="py-2 px-3 text-slate-400"><code>"        AI"</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-emerald-400 font-bold">^</td>
                        <td className="py-2 px-3 text-slate-300">Center align</td>
                        <td className="py-2 px-3 text-slate-400"><code>"    AI    "</code></td>
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