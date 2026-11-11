'use client';

import React from 'react';
import { BookKey, KeyRound, Sparkles } from 'lucide-react';
import FormatSpecifierDialog from './FormatSpecifierDialog';

export default function IteratingDictionaries() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado con el modal */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <h3 className="font-bold text-white text-base">
            # Iterating Through Dictionaries with For Loops
          </h3>
          <p className="text-xs text-slate-400">
            Learn how to access keys, unpack (key, value) pairs simultaneously, or isolate values when looping over dictionaries.
          </p>
        </div>

        {/* Modal Trigger */}
        <FormatSpecifierDialog />
      </div>

      {/* 2. Enfoque Estándar: Solo Claves */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <KeyRound className="text-cyan-400" size={15} />
          <span>Default Traversal: Iterating Through Keys</span>
        </div>
        <p className="text-xs text-slate-400">
          When iterating directly through a dictionary with <code className="text-cyan-300 font-mono">for k in some_dict:</code>, Python yields only the <span className="text-white font-semibold">keys</span>.
        </p>

        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`cast = {
    "Jerry Seinfeld": "Jerry Seinfeld",
    "Julia Louis-Dreyfus": "Elaine Benes",
    "Jason Alexander": "George Costanza",
    "Michael Richards": "Cosmo Kramer"
}

# Iterating in the default way gives keys only:
for key in cast:
    print(key)

# Output:
# Jerry Seinfeld
# Julia Louis-Dreyfus
# Jason Alexander
# Michael Richards`}
        </pre>
      </div>

      {/* 3. Desempaquetado con .items() */}
      <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Sparkles className="text-purple-400" size={15} />
          <span>Iterating Keys & Values: The .items() Method</span>
        </div>
        <p className="text-xs text-slate-400">
          The <code className="text-cyan-300 font-mono">.items()</code> method returns an iterable sequence of <span className="text-cyan-400 font-mono">(key, value)</span> tuples, enabling clean tuple unpacking directly inside the loop declaration.
        </p>

        <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`for key, value in cast.items():
    print("Actor: {:<20} Role: {}".format(key, value))

# Output:
# Actor: Jerry Seinfeld        Role: Jerry Seinfeld
# Actor: Julia Louis-Dreyfus   Role: Elaine Benes
# Actor: Jason Alexander       Role: George Costanza
# Actor: Michael Richards      Role: Cosmo Kramer`}
        </pre>
      </div>

      {/* 4. Resumen de Métodos de Iteración */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">
          Dictionary Traversal Cheat Sheet
        </h4>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <th className="py-2.5 px-3">Syntax Pattern</th>
                <th className="py-2.5 px-3">Yielded Elements</th>
                <th className="py-2.5 px-3">Typical AI / Data Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2.5 px-3 text-cyan-400 font-semibold">for k in dict:</td>
                <td className="py-2.5 px-3 text-slate-300">Keys only</td>
                <td className="py-2.5 px-3 text-slate-400">Checking model names, feature headers, or vocabulary lists</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2.5 px-3 text-purple-400 font-semibold">for k, v in dict.items():</td>
                <td className="py-2.5 px-3 text-slate-300">Tuple of (Key, Value)</td>
                <td className="py-2.5 px-3 text-slate-400">Inspecting model metrics (name: accuracy) or hyperparameter settings</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-2.5 px-3 text-emerald-400 font-semibold">for v in dict.values():</td>
                <td className="py-2.5 px-3 text-slate-300">Values only</td>
                <td className="py-2.5 px-3 text-slate-400">Averaging benchmark losses, batch sizes, or total tokens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}