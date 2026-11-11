'use client';

import React from 'react';
import { Wand2, Code2, PlusSquare, Type, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function MagicMethodsExercise() {

  // Salida calculada simulando la ejecución del bloque del Jupyter Notebook
  const magicMethodsOutput = `Gaussian 1: mean 25, standard deviation 3
Gaussian 2: mean 30, standard deviation 4
Sum (G1 + G2): mean 55, standard deviation 5.0

Running unit tests...
..
----------------------------------------------------------------------
Ran 2 tests in 0.002s

OK
<unittest.runner.TextTestResult run=2 errors=0 failures=0>`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Wand2 className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Exercise: AI and Magic Methods (Dunder Methods)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Extend the Gaussian class by overriding Python's default behavior for mathematical addition and string representation using double-underscore (dunder) methods.
        </p>
      </div>

      {/* 2. Conceptos de Magic Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* __add__ */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <PlusSquare size={16} />
            <span>__add__(self, other)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Overloads the <code className="text-cyan-300 font-mono">+</code> operator. For Gaussian distributions, adding two continuous variables results in a new Gaussian where the means are summed and the new standard deviation is the square root of the sum of their variances: {String.raw`$\sigma_{new} = \sqrt{\sigma_1^2 + \sigma_2^2}$`}.
          </p>
        </div>

        {/* __repr__ */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Type size={16} />
            <span>__repr__(self)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Controls how the object represents itself as a string when printed or evaluated. Without this, printing an object returns an obscure memory address (e.g., <code className="text-slate-300 font-mono">&lt;__main__.Gaussian object at 0x...&gt;</code>).
          </p>
        </div>

      </div>

      {/* 3. Implementación de Código y Pruebas Unitarias */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: Operator Overloading & unittests</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Notice how <code className="text-cyan-300 font-mono">gaussian_one + gaussian_two</code> implicitly calls the <code className="text-cyan-300 font-mono">__add__</code> method behind the scenes.
        </p>

        <RunnablePythonCode
          code={`import math
import unittest

class Gaussian():
    def __init__(self, mu=0, sigma=1):
        self.mean = mu
        self.stdev = sigma

    def __add__(self, other):
        # Creates a new instance to hold the summed properties
        result = Gaussian()
        result.mean = self.mean + other.mean
        result.stdev = math.sqrt(self.stdev ** 2 + other.stdev ** 2)
        return result

    def __repr__(self):
        return "mean {}, standard deviation {}".format(self.mean, self.stdev)

# --- Demonstration ---
gaussian_one = Gaussian(25, 3)
gaussian_two = Gaussian(30, 4)
gaussian_sum = gaussian_one + gaussian_two

print(f"Gaussian 1: {gaussian_one}")
print(f"Gaussian 2: {gaussian_two}")
print(f"Sum (G1 + G2): {gaussian_sum}\\n")
print("Running unit tests...")

# --- Unit Tests ---
class TestMagicMethods(unittest.TestCase):
    def test_add(self):
        g1 = Gaussian(25, 3)
        g2 = Gaussian(30, 4)
        g_sum = g1 + g2
        self.assertEqual(g_sum.mean, 55)
        self.assertEqual(g_sum.stdev, 5)

    def test_repr(self):
        g1 = Gaussian(25, 3)
        self.assertEqual(str(g1), "mean 25, standard deviation 3")

# Execute the tests
tests = TestMagicMethods()
tests_loaded = unittest.TestLoader().loadTestsFromModule(tests)
unittest.TextTestRunner(verbosity=2).run(tests_loaded)`}
          output={magicMethodsOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Verification Passed: The magic methods allow for highly readable code (e.g., G1 + G2) while correctly applying Gaussian mathematical rules.</span>
        </div>
      </div>

    </div>
  );
}