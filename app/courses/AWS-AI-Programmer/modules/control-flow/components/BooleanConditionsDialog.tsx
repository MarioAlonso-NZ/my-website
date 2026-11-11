'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, XCircle, X, ShieldAlert, Binary } from 'lucide-react';

export default function BooleanConditionsDialog() {
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
        Truth Values & Quiz Check
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
            {/* Cabecera */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Binary className="text-cyan-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Truth Value Testing & Boolean Conditions
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cuerpo del Modal con Scroll */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              
              {/* Sección 1: Truth Value Testing (Built-in False Objects) */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Built-in Objects Evaluated as False
                </span>
                <p className="text-xs text-slate-400">
                  By default, any object in Python is considered <strong className="text-emerald-400">True</strong> unless specified as <strong className="text-rose-400">False</strong> in the documentation:
                </p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span><strong>Constants:</strong> <code className="text-cyan-300 font-mono">None</code>, <code className="text-cyan-300 font-mono">False</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span><strong>Zero numerics:</strong> <code className="text-cyan-300 font-mono">0</code>, <code className="text-cyan-300 font-mono">0.0</code>, <code className="text-cyan-300 font-mono">0j</code>, <code className="text-cyan-300 font-mono">Decimal(0)</code>, <code className="text-cyan-300 font-mono">Fraction(0, 1)</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span><strong>Empty collections & sequences:</strong> <code className="text-cyan-300 font-mono">""</code>, <code className="text-cyan-300 font-mono">()</code>, <code className="text-cyan-300 font-mono">[]</code>, <code className="text-cyan-300 font-mono">{'{}'}</code>, <code className="text-cyan-300 font-mono">set()</code>, <code className="text-cyan-300 font-mono">range(0)</code></span>
                  </li>
                </ul>

                <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`errors = 3
if errors:
    print("You have {} errors to fix!".format(errors))
else:
    print("No errors to fix!")`}
                </pre>
              </div>

              {/* Sección 2: Buenas y Malas Prácticas */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  Best Practices & Common Gotchas
                </span>
                
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-800/30">
                    <span className="font-bold text-rose-300 block mb-1">Bad: Redundant Boolean Comparison</span>
                    <code className="text-slate-300 font-mono">if is_cold == True:</code>
                    <span className="text-slate-400 block mt-1">Use <code className="text-cyan-300 font-mono">if is_cold:</code> or <code className="text-cyan-300 font-mono">if not is_cold:</code> directly.</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-800/30">
                    <span className="font-bold text-rose-300 block mb-1">Bad: Natural Language Fallacy</span>
                    <code className="text-slate-300 font-mono">if weather == "snow" or "rain":</code>
                    <span className="text-slate-400 block mt-1"><code className="text-cyan-300 font-mono">"rain"</code> is a non-empty string which evaluates to True! Use: <code className="text-emerald-300 font-mono">if weather in ("snow", "rain"):</code></span>
                  </div>
                </div>
              </div>

              {/* Sección 3: Air Traffic Control Quiz */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Quiz: Air Traffic Control Evaluation
                </span>
                <p className="text-xs text-slate-400">
                  Given: <code className="text-cyan-300 font-mono">altitude = 10000</code>, <code className="text-cyan-300 font-mono">speed = 250</code>, <code className="text-cyan-300 font-mono">propulsion = "Propeller"</code>:
                </p>

                <div className="overflow-x-auto rounded-lg border border-slate-800">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <th className="py-2.5 px-3">Expression</th>
                        <th className="py-2.5 px-3">Evaluation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="py-2.5 px-3 text-slate-300">altitude &lt; 1000 and speed &gt; 100</td>
                        <td className="py-2.5 px-3 text-rose-400 font-bold">False</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-slate-300">(propulsion in ["Jet", "Turboprop"]) and speed &lt; 300 and altitude &gt; 20000</td>
                        <td className="py-2.5 px-3 text-rose-400 font-bold">False</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-slate-300">not (speed &gt; 400 and propulsion == "Propeller")</td>
                        <td className="py-2.5 px-3 text-emerald-400 font-bold">True</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-slate-300">(altitude &gt; 500 and speed &gt; 100) or not propulsion == "Propeller"</td>
                        <td className="py-2.5 px-3 text-emerald-400 font-bold">True</td>
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