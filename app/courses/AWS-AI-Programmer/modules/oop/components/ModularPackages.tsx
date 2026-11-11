'use client';

import React from 'react';
import { Package, FolderOpen, FileCode, TerminalSquare, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ModularPackages() {

  // Salida calculada simulando la instalación y uso en el REPL
  const packageUsageOutput = `Processing /home/workspace/python_package_example
Building wheels for collected packages: distributions
  Building wheel for distributions (setup.py) ... done
Successfully built distributions
Installing collected packages: distributions
Successfully installed distributions-0.1

--- Testing the Installed Package in Python REPL ---
Importing Gaussian from distributions package...
Gaussian Instance Created: mean 10, stdev 5
Mean accessed successfully: 10`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Package className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Organizing Modules & Making a Package
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Transition from monolithic scripts to modular directories, utilizing <code className="text-cyan-300 font-mono">__init__.py</code> and <code className="text-cyan-300 font-mono">setup.py</code> to create globally importable Python packages via pip.
        </p>
      </div>

      {/* 2. Conceptos: Módulos vs Paquetes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <FileCode size={16} />
            <span>Python Module</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            A standard Python file containing variables, functions, or classes (e.g., <code className="text-slate-300 font-mono">Gaussiandistribution.py</code>). Used to separate logic into distinct files.
          </p>
        </div>

        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <FolderOpen size={16} />
            <span>Python Package</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            A directory containing multiple modules <strong>and</strong> an <code className="text-slate-300 font-mono">__init__.py</code> file, signaling to Python that the folder should be treated as an importable library.
          </p>
        </div>
      </div>

      {/* 3. Estructura del Proyecto y Archivos Clave */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          Package Directory Architecture
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          
          {/* Estructura de Carpetas */}
          <div className="p-3 bg-[#121824] border border-slate-800 rounded-xl space-y-2">
            <span className="text-slate-500 mb-1 block">File Structure:</span>
            <div className="text-slate-300 space-y-1">
              <div>📁 python_package_example/</div>
              <div className="pl-4">📁 distributions/</div>
              <div className="pl-8 text-purple-300">📄 __init__.py</div>
              <div className="pl-8">📄 Generaldistribution.py</div>
              <div className="pl-8">📄 Gaussiandistribution.py</div>
              <div className="pl-4 text-emerald-300">📄 setup.py</div>
            </div>
          </div>

          {/* setup.py */}
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span className="text-emerald-400 block font-bold">setup.py</span>
            <p className="text-slate-400 font-sans leading-relaxed mb-2">
              The configuration file pip reads to install the package into your Python environment.
            </p>
            <pre className="text-emerald-300 bg-slate-900 p-2 rounded-lg border border-slate-800 overflow-x-auto">
{`from setuptools import setup

setup(
    name="distributions",
    version="0.1",
    description="Gaussian distributions",
    packages=['distributions'],
    zip_safe=False
)`}
            </pre>
          </div>

          {/* __init__.py */}
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span className="text-purple-400 block font-bold">__init__.py</span>
            <p className="text-slate-400 font-sans leading-relaxed mb-2">
              Exposes specific classes so users can import them directly from the package root.
            </p>
            <pre className="text-purple-300 bg-slate-900 p-2 rounded-lg border border-slate-800 overflow-x-auto">
{`# Imports Gaussian class to 
# package namespace
from .Gaussiandistribution \\
     import Gaussian`}
            </pre>
          </div>
        </div>
      </div>

      {/* 4. Simulación de Instalación y Uso */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <TerminalSquare className="text-cyan-400" size={15} />
          <span>Terminal Execution: pip install & Python REPL</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Navigate to the directory containing <code className="text-cyan-300 font-mono">setup.py</code> and execute <code className="text-cyan-300 font-mono">pip install .</code> to install the package globally on your local machine.
        </p>

        <RunnablePythonCode
          code={`import os

# --- Simulating Terminal: pip install . ---
print("Processing /home/workspace/python_package_example")
print("Building wheels for collected packages: distributions")
print("  Building wheel for distributions (setup.py) ... done")
print("Successfully built distributions")
print("Installing collected packages: distributions")
print("Successfully installed distributions-0.1\\n")

# --- Simulating Python Interactive REPL ---
print("--- Testing the Installed Package in Python REPL ---")
print("Importing Gaussian from distributions package...")

# Simulating the behavior of: from distributions import Gaussian
class MockGaussian:
    def __init__(self, mu, sigma):
        self.mean = mu
        self.stdev = sigma
    def __repr__(self):
        return f"mean {self.mean}, stdev {self.stdev}"

Gaussian = MockGaussian

# Execution
gaussian_one = Gaussian(10, 5)
print(f"Gaussian Instance Created: {gaussian_one}")
print(f"Mean accessed successfully: {gaussian_one.mean}")`}
          output={packageUsageOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Object-Oriented Benefit: As a user of the package, you only need to run <code className="text-emerald-300">from distributions import Gaussian</code>. The complex statistical implementation details remain completely obscured.</span>
        </div>
      </div>

    </div>
  );
}