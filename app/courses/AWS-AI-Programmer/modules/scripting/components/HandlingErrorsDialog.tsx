'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, ShieldAlert, CheckCircle2, RefreshCw, Layers, X, Code2 } from 'lucide-react';

export default function HandlingErrorsDialog() {
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
        Explain try-except-else-finally
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <ShieldAlert className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    Exception Handling Architecture
                  </h2>
                  <p className="text-xs text-slate-400">
                    The 4 clauses of Python try statements and exception targeting
                  </p>
                </div>
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
              
              {/* Desglose de las 4 Cláusulas */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  The Four Clauses of a Try Statement
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {/* try */}
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold">
                      <Code2 size={14} />
                      <span>try (Mandatory)</span>
                    </div>
                    <p className="text-slate-400">
                      The first block Python executes. Contains code that may trigger a runtime exception.
                    </p>
                  </div>

                  {/* except */}
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-400 font-mono font-bold">
                      <ShieldAlert size={14} />
                      <span>except</span>
                    </div>
                    <p className="text-slate-400">
                      Catches and handles exceptions that occur within the try block, preventing program crash.
                    </p>
                  </div>

                  {/* else */}
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
                      <CheckCircle2 size={14} />
                      <span>else</span>
                    </div>
                    <p className="text-slate-400">
                      Executes only if the try block completes successfully with zero exceptions raised.
                    </p>
                  </div>

                  {/* finally */}
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold">
                      <RefreshCw size={14} />
                      <span>finally</span>
                    </div>
                    <p className="text-slate-400">
                      Always executes before exiting the try construct, regardless of whether errors occurred or the script is terminating.
                    </p>
                  </div>
                </div>
              </div>

              {/* Especificación de Excepciones */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
                  Specifying Exception Types
                </span>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3 text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-slate-400 block font-sans">1. Single targeted exception:</span>
                    <pre className="text-cyan-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
{`try:
    num = int(raw_input)
except ValueError:
    print("Invalid numeric string")`}
                    </pre>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 block font-sans">2. Grouping multiple exceptions with a tuple:</span>
                    <pre className="text-purple-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
{`try:
    process_data()
except (ValueError, KeyboardInterrupt):
    print("Handled either a conversion failure or user cancellation")`}
                    </pre>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 block font-sans">3. Multiple distinct except branches:</span>
                    <pre className="text-emerald-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
{`try:
    compute_gradient()
except ValueError:
    print("Data type conversion failed")
except ZeroDivisionError:
    print("Encountered zero variance / division by zero")`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Ejemplo Completo */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  Real Pipeline Execution Pattern
                </span>
                <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`while True:
    try:
        x = int(input('Enter batch size: '))
        break
    except ValueError:
        print("That's not a valid integer!")
    finally:
        print("Attempted input\\n")`}
                </pre>
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