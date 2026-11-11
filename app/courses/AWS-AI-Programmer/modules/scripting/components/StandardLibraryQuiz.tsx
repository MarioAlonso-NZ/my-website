'use client';

import React from 'react';
import { Terminal, KeyRound, Calculator, CheckCircle2, ShieldCheck } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function StandardLibraryQuiz() {

  // Salida calculada para el Ejercicio 1 (math.exp)
  const mathOutput = `Calculated e^3: 20.085536923188
Nice job!`;

  // Salida calculada para el Ejercicio 2 (random.sample password generator)
  const passwordOutput = `Filtered word count in dictionary: 10
Generated Password 1: datatrainneural
Generated Password 2: tensorforestlayer
Generated Password 3: learnweightnode

Validation check:
Your code passes all of our tests, nice work!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Quiz: AI and the Standard Library (math & random Modules)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Leverage Python's built-in standard library to compute mathematical exponents for AI projections and generate secure credentials using pseudo-random sampling.
        </p>
      </div>

      {/* 2. Ejercicio 1: Compute an Exponent with math.exp */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Calculator className="text-cyan-400" size={15} />
          <span>Exercise 1: Compute an Exponent (math.exp)</span>
        </div>
        <p className="text-xs text-slate-400">
          Model exponential growth by importing the standard library <code className="text-cyan-300 font-mono">math</code> module and evaluating $e^3$ via <code className="text-cyan-300 font-mono">math.exp(3)</code>.
        </p>

        <RunnablePythonCode
          code={`import math

# Calculate e to the power of 3 using the math module
result = math.exp(3)
print(f"Calculated e^3: {round(result, 12)}")

# Notebook grading check
correct = math.exp(3)
if round(result, 12) == round(correct, 12):
    print("Nice job!")
else:
    print("Your code produced the wrong result. Expected answer is \`20.085536923187668\`.")`}
          output={mathOutput}
        />
      </div>

      {/* 3. Ejercicio 2: Password Generator with random.sample */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <KeyRound className="text-purple-400" size={15} />
          <span>Exercise 2: Secure Password Generator (random.sample)</span>
        </div>
        <p className="text-xs text-slate-400">
          Read raw vocabulary from a word list file, filter tokens whose length satisfies <code className="text-cyan-300 font-mono">3 &lt; len(word) &lt; 8</code>, and sample 3 distinct words concatenated with <code className="text-cyan-300 font-mono">"".join(random.sample(word_list, 3))</code>.
        </p>

        <RunnablePythonCode
          code={`import io
import random as r

# In-memory words dataset simulation
raw_words = """ai
data
train
layer
model
tensor
neural
weight
forest
learn
node
classification"""

word_list = []

# Simulate: with open(word_file, 'r') as words:
stream = io.StringIO(raw_words)
with stream as words:
    for line in words:
        word = line.strip().lower()
        # Don't include words that are too short (<=3) or too long (>=8)
        if 3 < len(word) < 8:
            word_list.append(word)

def generate_password():
    # Return 3 random words concatenated together without spaces
    return "".join(r.sample(word_list, 3))

print(f"Filtered word count in dictionary: {len(word_list)}")
pswd1 = generate_password()
pswd2 = generate_password()
pswd3 = generate_password()

print(f"Generated Password 1: {pswd1}")
print(f"Generated Password 2: {pswd2}")
print(f"Generated Password 3: {pswd3}")

# Notebook grading feedback function
def feedback(p1, p2, p3):
    if not isinstance(p1, str) or not isinstance(p2, str) or not isinstance(p3, str):
        return "Try again. Your function does not return a string.", 0
    elif not 11 < len(p1) < 22 or not 11 < len(p2) < 22 or not 11 < len(p3) < 22:
        return "Try again. The password that your function returns is either too short or too long.", 0
    elif p1 == p2 or p2 == p3 or p1 == p3:
        return "Try again. Your function returns the same passwords when called multiple times.", 0
    else:
        return "Your code passes all of our tests, nice work!", 1

fb, correct = feedback(pswd1, pswd2, pswd3)
print(f"\\nValidation check:\\n{fb}")`}
          output={passwordOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Output Verified: Passwords generated pass all length constraints (12–21 chars), uniqueness checks, and string type assertions.</span>
        </div>
      </div>

    </div>
  );
}