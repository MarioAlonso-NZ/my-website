'use client';

import React from 'react';

export default function ListMethods() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Sección 1: Useful Functions for Lists I */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Useful Functions for Lists I</h3>
        <p className="text-xs text-slate-400">
          Python provides built-in functions that accept lists as arguments and return helpful analytics or modifications without altering the original list unnecessarily.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-400 block">len(list)</span>
            <p className="text-xs text-slate-300">Returns the total number of elements in a list.</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-400 block">max(list)</span>
            <p className="text-xs text-slate-300">Returns the greatest element (largest number or last alphabetical string).</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-400 block">min(list)</span>
            <p className="text-xs text-slate-300">Returns the smallest element in a list (opposite of max).</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-400 block">sorted(list)</span>
            <p className="text-xs text-slate-300">Returns a copy of a list in order from smallest to largest, leaving the original unchanged.</p>
          </div>
        </div>
      </div>

      {/* Sección 2: Useful Functions for Lists II (.join() & .append()) */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Useful Functions for Lists II</h3>
        
        {/* Join Method */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-purple-400">The join method</h4>
          <p className="text-xs text-slate-400">
            <code className="text-cyan-400 font-mono">.join()</code> is a string method that takes a list of strings as an argument, returning a single string joined by a separator string.
          </p>
          <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`# Example 1: Newline separator
new_str = "\\n".join(["fore", "aft", "starboard", "port"])
print(new_str)

# Example 2: Hyphen separator
name = "-".join(["García", "O'Kelly", "Davis"])
print(name)  # Output: García-O'Kelly-Davis`}
          </pre>
        </div>

        {/* Append Method */}
        <div className="space-y-2 pt-2">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-purple-400">The append method</h4>
          <p className="text-xs text-slate-400">
            A helpful list method called <code className="text-cyan-400 font-mono">.append()</code> adds a new element directly to the end of an existing list (mutable operation).
          </p>
          <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`letters = ['a', 'b', 'c', 'd']
letters.append('z')
print(letters)  # Output: ['a', 'b', 'c', 'd', 'z']`}
          </pre>
        </div>
      </div>

    </div>
  );
}