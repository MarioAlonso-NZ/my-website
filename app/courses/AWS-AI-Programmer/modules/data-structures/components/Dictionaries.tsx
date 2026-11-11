'use client';

import React from 'react';
import { BookOpen, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Dictionaries() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Definición y Sintaxis Principal */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white">
          <BookOpen className="text-purple-400" size={18} />
          <h3 className="font-bold text-base"># Dictionaries</h3>
        </div>
        <p className="text-xs text-slate-400">
          A <span className="text-cyan-400 font-semibold">dictionary</span> is a mutable data type that stores mappings of unique <span className="text-white font-semibold">keys</span> to <span className="text-white font-semibold">values</span>. Keys must belong to an immutable type (strings, integers, floats, or tuples).
        </p>

        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`# General syntax: {key1: value1, key2: value2, ...}
elements = {"hydrogen": 1, "helium": 2, "carbon": 6}

# Keys can have mixed immutable types:
random_dict = {"abc": 1, 5: "hello"}

# Accessing values:
print(elements["helium"])     # Output: 2
print(random_dict["abc"])     # Output: 1`}
        </pre>
      </div>

      {/* 2. Mutabilidad e Inserción */}
      <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">
          Mutability: Adding & Updating Entries
        </h4>
        <p className="text-xs text-slate-300">
          Dictionaries can be updated in-place by assigning a value to a new or existing key:
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`elements["lithium"] = 3
print(elements)
# Output: {'hydrogen': 1, 'helium': 2, 'carbon': 6, 'lithium': 3}`}
        </pre>
      </div>

      {/* 3. Lookup Seguro: [] vs .get() */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Lookup Methods: [] vs. .get()</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-slate-950 p-4 rounded-xl border border-rose-900/40 space-y-2">
            <div className="flex items-center gap-1.5 text-rose-400 font-mono font-bold text-xs">
              <AlertTriangle size={14} />
              <span>Square Brackets [ ]</span>
            </div>
            <p className="text-xs text-slate-400">
              Accessing a missing key causes a runtime crash:
            </p>
            <pre className="bg-[#121824] border border-slate-800 rounded-lg p-2.5 font-mono text-xs text-rose-300 overflow-x-auto">
{`# Crashes with KeyError
elements["dilithium"]
# KeyError: 'dilithium'`}
            </pre>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-emerald-900/40 space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-xs">
              <ShieldCheck size={14} />
              <span>Safe Access: .get()</span>
            </div>
            <p className="text-xs text-slate-400">
              Returns <code className="text-cyan-400 font-mono">None</code> or a fallback value if missing:
            </p>
            <pre className="bg-[#121824] border border-slate-800 rounded-lg p-2.5 font-mono text-xs text-emerald-300 overflow-x-auto">
{`elements.get("dilithium")  # None
elements.get("kryptonite", "Not found!")
# Output: "Not found!"`}
            </pre>
          </div>

        </div>
      </div>

      {/* 4. Operadores de Identidad (is vs. ==) */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Identity Operators: is vs. ==</h3>
        <p className="text-xs text-slate-400">
          Use identity operators to evaluate whether two variables point to the exact same object in memory, not just if their contents are equal.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <th className="py-2.5 px-3">Keyword</th>
                <th className="py-2.5 px-3">Behavior</th>
                <th className="py-2.5 px-3">Example Syntax</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2.5 px-3 text-cyan-400 font-bold">is</td>
                <td className="py-2.5 px-3 text-slate-300">Evaluates if both sides share the same memory identity</td>
                <td className="py-2.5 px-3 text-slate-400">n is None</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2.5 px-3 text-cyan-400 font-bold">is not</td>
                <td className="py-2.5 px-3 text-slate-300">Evaluates if both sides have different identities</td>
                <td className="py-2.5 px-3 text-slate-400">n is not None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a == b)  # True  (identical values)
print(a is b)  # True  (exact same reference)
print(a == c)  # True  (identical values)
print(a is c)  # False (different objects in memory)`}
        </pre>
      </div>

      {/* 5. Claves Válidas vs Inválidas */}
      <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">
          Dictionary Keys Rule: Must Be Immutable
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/30 text-emerald-300 space-y-1">
            <span className="font-bold block">Valid Key Types (Immutable):</span>
            <p className="text-slate-400 font-mono">str, int, float, tuple</p>
          </div>
          <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-800/30 text-rose-300 space-y-1">
            <span className="font-bold block">Invalid Key Types (Mutable):</span>
            <p className="text-slate-400 font-mono">list, set, dict</p>
          </div>
        </div>
      </div>

    </div>
  );
}