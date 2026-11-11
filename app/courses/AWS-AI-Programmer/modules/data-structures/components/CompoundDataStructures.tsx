'use client';

import React from 'react';
import DataStructuresComparisonDialog from './DataStructuresComparisonDialog';
import RunnablePythonCode from '@/app/components/RunnablePythonCode'; // <-- Import Runnable

export default function CompoundDataStructures() {
  
  // Exact output for Example 1
  const example1Output = `Helium data: {'number': 2, 'weight': 4.002602, 'symbol': 'He'}
Hydrogen weight: 1.00794
Updated elements dict: {'hydrogen': {'number': 1, 'weight': 1.00794, 'symbol': 'H'}, 'helium': {'number': 2, 'weight': 4.002602, 'symbol': 'He'}, 'oxygen': {'number': 8, 'weight': 15.999, 'symbol': 'O'}}`;

  // Exact output for Example 2
  const example2Output = `John's updated grades: [85, 90, 92, 88]
Total students: 3
Alex's major: Physics`;

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Header con disparador del Modal */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <h3 className="font-bold text-white text-base"># Compound Data Structures</h3>
          <p className="text-xs text-slate-400">
            Nesting containers within containers (e.g. dictionaries mapping to dictionaries or lists).
          </p>
        </div>
        <DataStructuresComparisonDialog />
      </div>

      {/* Ejemplo 1: Nested Dictionaries (Elements) */}
      <div className="space-y-3">
        <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-cyan-400">
          Example 1: Nested Dictionaries & Key Access
        </h4>
        
        <RunnablePythonCode 
          code={`elements = {
    "hydrogen": {"number": 1, "weight": 1.00794, "symbol": "H"},
    "helium": {"number": 2, "weight": 4.002602, "symbol": "He"}
}

# Accessing elements in nested structures:
helium = elements["helium"]
hydrogen_weight = elements["hydrogen"]["weight"]

# Adding a new dictionary entry:
elements["oxygen"] = {"number": 8, "weight": 15.999, "symbol": "O"}

# Output to verify
print("Helium data:", helium)
print("Hydrogen weight:", hydrogen_weight)
print("Updated elements dict:", elements)`}
          output={example1Output}
        />
      </div>

      {/* Ejemplo 2: Nested Lists inside Dictionaries */}
      <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-purple-400">
          Example 2: Combining Dictionaries and Lists
        </h4>
        <p className="text-xs text-slate-400 mb-2">
          Values inside a nested dictionary can themselves be lists, allowing list operations like <code className="text-cyan-400 font-mono">.append()</code> directly on nested references:
        </p>
        
        <RunnablePythonCode 
          code={`student_records = {
    'John': {'age': 20, 'major': 'Computer Science', 'grades': [85, 90, 92]},
    'Emma': {'age': 19, 'major': 'Mathematics', 'grades': [95, 88, 91]}
}

# Adding a new student:
student_records['Alex'] = {'age': 21, 'major': 'Physics', 'grades': [80, 85, 88]}

# Modifying a nested list (John's grades):
student_records['John']['grades'].append(88)

# Output to verify
print("John's updated grades:", student_records['John']['grades'])
print("Total students:", len(student_records))
print("Alex's major:", student_records['Alex']['major'])`}
          output={example2Output}
        />
      </div>

    </div>
  );
}