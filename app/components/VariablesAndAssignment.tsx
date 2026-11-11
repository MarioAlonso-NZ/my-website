'use client';

import React from 'react';

export default function VariablesAndAssignment() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Explicación Variables I y II */}
      <div className="space-y-3">
        <p>
          Variables are used all the time in Python! When we assign a value, the item on the right is assigned to the name on the left (e.g., <code className="text-cyan-400 font-mono">mv_population = 74728</code>). Once assigned, we can access the value anytime using its variable name.
        </p>
        <p>
          We can also assign multiple variables in a single line (e.g., <code className="text-cyan-400 font-mono">x, y, z = 3, 4, 5</code>), though keeping names descriptive is always best practice.
        </p>
      </div>

      {/* Reglas de Nombrado y Snake Case */}
      <div className="space-y-3 bg-slate-950 p-5 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-sm">Rules for Naming Variables in Python:</h4>
        <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-400">
          <li>Only use ordinary letters, numbers, and underscores (<code className="text-cyan-400 font-mono">_</code>). No spaces allowed.</li>
          <li>Must start with a letter or an underscore.</li>
          <li>Cannot use Python reserved keywords (like <code className="text-purple-400 font-mono">class</code>, <code className="text-purple-400 font-mono">def</code>, <code className="text-purple-400 font-mono">for</code>, <code className="text-purple-400 font-mono">return</code>, etc.).</li>
          <li>Use <span className="text-cyan-400 font-semibold">snake case</span> (all lowercase words separated by underscores, e.g., <code className="text-cyan-400 font-mono">my_height = 58</code>).</li>
        </ul>
      </div>

      {/* Tabla de Operadores de Asignación */}
      <div className="space-y-3">
        <h4 className="font-bold text-white text-sm">Assignment Operators Reference</h4>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-xs uppercase bg-slate-900/50">
                <th className="py-3 px-4">Symbol</th>
                <th className="py-3 px-4">Example</th>
                <th className="py-3 px-4">Equivalent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400 font-bold text-sm">=</td>
                <td className="py-3 px-4 text-slate-300">x = 2</td>
                <td className="py-3 px-4 text-slate-400">x = 2</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400 font-bold text-sm">+=</td>
                <td className="py-3 px-4 text-slate-300">x += 2</td>
                <td className="py-3 px-4 text-slate-400">x = x + 2</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400 font-bold text-sm">-=</td>
                <td className="py-3 px-4 text-slate-300">x -= 2</td>
                <td className="py-3 px-4 text-slate-400">x = x - 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}