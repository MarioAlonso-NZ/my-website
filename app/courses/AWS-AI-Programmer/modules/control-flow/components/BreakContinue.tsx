'use client';

import React from 'react';
import { FastForward, Octagon, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function BreakContinue() {
  
  // Salida calculada para el Método 1 (Solo break)
  const method1Output = `METHOD 1
current weight: 0
  adding bananas (15)
current weight: 15
  adding mattresses (24)
current weight: 39
  adding dog kennels (42)
current weight: 81
  adding machine (120)
current weight: 201
  breaking loop now!

Final Weight: 201
Final Items: ['bananas', 'mattresses', 'dog kennels', 'machine']`;

  // Salida calculada para el Método 2 (Break + Continue con comprobación anticipada)
  const method2Output = `METHOD 2
current weight: 0
  adding bananas (15)
current weight: 15
  adding mattresses (24)
current weight: 39
  adding dog kennels (42)
current weight: 81
  skipping machine (120)
current weight: 81
  adding cheeses (5)

Final Weight: 86
Final Items: ['bananas', 'mattresses', 'dog kennels', 'cheeses']`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <FastForward className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Loop Control Directives: Break and Continue
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Gain granular control over iteration flow to terminate execution early when conditions are met or bypass specific elements without abandoning the entire loop.
        </p>
      </div>

      {/* 2. Directivas Clave */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* break */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
            <Octagon size={15} />
            <span>break keyword</span>
          </div>
          <p className="text-xs text-slate-400">
            Terminates the loop immediately and resumes execution at the next statement outside the loop block. Essential for early stopping in model training or search algorithms.
          </p>
        </div>

        {/* continue */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <FastForward size={15} />
            <span>continue keyword</span>
          </div>
          <p className="text-xs text-slate-400">
            Bypasses the remaining statements in the current iteration and jumps directly to the beginning of the next cycle. Common in data preprocessing when encountering missing values (NaNs).
          </p>
        </div>

      </div>

      {/* 3. Caso Práctico: Problema del Cargamento (Método 1 - Falla con Límite de Peso) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <AlertTriangle className="text-rose-400" size={15} />
          <span>Method 1: Naive Break Check (Weight Limit Overrun)</span>
        </div>
        <p className="text-xs text-slate-400">
          Breaking only after <code className="text-rose-400 font-mono">weight &gt;= 100</code> causes the cargo load to significantly exceed the maximum threshold because the item that exceeded the limit was already committed.
        </p>

        <RunnablePythonCode
          code={`manifest = [("bananas", 15), ("mattresses", 24), ("dog kennels", 42), 
            ("machine", 120), ("cheeses", 5)]

# The code breaks the loop when weight exceeds or reaches the limit
print("METHOD 1")
weight = 0
items = []

for cargo_name, cargo_weight in manifest:
    print("current weight: {}".format(weight))
    if weight >= 100:
        print("  breaking loop now!")
        break
    else:
        print("  adding {} ({})".format(cargo_name, cargo_weight))
        items.append(cargo_name)
        weight += cargo_weight

print("\\nFinal Weight: {}".format(weight))
print("Final Items: {}".format(items))`}
          output={method1Output}
        />
      </div>

      {/* 4. Caso Práctico: Problema del Cargamento (Método 2 - Break + Continue) */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <CheckCircle2 className="text-emerald-400" size={15} />
          <span>Method 2: Combining Pre-Check, Continue, and Break</span>
        </div>
        <p className="text-xs text-slate-400">
          By checking <code className="text-cyan-300 font-mono">elif weight + cargo_weight &gt; 100: continue</code>, heavy items are skipped while still allowing subsequent smaller items (like cheese) to fit aboard.
        </p>

        <RunnablePythonCode
          code={`manifest = [("bananas", 15), ("mattresses", 24), ("dog kennels", 42), ("machine", 120), ("cheeses", 5)]

# Skips an iteration when adding an item would exceed the limit
# Breaks the loop if weight is greater than or equal to the limit
print("\\nMETHOD 2")
weight = 0
items = []

for cargo_name, cargo_weight in manifest:
    print("current weight: {}".format(weight))
    if weight >= 100:
        print("  breaking from the loop now!")
        break
    elif weight + cargo_weight > 100:
        print("  skipping {} ({})".format(cargo_name, cargo_weight))
        continue
    else:
        print("  adding {} ({})".format(cargo_name, cargo_weight))
        items.append(cargo_name)
        weight += cargo_weight

print("\\nFinal Weight: {}".format(weight))
print("Final Items: {}".format(items))`}
          output={method2Output}
        />
      </div>

    </div>
  );
}