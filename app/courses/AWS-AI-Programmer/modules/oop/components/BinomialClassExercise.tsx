'use client';

import React from 'react';
import { BarChart, Code2, ShieldAlert, Network, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function BinomialClassExercise() {

  // Salida calculada simulando la ejecución y pruebas de la clase Binomial
  const binomialOutput = `--- Binomial Instantiation ---
Binomial 1: mean 8.0, standard deviation 2.1908902300206643, p 0.4, n 20
Binomial 2: mean 12.0, standard deviation 2.6832815729997477, p 0.4, n 30

--- Magic Method: Addition (b1 + b2) ---
Summed Binomial: mean 20.0, standard deviation 3.4641016151377544, p 0.4, n 50

--- PDF Evaluation ---
Probability of exactly 20 successes in summed distribution (n=50, p=0.4): 0.1146

--- Exception Handling Test ---
Attempting to add Binomial(p=0.4) with Binomial(p=0.5)...
AssertionError caught successfully: p values are not equal`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <BarChart className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Exercise: AI and Binomial Classes
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Complete the package by implementing the discrete Binomial distribution class. Inherit from the generic Distribution module, implement specific probability logic, and protect magic methods with assertions.
        </p>
      </div>

      {/* 2. Conceptos Clave Implementados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. Constructor & Inheritance</span>
          <p className="text-slate-400 font-sans">
            Initializes <code className="text-slate-300 font-mono">p</code> and <code className="text-slate-300 font-mono">n</code>, calculates initial stats, and delegates to <code className="text-cyan-300 font-mono">super().__init__()</code>.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Statistical Overrides</span>
          <p className="text-slate-400 font-sans">
            Applies discrete formulas: Mean = {String.raw`$n \cdot p$`}, Stdev = {String.raw`$\sqrt{n \cdot p \cdot (1-p)}$`}.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-rose-400 font-bold block">3. Exception Handling</span>
          <p className="text-slate-400 font-sans">
            The <code className="text-slate-300 font-mono">__add__</code> method enforces statistical laws using an <code className="text-rose-300 font-mono">assert</code> block to block differing <code className="text-slate-300 font-mono">p</code> values.
          </p>
        </div>
      </div>

      {/* 3. Implementación Completa y Ejecución */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: Binomial Package Module</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Simulating the execution of the completed Binomial class within the package structure, testing instantiation, addition, and PDF rendering limits.
        </p>

        <RunnablePythonCode
          code={`import math

# Simulating the parent class import:
# from distributions.Generaldistribution import Distribution
class Distribution:
    def __init__(self, mu=0, sigma=1):
        self.mean = mu
        self.stdev = sigma
        self.data = []

class Binomial(Distribution):
    def __init__(self, positive_probability, trials):
        self.p = positive_probability
        self.n = trials
        self.data = []

        self.mean = self.calculate_mean()
        self.stdev = self.calculate_stdev()
        super().__init__(self.mean, self.stdev)

    def calculate_mean(self):
        return self.n * self.p
    
    def calculate_stdev(self):
        return math.sqrt(self.n * self.p * (1 - self.p))

    def pdf(self, k):
        return (math.comb(self.n, k) * (self.p ** k) * ((1 - self.p) ** (self.n - k)))

    def __add__(self, other):
        try:
            assert self.p == other.p, 'p values are not equal'
        except AssertionError as error:
            raise
        return Binomial(self.p, self.n + other.n)

    def __repr__(self):
        return f"mean {self.mean}, standard deviation {self.stdev}, p {self.p}, n {self.n}"

# --- Execution Simulation ---
b1 = Binomial(0.4, 20)
b2 = Binomial(0.4, 30)

print("--- Binomial Instantiation ---")
print(f"Binomial 1: {b1}")
print(f"Binomial 2: {b2}\\n")

print("--- Magic Method: Addition (b1 + b2) ---")
b_sum = b1 + b2
print(f"Summed Binomial: {b_sum}\\n")

print("--- PDF Evaluation ---")
prob_20 = b_sum.pdf(20)
print(f"Probability of exactly 20 successes in summed distribution (n=50, p=0.4): {prob_20:.4f}\\n")

print("--- Exception Handling Test ---")
print("Attempting to add Binomial(p=0.4) with Binomial(p=0.5)...")
b_invalid = Binomial(0.5, 10)
try:
    b1 + b_invalid
except AssertionError as e:
    print(f"AssertionError caught successfully: {e}")`}
          output={binomialOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-emerald-300 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Implementation Validated: The class successfully inherits generic traits, overrides mathematical properties specific to discrete events, and properly protects state during magic method arithmetic.</span>
        </div>
      </div>

    </div>
  );
}