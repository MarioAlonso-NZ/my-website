'use client';

import React from 'react';
import { Binary, ListOrdered, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ZipAndEnumerate() {

  // Salida calculada para Zip & Desempaquetado
  const zipOutput = `a: 1
b: 2
c: 3

Unzipped letters: ('a', 'b', 'c')
Unzipped numbers: (1, 2, 3)`;

  // Salida calculada para Enumerate
  const enumOutput = `0 a
1 b
2 c
3 d
4 e`;

  // Salida calculada para el Playground de Números Primos
  const primesOutput = `26 is NOT a prime number, because 2 is a factor
39 is NOT a prime number, because 3 is a factor
51 is NOT a prime number, because 3 is a factor
53 IS a prime number
57 is NOT a prime number, because 3 is a factor
79 IS a prime number
85 is NOT a prime number, because 5 is a factor`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Binary className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Built-in Iterators: Zip and Enumerate
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Pair multiple sequences into tuples or track iteration indices without manual counters.
        </p>
      </div>

      {/* 2. Sección Teórica: Zip & Unzip */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Sparkles className="text-cyan-400" size={15} />
          <span>1. The zip() Function & Unzipping with Asterisk (*)</span>
        </div>
        <p className="text-xs text-slate-400">
          <code className="text-cyan-300 font-mono">zip()</code> pairs elements at matching indices across iterables into an iterator of tuples. Use the <code className="text-cyan-300 font-mono">*</code> unpacking operator to transpose a list of tuples back into separate component tuples.
        </p>

        <RunnablePythonCode
          code={`letters = ['a', 'b', 'c']
nums = [1, 2, 3]

# Pairing elements into tuples:
for letter, num in zip(letters, nums):
    print("{}: {}".format(letter, num))

# Unzipping tuples using the asterisk (*) operator:
some_list = [('a', 1), ('b', 2), ('c', 3)]
unzipped_letters, unzipped_nums = zip(*some_list)

print(f"\\nUnzipped letters: {unzipped_letters}")
print(f"Unzipped numbers: {unzipped_nums}")`}
          output={zipOutput}
        />
      </div>

      {/* 3. Sección Teórica: Enumerate */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ListOrdered className="text-purple-400" size={15} />
          <span>2. The enumerate() Function</span>
        </div>
        <p className="text-xs text-slate-400">
          <code className="text-cyan-300 font-mono">enumerate()</code> yields <code className="text-cyan-300 font-mono">(index, item)</code> pairs, eliminating the need for manual counter variables or <code className="text-cyan-300 font-mono">range(len(...))</code> index indexing.
        </p>

        <RunnablePythonCode
          code={`letters = ['a', 'b', 'c', 'd', 'e']

for i, letter in enumerate(letters):
    print(i, letter)`}
          output={enumOutput}
        />
      </div>

      {/* 4. Ejercicio Playground: Prime Factorization con Break & Else */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <CheckCircle2 className="text-emerald-400" size={15} />
          <span>3. Playground: Prime Factorization Check (Break Control)</span>
        </div>
        <p className="text-xs text-slate-400">
          Determine whether each number in the list is prime by checking divisibility up to <code className="text-cyan-300 font-mono">num - 1</code>. When a factor is detected, stop checking immediately with <code className="text-cyan-300 font-mono">break</code>; otherwise, confirm the number is prime using Python's <code className="text-emerald-400 font-mono">for...else</code> construct.
        </p>

        <RunnablePythonCode
          code={`prime_numbers = [26, 39, 51, 53, 57, 79, 85]

for num in prime_numbers:
    for factor in range(2, num):
        if num % factor == 0:
            print(f"{num} is NOT a prime number, because {factor} is a factor")
            break
    else:
        # Executes only if the inner loop finishes without hitting a break
        print(f"{num} IS a prime number")`}
          output={primesOutput}
        />

        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1 mt-2">
          <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold">
            <AlertCircle size={14} />
            <span>Python Idiom Note (for...else):</span>
          </div>
          <p className="text-slate-400">
            In Python, attaching an <code className="text-cyan-300 font-mono">else:</code> block to a <code className="text-cyan-300 font-mono">for</code> loop runs only if the loop runs to completion without encountering a <code className="text-rose-400 font-mono">break</code>. This eliminates the need for flag variables when testing prime numbers.
          </p>
        </div>
      </div>

    </div>
  );
}