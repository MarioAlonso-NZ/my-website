'use client';

import React from 'react';
import ListsCheckDialog from './ListsCheckDialog';

export default function MutabilityAndOrder() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">

      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <h3 className="font-bold text-white text-base"># Mutability vs. Immutability</h3>
          <p className="text-xs text-slate-400">
            Learn whether Python objects can be updated in-place or if they remain fixed.
          </p>
        </div>
        
        {/* Disparador del Modal */}
        <ListsCheckDialog />
      </div>
      
      {/* Sección 1: Mutability */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Mutability vs. Immutability</h3>
        <p className="text-xs text-slate-400">
          <span className="text-cyan-400 font-semibold">Mutability</span> refers to whether or not we can change an object once it has been created. If it can be changed, it is <span className="text-white font-semibold">mutable</span>; otherwise, it is <span className="text-white font-semibold">immutable</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-emerald-900/50">
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Lists are Mutable:</span>
            <pre className="font-mono text-xs text-slate-300 overflow-x-auto">
{`my_lst = [1, 2, 3, 4, 5]
my_lst[0] = 'one'
print(my_lst) 
# ['one', 2, 3, 4, 5]`}
            </pre>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-rose-900/50">
            <span className="text-xs font-mono font-bold text-rose-400 block mb-1">Strings are Immutable:</span>
            <pre className="font-mono text-xs text-slate-300 overflow-x-auto">
{`greeting = "Hello there"
greeting[0] = 'M' 
# TypeError: 'str' object 
# does not support item assignment`}
            </pre>
          </div>
        </div>
      </div>

      {/* Sección 2: Order & Slicing Advanced [start:stop:step] */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Advanced List Slicing: [start:stop:step]</h3>
        <p className="text-xs text-slate-400">
          Beyond basic bounds, slicing supports a third parameter called <span className="text-cyan-400 font-semibold">step</span>, which determines the jump size between elements. A negative step (like <code className="text-cyan-400 font-mono">::-1</code>) can be used to traverse or reverse a list.
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`# Predicted classes of a series of images
image_classifications = ['dog', 'cat', 'bird', 'cat', 'dog']

# Using [::-1] to reverse the list and check for palindromes
is_palindrome = (image_classifications == image_classifications[::-1])
print(is_palindrome)  # Output: True`}
        </pre>
      </div>

      {/* Sección 3: Quiz Reference Table */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Quiz: AI, Lists, and Mutability Reference</h3>
        <p className="text-xs text-slate-400">
          Given <code className="text-cyan-400 font-mono">sentence1 = "I wish to register a complaint."</code> and <code className="text-cyan-400 font-mono">sentence2 = ["I", "wish", "to", "register", "a", "complaint", "."]</code>:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-xs uppercase bg-slate-900/50">
                <th className="py-3 px-4">Python Code Expression</th>
                <th className="py-3 px-4">Result / Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400">sentence2[6] = "!"</td>
                <td className="py-3 px-4 text-slate-300">['I', 'wish', 'to', 'register', 'a', 'complaint', '!']</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400">sentence2[0] = "Our Majesty"</td>
                <td className="py-3 px-4 text-slate-300">['Our Majesty', 'wish', 'to', 'register', 'a', 'complaint', '.']</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400">sentence1[30] = "!"</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">Error (Strings are immutable)</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition">
                <td className="py-3 px-4 text-cyan-400">sentence2[0:2] = ["We", "want"]</td>
                <td className="py-3 px-4 text-slate-300">['We', 'want', 'to', 'register', 'a', 'complaint', '.']</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}