'use client';

import React from 'react';
import { Repeat, AlertTriangle, CheckCircle2 } from 'lucide-react';
import BooleanConditionsDialog from './BooleanConditionsDialog';

export default function ForLoops() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Encabezado con el modal incorporado */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <h3 className="font-bold text-white text-base"># For Loops</h3>
          <p className="text-xs text-slate-400">
            Iterate repeatedly over elements of an iterable (sequences, dictionaries, files).
          </p>
        </div>
        
        {/* Trigger del diálogo de Truth Values & Boolean Conditions */}
        <BooleanConditionsDialog />
      </div>

      {/* Anatomía del For Loop */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Repeat className="text-cyan-400" size={16} />
          <span>Loop Anatomy & Execution</span>
        </div>
        <p className="text-xs text-slate-400">
          An <span className="text-cyan-400 font-semibold">iterable</span> returns one element at a time (strings, lists, tuples, dictionaries). The loop assigns each element to the iteration variable sequentially.
        </p>

        <pre className="bg-[#121824] border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
{`cities = ['new york city', 'mountain view', 'chicago', 'los angeles']

for city in cities:
    print(city)

print("Done!")
# Output:
# new york city
# mountain view
# chicago
# los angeles
# Done!`}
        </pre>
      </div>

      {/* Función range() */}
      <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-purple-400 font-mono">
          Using range(start=0, stop, step=1)
        </h4>
        <p className="text-xs text-slate-400">
          <code className="text-cyan-300 font-mono">range()</code> creates an iterable sequence of numbers. By default, it begins at 0 and increments by 1 up to (exclusive of) stop.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">range(4)</span>
            <p className="text-slate-400">0, 1, 2, 3</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">range(2, 6)</span>
            <p className="text-slate-400">2, 3, 4, 5</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">range(1, 10, 2)</span>
            <p className="text-slate-400">1, 3, 5, 7, 9</p>
          </div>
        </div>
      </div>

      {/* Creación vs Modificación in-place */}
      <div className="space-y-3">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">
          Creating vs. Modifying Lists In-Place
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 block">Creating New List:</span>
            <pre className="font-mono text-xs text-slate-300 overflow-x-auto">
{`capitalized_cities = []
for city in cities:
    capitalized_cities.append(city.title())`}
            </pre>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 block">Modifying In-Place with range():</span>
            <pre className="font-mono text-xs text-slate-300 overflow-x-auto">
{`for index in range(len(cities)):
    cities[index] = cities[index].title()`}
            </pre>
          </div>
        </div>
      </div>

      {/* Quiz: Iteration Variable Trap */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
          <AlertTriangle size={14} />
          <span>Common Trap: Reassigning the Iteration Variable</span>
        </div>
        <p className="text-xs text-slate-400">
          What happens when running the code below?
        </p>

        <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`names = ["Joey Tribbiani", "Monica Geller", "Chandler Bing", "Phoebe Buffay"]

for name in names:
    name = name.lower().replace(" ", "_")

print(names)`}
        </pre>

        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/30 text-emerald-300 text-xs space-y-1">
          <div className="flex items-center gap-2 font-mono font-bold">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
            <span>Result: The list remains completely unchanged.</span>
          </div>
          <p className="text-slate-400 text-xs">
            Reassigning the local variable <code className="text-cyan-300 font-mono">name</code> only changes what that variable points to during that step of the loop; it does not write back to <code className="text-cyan-300 font-mono">names[index]</code>.
          </p>
        </div>
      </div>

    </div>
  );
}