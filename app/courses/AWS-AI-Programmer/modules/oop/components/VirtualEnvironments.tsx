'use client';

import React from 'react';
import { Box, Layers, TerminalSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function VirtualEnvironments() {

  // Salida calculada simulando la terminal al crear y usar un entorno virtual
  const terminalSimulationOutput = `--- 1. Creating Virtual Environment ---
$ python3 -m venv ai_env
Created directory 'ai_env' with isolated Python installation.

--- 2. Activating Environment ---
$ source ai_env/bin/activate
(ai_env) $ python --version
Python 3.10.12

--- 3. Installing Packages via Pip ---
(ai_env) $ pip install numpy pandas
Collecting numpy
  Downloading numpy-1.26.4-cp310-cp310-manylinux_2_17_x86_64.whl
Collecting pandas
  Downloading pandas-2.2.1-cp310-cp310-manylinux_2_17_x86_64.whl
Successfully installed numpy-1.26.4 pandas-2.2.1

--- 4. Leaving Environment ---
(ai_env) $ deactivate
$ `;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Box className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Python Virtual Environments (venv vs. Conda)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          A virtual environment is a silo-ed Python installation isolated from your main system. It allows you to install specific package versions for an AI project without conflicting with global system dependencies.
        </p>
      </div>

      {/* 2. Comparación: Conda vs Venv */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Conda */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <Layers size={16} />
            <span>Conda (Data Science Standard)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            Invented for data science because it can manage packages that rely on libraries outside of Python (e.g., C/C++ bindings). <strong>Conda does two things: manages packages AND manages environments.</strong>
          </p>
          <pre className="text-emerald-300 bg-slate-900 p-2 rounded-lg border border-slate-800 overflow-x-auto text-xs font-mono">
{`conda create --name myenv
conda activate myenv
conda install numpy`}
          </pre>
        </div>

        {/* venv + pip */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <TerminalSquare size={16} />
            <span>venv + pip (Software Dev Standard)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            The <code className="text-slate-300 font-mono">venv</code> module comes pre-installed with Python 3. It manages <em>only</em> environments. <code className="text-slate-300 font-mono">pip</code> is a separate tool that manages <em>only</em> Python packages.
          </p>
          <pre className="text-cyan-300 bg-slate-900 p-2 rounded-lg border border-slate-800 overflow-x-auto text-xs font-mono">
{`python3 -m venv myenv
source myenv/bin/activate
pip install numpy`}
          </pre>
        </div>

      </div>

      {/* 3. Simulación de Comandos de Terminal */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ShieldCheck className="text-cyan-400" size={15} />
          <span>Terminal Execution: Creating and Managing a venv</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          The recommended workflow for this project. Running these terminal commands sets up a clean sandbox for your package installation.
        </p>

        <RunnablePythonCode
          code={`import os

# Simulating standard bash terminal commands for venv creation
print("--- 1. Creating Virtual Environment ---")
print("$ python3 -m venv ai_env")
print("Created directory 'ai_env' with isolated Python installation.\\n")

print("--- 2. Activating Environment ---")
print("$ source ai_env/bin/activate")
print("(ai_env) $ python --version")
print("Python 3.10.12\\n")

print("--- 3. Installing Packages via Pip ---")
print("(ai_env) $ pip install numpy pandas")
print("Collecting numpy\\n  Downloading numpy-1.26.4-cp310-cp310-manylinux_2_17_x86_64.whl")
print("Collecting pandas\\n  Downloading pandas-2.2.1-cp310-cp310-manylinux_2_17_x86_64.whl")
print("Successfully installed numpy-1.26.4 pandas-2.2.1\\n")

print("--- 4. Leaving Environment ---")
print("(ai_env) $ deactivate")
print("$ ")`}
          output={terminalSimulationOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Deleting an environment: Because a venv is just a regular directory containing a Python binary and libraries, deleting the environment is as simple as running <code className="text-emerald-300">rm -rf ai_env</code> in your terminal.</span>
        </div>
      </div>

    </div>
  );
}