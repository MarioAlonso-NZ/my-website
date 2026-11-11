'use client';

import React from 'react';
import { Sparkles, Filter, ToggleLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ListComprehensions() {
  
  // Salida calculada para Introducción y Reducción
  const introOutput = `Standard Loop Output: ['New York City', 'Mountain View', 'Chicago', 'Los Angeles']
Listcomp Output:      ['New York City', 'Mountain View', 'Chicago', 'Los Angeles']`;

  // Salida calculada para Filter (if al final)
  const filterOutput = `Even Squares Filtered: [0, 4, 16, 36, 64]`;

  // Salida calculada para Ternary (if-else al inicio)
  const ternaryOutput = `Transformed List: [0, 4, 4, 6, 16, 8, 36, 10, 64]`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # List Comprehensions
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Create and transform lists concisely in a single step using concise inline for-loop syntax.
        </p>
      </div>

      {/* 2. Reducción de For Loop a List Comprehension */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Sparkles className="text-purple-400" size={15} />
          <span>Basic Syntax: From Loop to Comprehension</span>
        </div>
        <p className="text-xs text-slate-400">
          A list comprehension wraps an expression inside brackets <code className="text-cyan-300 font-mono">[expression for item in iterable]</code>, eliminating the need to initialize an empty list and call <code className="text-cyan-300 font-mono">.append()</code> repeatedly.
        </p>

        <RunnablePythonCode
          code={`cities = ['new york city', 'mountain view', 'chicago', 'los angeles']

# Multi-line approach
capitalized_cities_loop = []
for city in cities:
    capitalized_cities_loop.append(city.title())

# Single-step list comprehension
capitalized_cities_comp = [city.title() for city in cities]

print("Standard Loop Output:", capitalized_cities_loop)
print("Listcomp Output:     ", capitalized_cities_comp)`}
          output={introOutput}
        />
      </div>

      {/* 3. Condicionales como Filtro (if al final) */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Filter className="text-cyan-400" size={15} />
          <span>Conditionals as Filters (if at the End)</span>
        </div>
        <p className="text-xs text-slate-400">
          Placing an <code className="text-cyan-300 font-mono">if</code> clause after the iterable evaluates every element and only retains items satisfying the boolean condition.
        </p>

        <RunnablePythonCode
          code={`# Only evaluate and append x**2 if x is an even number
squares = [x ** 2 for x in range(9) if x % 2 == 0]

print("Even Squares Filtered:", squares)
# Output: [0, 4, 16, 36, 64]`}
          output={filterOutput}
        />
      </div>

      {/* 4. Transformaciones con if-else (al principio) */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ToggleLeft className="text-emerald-400" size={15} />
          <span>Conditional Expressions (if-else at the Beginning)</span>
        </div>
        <p className="text-xs text-slate-400">
          When transforming every single element differently based on a condition (using <code className="text-cyan-300 font-mono">else</code>), the entire ternary expression must precede the <code className="text-cyan-300 font-mono">for</code> keyword.
        </p>

        <RunnablePythonCode
          code={`# If x is even compute x**2; otherwise compute x + 3
squares = [x ** 2 if x % 2 == 0 else x + 3 for x in range(9)]

print("Transformed List:", squares)
# Output: [0, 4, 4, 6, 16, 8, 36, 10, 64]`}
          output={ternaryOutput}
        />
      </div>

      {/* 5. Regla de Oro / Gotcha de Sintaxis */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
          <AlertTriangle size={15} />
          <span>Syntax Placement Rules</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-1">
            <span className="text-cyan-400 font-bold block">1. Filter (if only):</span>
            <code className="text-slate-300 block">[expr for x in seq if cond]</code>
            <p className="text-slate-400 text-[11px] font-sans">Omits elements that fail the condition.</p>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-1">
            <span className="text-emerald-400 font-bold block">2. Branching (if-else):</span>
            <code className="text-slate-300 block">[expr1 if cond else expr2 for x in seq]</code>
            <p className="text-slate-400 text-[11px] font-sans">Every element is processed; requires both branches.</p>
          </div>
        </div>

        <div className="p-2.5 bg-rose-950/20 border border-rose-800/30 rounded-lg text-rose-300 text-xs">
          <strong>Syntax Error Warning:</strong> <code className="font-mono">[x**2 for x in range(9) if x % 2 == 0 else x + 3]</code> causes an invalid syntax error because <code className="font-mono">else</code> cannot be placed after the iterable.
        </div>
      </div>

    </div>
  );
}