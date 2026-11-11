'use client';

import React from 'react';

export default function ListsAndMembership() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Sección 1: Lists & Indexing */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Lists!</h3>
        <p className="text-xs text-slate-400">
          A <span className="text-cyan-400 font-semibold">list</span> is one of the most common and basic data structures in Python. You can create a list with square brackets containing any mix of data types.
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`list_of_random_things = [1, 3.4, 'a string', True]

# All ordered containers are indexed starting at 0:
print(list_of_random_things[0])  # Output: 1

# Negative indexing starts from the end (-1 is the last element):
print(list_of_random_things[-1]) # Output: True`}
        </pre>
      </div>

      {/* Sección 2: Slice and Dice */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Slice and Dice with Lists</h3>
        <p className="text-xs text-slate-400">
          Slicing allows pulling more than one value. Remember: the lower index is <span className="text-white font-semibold">inclusive</span> and the upper index is <span className="text-white font-semibold">exclusive</span>.
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`# Slicing from index 1 up to (not including) 2
print(list_of_random_things[1:2])  # Output: [3.4]

# Omitting bounds (from beginning or to the end):
print(list_of_random_things[:2])   # Output: [1, 3.4]
print(list_of_random_things[1:])   # Output: [3.4, 'a string', True]`}
        </pre>
      </div>

      {/* Sección 3: Membership Operators */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Are You In or Not In? (Membership Operators)</h3>
        <p className="text-xs text-slate-400">
          Use <code className="text-cyan-400 font-mono">in</code> and <code className="text-cyan-400 font-mono">not in</code> to evaluate if an element exists within a list or if a string is a substring.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-xs uppercase bg-slate-900/50">
                <th className="py-3 px-4">Keyword / Operator</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400 font-bold">in</td>
                <td className="py-3 px-4 text-slate-300">Evaluates if an element exists within our list.</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400 font-bold">not in</td>
                <td className="py-3 px-4 text-slate-300">Evaluates if an element does not exist within our list.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sección 4: Ejemplo Financiero (Vanguard Index Fund) */}
      <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">Using Lists in the Index Fund Example</h4>
        <p className="text-xs text-slate-300">
          For the <a href="https://institutional.vanguard.com/investments/product-details/fund/0033" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Vanguard Institutional Index Fund</a>, ticker symbol <code className="text-cyan-400 font-mono">VINIX</code> organizes top holdings cleanly:
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`VINIX = ['C', 'MA', 'BA', 'PG', 'CSCO', 'VZ', 'PFE', 'HD', 'INTC', 'T', 'V', 'UNH', 'WFC', 'CVX', 'BAC', 'JNJ', 'GOOGL', 'GOOG', 'BRK.B', 'XOM', 'JPM', 'FB', 'AMZN', 'MSFT', 'AAPL']

# Checking membership:
print('GOOGL' in VINIX)  # Output: True
print('GE' in VINIX)     # Output: False`}
        </pre>
      </div>

    </div>
  );
}