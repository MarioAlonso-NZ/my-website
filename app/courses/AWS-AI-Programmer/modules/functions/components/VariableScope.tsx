'use client';

import React from 'react';
import { Box, Globe, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function VariableScope() {

  // Salida calculada para el Scope Local
  const localOutput = `Inside function: hello
Outside call: NameError: name 'word' is not defined`;

  // Salida calculada para Nombres Reutilizados en Scopes Aislados
  const reuseOutput = `some_function: hello
another_function: goodbye`;

  // Salida calculada para Lectura de Global Scope vs Modificación
  const globalOutput = `Global read inside function: hello
Modified locally through argument: hello world
Original global variable remains: hello`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Box className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Variable Scope in Functions
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Variable scope defines which parts of a program a variable can be referenced or accessed from.
        </p>
      </div>

      {/* 2. Definición y Regla de Scope Local */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Box className="text-purple-400" size={15} />
          <span>1. Local Scope & Isolation</span>
        </div>
        <p className="text-xs text-slate-400">
          If a variable is created inside a function, it can only be used within that function. Attempting to reference it from outer scopes raises a <code className="text-rose-400 font-mono">NameError</code>.
        </p>

        <RunnablePythonCode
          code={`def some_function():
    word = "hello"
    print(f"Inside function: {word}")

some_function()

try:
    print(word)
except NameError as e:
    print(f"Outside call: NameError: {e}")`}
          output={localOutput}
        />
      </div>

      {/* 3. Reutilización Segura de Identificadores */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ShieldCheck className="text-emerald-400" size={15} />
          <span>2. Reusing Variable Names Across Separate Functions</span>
        </div>
        <p className="text-xs text-slate-400">
          Because each function creates its own isolated local scope, you can reuse the same identifier names without collision or variable corruption.
        </p>

        <RunnablePythonCode
          code={`def some_function():
    word = "hello"
    print(f"some_function: {word}")

def another_function():
    word = "goodbye"
    print(f"another_function: {word}")

some_function()
another_function()`}
          output={reuseOutput}
        />
      </div>

      {/* 4. Global Scope: Lectura vs Inmutabilidad */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Globe className="text-cyan-400" size={15} />
          <span>3. Global Scope Access & Parameter Passing</span>
        </div>
        <p className="text-xs text-slate-400">
          Variables defined outside functions have global scope and can be read from inside functions. However, the value of a global variable cannot be modified directly inside the function without side effects; pass it in as an argument instead.
        </p>

        <RunnablePythonCode
          code={`word = "hello"

def read_global():
    # Reading global scope is permitted
    print(f"Global read inside function: {word}")

def modify_via_argument(current_text):
    # Modifying the value safely through a parameter
    current_text += " world"
    print(f"Modified locally through argument: {current_text}")
    return current_text

read_global()
modified_text = modify_via_argument(word)
print(f"Original global variable remains: {word}")`}
          output={globalOutput}
        />
      </div>

      {/* 5. Buenas Prácticas */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
        <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
          <AlertTriangle size={14} />
          <span>Best Practice: Smallest Scope Rule</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          It is best practice to define variables in the smallest scope they will be needed in. While functions can refer to variables defined in an enclosing scope, relying on outer state produces brittle code that is difficult to debug in larger AI pipelines.
        </p>
      </div>

    </div>
  );
}