'use client';

import React from 'react';
import { Package, FileCode2, Terminal, ShieldCheck, Share2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ImportingLocalScripts() {

  // Salida calculada cuando useful_functions.py se ejecuta directamente como script principal
  const directExecutionOutput = `Testing mean function
Testing add_five function
All tests passed!`;

  // Salida calculada al ejecutar demo.py importando useful_functions como módulo
  const importedExecutionOutput = `Scores: [88, 92, 79, 93, 85]
Original Mean: 87.4  New Mean: 92.4
__name__ in demo.py: __main__
uf.__name__ from import: useful_functions`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Package className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Importing Local Scripts & Modular Code Organization
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Decompose production pipelines across multiple files, reuse helper utilities with aliases, and isolate entry-point execution using the <code className="text-cyan-300 font-mono">if __name__ == '__main__':</code> idiom.
        </p>
      </div>

      {/* 2. Conceptos Clave de Modularidad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. import without .py</span>
          <p className="text-slate-400">Specify the file name without the extension (<code className="text-slate-300 font-mono">import useful_functions</code>) to create a module object.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Module Aliasing (as)</span>
          <p className="text-slate-400">Assign clean shorthand handles (<code className="text-slate-300 font-mono">import useful_functions as uf</code>) to streamline repetitive calls.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. if __name__ == '__main__'</span>
          <p className="text-slate-400">Python sets <code className="text-slate-300 font-mono">__name__ = "__main__"</code> only for the directly executed script, suppressing test suites during import.</p>
        </div>
      </div>

      {/* 3. Script 1: useful_functions.py */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <FileCode2 className="text-purple-400" size={15} />
          <span>Script 1: useful_functions.py (Direct Execution & Unit Tests)</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          When run directly, the module evaluates its <code className="text-cyan-300 font-mono">main()</code> block and executes self-contained assertion tests.
        </p>

        <RunnablePythonCode
          code={`def mean(num_list):
    return sum(num_list) / len(num_list)

def add_five(num_list):
    return [n + 5 for n in num_list]

def main():
    print("Testing mean function")
    n_list = [34, 44, 23, 46, 12, 24]
    correct_mean = 30.5
    assert mean(n_list) == correct_mean

    print("Testing add_five function")
    correct_list = [39, 49, 28, 51, 17, 29]
    assert add_five(n_list) == correct_list

    print("All tests passed!")

# When executed directly, __name__ evaluates to '__main__'
if __name__ == '__main__':
    main()`}
          output={directExecutionOutput}
        />
      </div>

      {/* 4. Script 2: demo.py */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Share2 className="text-cyan-400" size={15} />
          <span>Script 2: demo.py (Importing as Module with Alias)</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          When imported into <code className="text-cyan-300 font-mono">demo.py</code>, the test suite in <code className="text-cyan-300 font-mono">useful_functions.py</code> is safely suppressed because its internal <code className="text-cyan-300 font-mono">__name__</code> becomes <code className="text-slate-300 font-mono">"useful_functions"</code> instead of <code className="text-cyan-300 font-mono">"__main__"</code>.
        </p>

        <RunnablePythonCode
          code={`# Simulating: import useful_functions as uf
# The helper functions are accessed cleanly via dot notation

scores = [88, 92, 79, 93, 85]

# Calculations using imported functions
mean = mean(scores)
curved = add_five(scores)
mean_c = mean(curved)

print("Scores:", scores)
print(f"Original Mean: {mean}  New Mean: {mean_c}")

# Scope inspection
print(f"__name__ in demo.py: {'__main__'}")
print(f"uf.__name__ from import: {'useful_functions'}")`}
          output={importedExecutionOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <ShieldCheck size={16} className="shrink-0 text-emerald-400" />
          <span>Best Practice: Always wrap executable entry points and test code inside main() guarded by if __name__ == '__main__': to keep modules safe for import in production AI systems.</span>
        </div>
      </div>

    </div>
  );
}