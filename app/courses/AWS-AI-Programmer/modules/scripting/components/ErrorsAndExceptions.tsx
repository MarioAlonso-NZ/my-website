'use client';

import React from 'react';
import { AlertOctagon, Bug, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ErrorsAndExceptions() {

  // Salida calculada para Syntax Errors
  const syntaxOutput = `SyntaxError detected:
SyntaxError: EOL while scanning string literal (<string>, line 2)`;

  // Salida calculada para Built-in Exceptions en tiempo de ejecución
  const exceptionsOutput = `1. ValueError Handled:
   ValueError: invalid literal for int() with base 10: 'ten'

2. TypeError Handled:
   TypeError: can only concatenate str (not "int") to str

3. ZeroDivisionError Handled:
   ZeroDivisionError: division by zero

4. IndexError Handled:
   IndexError: list index out of range

5. KeyError Handled:
   KeyError: 'loss'`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <AlertOctagon className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Errors and Exceptions in Python Scripting
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Understand the fundamental difference between parsing syntax failures and runtime exceptions when executing standalone scripts and pipelines.
        </p>
      </div>

      {/* 2. Conceptos Fundamentales: Syntax Errors vs Exceptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Syntax Errors */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
            <Bug size={16} />
            <span>Syntax Errors (Parsing Stage)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Occur before execution begins because Python’s parser cannot tokenize or interpret the code structure (e.g., missing quotes, mismatched parentheses, unindented blocks).
          </p>
        </div>

        {/* Exceptions */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
            <ShieldAlert size={16} />
            <span>Exceptions (Runtime Execution Stage)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Occur when unexpected events interrupt an otherwise syntactically valid program during execution. Different built-in exception types inform what went wrong.
          </p>
        </div>

      </div>

      {/* 3. Demostración de Syntax Error */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Bug className="text-rose-400" size={15} />
          <span>1. SyntaxError: EOL (End of Line) Literal Example</span>
        </div>
        <p className="text-xs text-slate-400">
          Unterminated string literals cause the Python interpreter to halt before executing any subsequent instructions.
        </p>

        <RunnablePythonCode
          code={`# Simulating Python parsing an unclosed string literal:
# msg = 'Welcome to this program! (missing trailing quote)

try:
    compile("msg = 'Welcome to this program!", "<string>", "exec")
except SyntaxError as e:
    print("SyntaxError detected:")
    print(f"{type(e).__name__}: {e}")`}
          output={syntaxOutput}
        />
      </div>

      {/* 4. Demostración de Built-in Exceptions Comunes en AI */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Cpu className="text-cyan-400" size={15} />
          <span>2. Common Built-in Runtime Exceptions in AI Pipelines</span>
        </div>
        <p className="text-xs text-slate-400">
          Typical exceptions encountered when parsing raw inputs, passing batch dimensions, or accessing metrics dictionaries.
        </p>

        <RunnablePythonCode
          code={`# 1. ValueError: Conversion failure from raw string
try:
    batch_size = int("ten")
except ValueError as e:
    print(f"1. ValueError Handled:\\n   {type(e).__name__}: {e}\\n")

# 2. TypeError: Incompatible types in operations
try:
    message = "Batch count: " + 32
except TypeError as e:
    print(f"2. TypeError Handled:\\n   {type(e).__name__}: {e}\\n")

# 3. ZeroDivisionError: Zero denominator in loss normalization
try:
    avg_loss = 0.45 / 0
except ZeroDivisionError as e:
    print(f"3. ZeroDivisionError Handled:\\n   {type(e).__name__}: {e}\\n")

# 4. IndexError: Accessing an out-of-range batch index
try:
    sample_layers = ["Conv2D", "BatchNorm", "ReLU"]
    last_layer = sample_layers[5]
except IndexError as e:
    print(f"4. IndexError Handled:\\n   {type(e).__name__}: {e}\\n")

# 5. KeyError: Accessing a non-existent metric key
try:
    metrics = {"accuracy": 0.95, "precision": 0.91}
    eval_loss = metrics["loss"]
except KeyError as e:
    print(f"5. KeyError Handled:\\n   {type(e).__name__}: {e}")`}
          output={exceptionsOutput}
        />
      </div>

      {/* 5. Tabla de Resumen */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
          Key Built-in Exceptions Reference
        </span>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <th className="py-2.5 px-3">Exception</th>
                <th className="py-2.5 px-3">Description</th>
                <th className="py-2.5 px-3">Common Trigger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="py-2 px-3 text-rose-400 font-bold">ValueError</td>
                <td className="py-2 px-3 text-slate-300">Argument has right type but inappropriate value</td>
                <td className="py-2 px-3 text-slate-400"><code>int("abc")</code> on user input</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-purple-400 font-bold">TypeError</td>
                <td className="py-2 px-3 text-slate-300">Operation applied to an inappropriate type</td>
                <td className="py-2 px-3 text-slate-400">Concatenating <code>str + int</code></td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-cyan-400 font-bold">IndexError</td>
                <td className="py-2 px-3 text-slate-300">Sequence subscript is out of range</td>
                <td className="py-2 px-3 text-slate-400">Accessing index beyond <code>len(list) - 1</code></td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-amber-400 font-bold">KeyError</td>
                <td className="py-2 px-3 text-slate-300">Mapping key is not found in dictionary</td>
                <td className="py-2 px-3 text-slate-400">Accessing missing key without <code>.get()</code></td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-emerald-400 font-bold">ZeroDivisionError</td>
                <td className="py-2 px-3 text-slate-300">Second argument of a division is zero</td>
                <td className="py-2 px-3 text-slate-400">Dividing by <code>len(dataset)</code> when empty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}