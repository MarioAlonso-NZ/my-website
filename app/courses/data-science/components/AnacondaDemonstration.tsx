'use client';

import React from 'react';
import { MonitorPlay, Package, TerminalSquare, Layers, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function AnacondaDemonstration() {

  // Salida simulada de la terminal bash ejecutando los comandos de Conda
  const condaTerminalOutput = `--- 1. Creating the Environment ---
$ conda create -n tea_facts python=3
Collecting package metadata (current_repodata.json): done
Solving environment: done
Preparing transaction: done
Verifying transaction: done
Executing transaction: done

--- 2. Activating the Environment ---
$ conda activate tea_facts
(tea_facts) $

--- 3. Installing Data Science Packages ---
(tea_facts) $ conda install numpy pandas matplotlib
Collecting package metadata (current_repodata.json): done
Solving environment: done
Installing packages: numpy, pandas, matplotlib...
done.

--- 4. Installing Jupyter Notebook ---
(tea_facts) $ conda install jupyter notebook
Installing packages: jupyter, notebook...
done.

--- 5. Verifying Installation ---
(tea_facts) $ conda list
# packages in environment at /opt/anaconda3/envs/tea_facts:
#
# Name                    Version                   Build  Channel
jupyter                   1.0.0                    pypi_0    pypi
matplotlib                3.8.0            py310hca03da5_0  
numpy                     1.26.0           py310h3b2db8c_0  
pandas                    2.1.1            py310hca03da5_0  
python                    3.10.13              h2469f6b_0`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <MonitorPlay className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Anaconda - Demonstration
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Anaconda is a distribution of packages built specifically for data science. It comes with <strong>conda</strong>, a powerful package and environment manager used to isolate projects that require different versions of Python or dependencies.
        </p>
      </div>

      {/* 2. Conceptos Clave (Responsivo: 1 columna en móvil, 2 en pantallas medianas+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Environment Management */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <Layers size={16} />
            <span>Environment Isolation</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            Use <code className="text-slate-300 font-mono">conda create -n &lt;name&gt; python=3</code> to build a sandbox. This ensures that updating a package in one project doesn't accidentally break another project that relies on an older version.
          </p>
        </div>

        {/* Package Management */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <Package size={16} />
            <span>Package Management</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            Once activated with <code className="text-slate-300 font-mono">conda activate</code>, you can use <code className="text-slate-300 font-mono">conda install</code> to seamlessly download complex data science libraries (and their C/C++ bindings) without compilation headaches.
          </p>
        </div>

      </div>

      {/* 3. Simulación de Terminal */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <TerminalSquare className="text-emerald-400" size={15} />
          <span>Terminal Execution: Setting up "tea_facts"</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates the exact terminal commands demonstrated in the video to set up a data science environment from scratch.
        </p>

        <RunnablePythonCode
          code={`import os

# Simulating standard bash terminal commands for Conda
print("--- 1. Creating the Environment ---")
print("$ conda create -n tea_facts python=3")
print("Collecting package metadata... done\\nSolving environment... done\\nExecuting transaction... done\\n")

print("--- 2. Activating the Environment ---")
print("$ conda activate tea_facts")
print("(tea_facts) $\\n")

print("--- 3. Installing Data Science Packages ---")
print("(tea_facts) $ conda install numpy pandas matplotlib")
print("Installing packages: numpy, pandas, matplotlib... done.\\n")

print("--- 4. Installing Jupyter Notebook ---")
print("(tea_facts) $ conda install jupyter notebook")
print("Installing packages: jupyter, notebook... done.\\n")

print("--- 5. Verifying Installation ---")
print("(tea_facts) $ conda list")
print("# packages in environment at /opt/anaconda3/envs/tea_facts:")
print("jupyter                   1.0.0")
print("matplotlib                3.8.0")
print("numpy                     1.26.0")
print("pandas                    2.1.1")`}
          output={condaTerminalOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Notice how <code className="text-emerald-300">conda list</code> displays everything installed in the active environment. Anaconda makes working with data much more pleasant by handling all these complex dependencies for you!</span>
        </div>
      </div>

    </div>
  );
}