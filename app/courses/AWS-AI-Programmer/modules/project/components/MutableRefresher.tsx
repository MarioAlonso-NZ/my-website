'use client';

import React from 'react';
import { RefreshCcw, Database, FileText, Code2, AlertTriangle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function MutableRefresher() {

  // Salida calculada simulando la ejecución del bloque de mutabilidad
  const mutableOutput = `--- 1. Immutable Example (Strings/Integers) ---
Before function: 10
Inside function (changed): 50
After function (global state): 10  <-- Original is UNCHANGED

--- 2. Mutable Example (Lists/Dictionaries) ---
Before function: ['Luna', 'Cody', 'Ally', 'Lincoln']
Inside function (modifying pets...):
  Popped index 1
  Appended 'Bella'
  Added ['Buddy']
After function (global state): ['Luna', 'Ally', 'Lincoln', 'Bella', 'Buddy']  <-- Original is CHANGED!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <RefreshCcw className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            Refresher: Mutable Data Types & Functions
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Before building the image label dictionary, it is crucial to understand variable scope. Modifying a mutable data structure (like a list or dictionary) inside a function changes the original object in memory globally.
        </p>
      </div>

      {/* 2. Immutable vs Mutable */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Immutable */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <FileText size={16} />
            <span>Immutable (Strings, Ints, Tuples)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            When you pass an integer or string into a function and reassign it, Python creates a <strong>local copy</strong>. The global variable outside the function remains untouched.
          </p>
        </div>

        {/* Mutable */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <Database size={16} />
            <span>Mutable (Lists, Dictionaries)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            When you pass a list or dictionary into a function and modify its contents (e.g., using <code className="text-slate-300 font-mono">.append()</code> or <code className="text-slate-300 font-mono">.pop()</code>), Python alters the <strong>original object in memory</strong>.
          </p>
        </div>

      </div>

      {/* 3. Demostración de Código */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: Memory State Changes</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This replicates the Udacity video example to demonstrate how list elements shift in memory when modified inside a helper function.
        </p>

        <RunnablePythonCode
          code={`# --- 1. Immutable Example ---
def change_number(num):
    num = 50
    print("Inside function (changed):", num)

my_number = 10
print("--- 1. Immutable Example (Strings/Integers) ---")
print("Before function:", my_number)
change_number(my_number)
print("After function (global state):", my_number, " <-- Original is UNCHANGED\\n")

# --- 2. Mutable Example ---
def edit_pets(pets):
    # These operations alter the original list in memory
    print("Inside function (modifying pets...):")
    pets.pop(1)
    print("  Popped index 1")
    pets.append("Bella")
    print("  Appended 'Bella'")
    pets += ["Buddy"]
    print("  Added ['Buddy']")

dogs = ["Luna", "Cody", "Ally", "Lincoln"]
print("--- 2. Mutable Example (Lists/Dictionaries) ---")
print("Before function:", dogs)
edit_pets(dogs)
print("After function (global state):", dogs, " <-- Original is CHANGED!")`}
          output={mutableOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <AlertTriangle size={16} className="shrink-0 text-amber-400" />
          <span>Project Tip: In the next step, you will create a dictionary and pass it into a function to populate it with image labels. Because dictionaries are mutable, you won't necessarily need to return the dictionary; appending keys to it inside the function updates it everywhere.</span>
        </div>
      </div>

    </div>
  );
}