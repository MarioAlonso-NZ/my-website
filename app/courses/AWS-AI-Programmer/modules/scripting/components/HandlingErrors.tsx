'use client';

import React from 'react';
import { ShieldCheck, Terminal, Layers } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';
import HandlingErrorsDialog from './HandlingErrorsDialog';

export default function HandlingErrors() {

  // Salida calculada para el flujo try-except-else-finally
  const tryFlowOutput = `Attempting batch conversion with input: 'invalid_int'
Caught ValueError: Cannot convert non-numeric string.
FINALLY block executed: Cleaned up buffer.

Attempting batch conversion with input: '64'
Conversion successful. Batch size: 64
ELSE block executed: Model allocation started.
FINALLY block executed: Cleaned up buffer.`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado con el Dialog */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="text-cyan-400" size={18} />
            <h3 className="font-bold text-base">
              # Handling Errors (Try Statements & Exception Specifiers)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Control program recovery, specify targeted exceptions, and ensure cleanup execution with try, except, else, and finally.
          </p>
        </div>

        {/* Modal Trigger */}
        <HandlingErrorsDialog />
      </div>

      {/* 2. Código Ejecutable Interactivo */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Terminal className="text-cyan-400" size={15} />
          <span>Complete 4-Clause Lifecycle Simulation</span>
        </div>
        <p className="text-xs text-slate-400">
          Observe how <code className="text-cyan-300 font-mono">else</code> runs only on success and <code className="text-amber-300 font-mono">finally</code> guarantees cleanup in both error and success cases.
        </p>

        <RunnablePythonCode
          code={`def simulate_pipeline_input(raw_input):
    print(f"Attempting batch conversion with input: {repr(raw_input)}")
    try:
        batch_size = int(raw_input)
    except ValueError:
        print("Caught ValueError: Cannot convert non-numeric string.")
    else:
        print(f"Conversion successful. Batch size: {batch_size}")
        print("ELSE block executed: Model allocation started.")
    finally:
        print("FINALLY block executed: Cleaned up buffer.\\n")

# Run test cases
simulate_pipeline_input("invalid_int")
simulate_pipeline_input("64")`}
          output={tryFlowOutput}
        />
      </div>

    </div>
  );
}