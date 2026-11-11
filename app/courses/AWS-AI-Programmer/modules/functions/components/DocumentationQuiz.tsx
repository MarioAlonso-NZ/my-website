'use client';

import React from 'react';
import { BookOpen, FileCode, CheckCircle2, Terminal, Info } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function DocumentationQuiz() {

  // Salida calculada para el ejercicio y verificación de docstring con inspect
  const docOutput = `Test Call 1 (10 days): 1 week(s) and 3 day(s)
Test Call 2 (14 days): 2 week(s) and 0 day(s)
Test Call 3 (5 days):  0 week(s) and 5 day(s)

Inspected Docstring:
Convert a number of days into a readable string format of weeks and days.
...
Nicely done! You can view my solution on the next page.`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <BookOpen className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Exercise: Readable Time for Data Processing (Documentation & Docstrings)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Document production AI functions with docstrings explaining parameters, returns, and doctest examples, while converting raw pipeline durations into readable schedules.
        </p>
      </div>

      {/* 2. Anatomía de un Docstring Profesional */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. Summary & Purpose</span>
          <p className="text-slate-400">A clear explanation of what the function computes in human-readable terms for pipeline stakeholders.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Parameters & Types</span>
          <p className="text-slate-400">Explicit types and descriptions for arguments (<code className="text-slate-300 font-mono">days (int)</code>).</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. Returns & Examples</span>
          <p className="text-slate-400">Expected return type (<code className="text-slate-300 font-mono">str</code>) and doctest examples with sample calls and outputs.</p>
        </div>
      </div>

      {/* 3. Ejercicio Ejecutable con RunnablePythonCode */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <FileCode className="text-emerald-400" size={15} />
          <span>Python Implementation & inspect Validation</span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          Implement <code className="text-cyan-300 font-mono">readable_processing_time</code> with full documentation and grading validation via <code className="text-cyan-300 font-mono">inspect.getdoc()</code>.
        </p>

        <RunnablePythonCode
          code={`import inspect

def readable_processing_time(days):
    """
    Convert a number of days into a readable string format of weeks and days.

    This function takes an integer number of days and converts it into a human-readable 
    string format that shows how many full weeks and remaining days are contained within 
    that number of days. This is particularly useful for reporting processing times in 
    machine learning projects, making the duration easier to understand for stakeholders.

    Parameters:
    days (int): The total number of days to be converted.

    Returns:
    str: A string representing the number of weeks and days.

    Example:
    >>> readable_processing_time(10)
    '1 week(s) and 3 day(s)'
    """
    weeks = days // 7
    remainder = days % 7
    return "{} week(s) and {} day(s)".format(weeks, remainder)

# Test cases
print(f"Test Call 1 (10 days): {readable_processing_time(10)}")
print(f"Test Call 2 (14 days): {readable_processing_time(14)}")
print(f"Test Call 3 (5 days):  {readable_processing_time(5)}")

# Notebook grading check
print("\\nInspected Docstring:")
doc = inspect.getdoc(readable_processing_time)
first_line = doc.split('\\n')[0] if doc else ""
print(first_line + "\\n...")

if 'readable_processing_time' not in locals():
    print("Your code doesn't define the \`readable_processing_time\` function.")
elif inspect.getdoc(readable_processing_time) is None:
    print("Your function doesn't have a docstring! Add one that explains the function's purpose.")
else:
    print("Nicely done! You can view my solution on the next page.")`}
          output={docOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Docstring Verified: Validated via inspect.getdoc() conforming to PEP 257 standards.</span>
        </div>
      </div>

    </div>
  );
}