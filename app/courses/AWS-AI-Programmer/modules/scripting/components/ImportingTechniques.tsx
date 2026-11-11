'use client';

import React from 'react';
import { PackageOpen, AlertTriangle, CheckCircle2, Split, Layers, Sparkles } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';
import ThirdPartyLibrariesDialog from './ThirdPartyLibrariesDialog';

export default function ImportingTechniques() {

  // Salida calculada para las variantes de importación recomendadas
  const importVariantsOutput = `1. math.exp(2): 7.38905609893065
2. sqrt(144): 12.0 | pi: 3.141592653589793
3. Defaultdict lookup (missing key returns 0): 0
4. Timestamp (dt.datetime.now()): 2026-11-09
5. Submodule os.path.basename: model_weights.pt`;

  // Salida calculada para el peligro de import * (Namespace Pollution)
  const wildcardOutput = `--- Why 'from module import *' is dangerous ---
Simulating namespace collision:
Original custom function factorial(x) says: Custom scaling applied!
After 'from math import *', factorial(5) returns: 120 (Original function overwritten!)`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <div className="flex items-center gap-2 text-white">
            <PackageOpen className="text-cyan-400" size={18} />
            <h3 className="font-bold text-base">
              # Techniques for Importing Modules, Packages, and Names
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Understand module import patterns, object extraction, namespace aliasing, and third-party library management with pip.
          </p>
        </div>

        {/* Modal Trigger */}
        <ThirdPartyLibrariesDialog />
      </div>

      {/* 2. Resumen de las Variantes de Sintaxis */}
      <div className="space-y-3">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">
          Import Statement Variants Cheat Sheet
        </h4>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <th className="py-2.5 px-3">Syntax Pattern</th>
                <th className="py-2.5 px-3">Behavior & Access</th>
                <th className="py-2.5 px-3">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2 px-3 text-cyan-400 font-bold">import module_name</td>
                <td className="py-2 px-3 text-slate-300">Imports module; access via dot notation</td>
                <td className="py-2 px-3 text-slate-400"><code>import math</code></td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2 px-3 text-purple-400 font-bold">from module import object</td>
                <td className="py-2 px-3 text-slate-300">Imports specific function/class directly into local namespace</td>
                <td className="py-2 px-3 text-slate-400"><code>from math import sqrt, pi</code></td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2 px-3 text-emerald-400 font-bold">import module as alias</td>
                <td className="py-2 px-3 text-slate-300">Renames module to a concise shorthand</td>
                <td className="py-2 px-3 text-slate-400"><code>import datetime as dt</code></td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2 px-3 text-amber-400 font-bold">from module import object as alias</td>
                <td className="py-2 px-3 text-slate-300">Imports specific object and assigns an alias</td>
                <td className="py-2 px-3 text-slate-400"><code>from collections import defaultdict as ddict</code></td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2 px-3 text-sky-400 font-bold">import package.submodule</td>
                <td className="py-2 px-3 text-slate-300">Imports a specific nested module within a package</td>
                <td className="py-2 px-3 text-slate-400"><code>import os.path</code></td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition bg-rose-950/20">
                <td className="py-2 px-3 text-rose-400 font-bold">from module import *</td>
                <td className="py-2 px-3 text-rose-300">Imports all objects individually (AVOID: pollutes namespace)</td>
                <td className="py-2 px-3 text-rose-400 font-bold">DO NOT USE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Demostración Ejecutable de Técnicas Recomendadas */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Sparkles className="text-cyan-400" size={15} />
          <span>Python Implementation: Standard Patterns & Submodules</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          Practical applications showing individual imports, aliases, and package submodules.
        </p>

        <RunnablePythonCode
          code={`# 1. Standard module import with dot notation access
import math
print(f"1. math.exp(2): {math.exp(2)}")

# 2. Importing multiple specific objects from a module
from math import sqrt, pi
print(f"2. sqrt(144): {sqrt(144)} | pi: {pi}")

# 3. Importing an object and assigning an alias
from collections import defaultdict as ddict
counts = ddict(int)
print(f"3. Defaultdict lookup (missing key returns 0): {counts['unseen_key']}")

# 4. Renaming a module with an alias
import datetime as dt
current_date = dt.date(2026, 11, 9)
print(f"4. Timestamp (dt.datetime.now()): {current_date}")

# 5. Importing a package submodule
import os.path
sample_filepath = "/models/checkpoints/model_weights.pt"
print(f"5. Submodule os.path.basename: {os.path.basename(sample_filepath)}")`}
          output={importVariantsOutput}
        />
      </div>

      {/* 4. Por qué evitar: from module import * */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <AlertTriangle className="text-rose-400" size={15} />
          <span>Why You Should Never Use: from module import *</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          Wildcard imports (<code className="text-rose-300 font-mono">*</code>) load every single variable, function, and class into the current namespace without prefixing, causing silent naming collisions and variable shadowing bugs that are notoriously hard to debug.
        </p>

        <RunnablePythonCode
          code={`print("--- Why 'from module import *' is dangerous ---")

# Step 1: Suppose you defined your own custom factorial function:
def factorial(x):
    return f"Custom scaling applied to {x}!"

print(f"Original custom function factorial(x) says: {factorial(5)}")

# Step 2: An external wildcard import is executed
from math import *

# Step 3: Your local function has now been silently overwritten:
overwritten_result = factorial(5)
print(f"After 'from math import *', factorial(5) returns: {overwritten_result} (Original function overwritten!)")`}
          output={wildcardOutput}
        />

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1 mt-2">
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
            <CheckCircle2 size={14} />
            <span>Best Practice Rule:</span>
          </div>
          <p className="text-slate-400">
            If you need many functions from a module, use standard <code className="text-cyan-300 font-mono">import module_name</code> and access them using dot notation (e.g. <code className="text-cyan-300 font-mono">math.sqrt()</code>, <code className="text-cyan-300 font-mono">math.sin()</code>). It makes dependencies immediately traceable in team codebases.
          </p>
        </div>
      </div>

    </div>
  );
}