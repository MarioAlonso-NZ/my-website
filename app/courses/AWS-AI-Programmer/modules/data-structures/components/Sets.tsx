'use client';

import React from 'react';
import SetsQuizDialog from './SetsQuizDialog';

export default function Sets() {
    return (
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">

            {/* Introducción a Sets */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                <div>
                    <h3 className="font-bold text-white text-base"># Sets</h3>
                    <p className="text-xs text-slate-400">
                        A <span className="text-cyan-400 font-semibold">set</span> is a data type for mutable, unordered collections of unique elements.
                    </p>
                </div>

                {/* Trigger Pop-up Modal */}
                <SetsQuizDialog />
            </div>
            <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
                {`numbers = [99, 100, 1, 3, 4, 99, 100]
unique_nums = set(numbers)
print(unique_nums)  # Output: {1, 3, 99, 100, 4}`}
            </pre>

            {/* Operaciones Básicas */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">
                    Set Methods & Unordered Traversal
                </h4>
                <p className="text-xs text-slate-400">
                    Sets support membership checks (<code className="text-cyan-400 font-mono">in</code>), adding items with <code className="text-cyan-400 font-mono">.add()</code>, and removing items with <code className="text-cyan-400 font-mono">.pop()</code>. Because sets are unordered, <code className="text-cyan-400 font-mono">.pop()</code> removes and returns an arbitrary element.
                </p>
                <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
                    {`fruit = {"apple", "banana", "orange", "grapefruit"}

print("watermelon" in fruit)  # Output: False
fruit.add("watermelon")
print(fruit.pop())            # Removes an arbitrary element (e.g. 'grapefruit')`}
                </pre>
            </div>

            {/* Operaciones Matemáticas y Benchmarking */}
            <div className="space-y-3">
                <h3 className="font-bold text-white text-base"># Set Operations vs. Lists (Performance)</h3>
                <p className="text-xs text-slate-400">
                    Mathematical operations like <code className="text-cyan-400 font-mono">union</code>, <code className="text-cyan-400 font-mono">intersection</code>, and <code className="text-cyan-400 font-mono">difference</code> run significantly faster on sets (often 2x to 3x faster) compared to iterating over lists:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                    <table className="w-full text-left border-collapse text-xs font-mono">
                        <thead>
                            <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                                <th className="py-2.5 px-3">Operation</th>
                                <th className="py-2.5 px-3">Set Method</th>
                                <th className="py-2.5 px-3">Performance Note</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                            <tr className="hover:bg-slate-900/30 transition">
                                <td className="py-2.5 px-3 text-white font-semibold">Union</td>
                                <td className="py-2.5 px-3 text-cyan-400">set1.union(set2)</td>
                                <td className="py-2.5 px-3 text-slate-400">Much faster than converting list concatenations</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition">
                                <td className="py-2.5 px-3 text-white font-semibold">Intersection</td>
                                <td className="py-2.5 px-3 text-cyan-400">set1.intersection(set2)</td>
                                <td className="py-2.5 px-3 text-slate-400">Direct hash-table lookups beat list comprehensions</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition">
                                <td className="py-2.5 px-3 text-white font-semibold">Difference</td>
                                <td className="py-2.5 px-3 text-cyan-400">set1.difference(set2)</td>
                                <td className="py-2.5 px-3 text-slate-400">Fast membership exclusion</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}