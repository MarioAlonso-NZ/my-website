'use client';

import React from 'react';
import { DownloadCloud, Terminal, Play, CheckCircle2, Code2, AlertCircle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function InstallingJupyter() {

  // Salida simulada de la terminal para instalación y ejecución
  const jupyterOutput = `--- 1. Verifying Conda ---
$ conda --version
conda 23.9.0

--- 2. Installing Jupyter Notebook ---
$ conda install jupyter notebook
Collecting package metadata (current_repodata.json): done
Solving environment: done
Installing packages: jupyter, notebook, ipykernel...
done.

--- 3. Launching the Server ---
$ jupyter notebook
[I 20:16:00.000 NotebookApp] Serving notebooks from local directory: C:\\Users\\MarioNZ\\Projects
[I 20:16:00.000 NotebookApp] Jupyter Notebook is running at:
[I 20:16:00.000 NotebookApp] http://localhost:8888/?token=abcdef1234567890
[I 20:16:00.000 NotebookApp] Use Control-C to stop this server and shut down all kernels.`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <DownloadCloud className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Installing & Launching Jupyter
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Depending on your Python environment setup, Jupyter might already be installed. If not, it is easily added via your package manager.
        </p>
      </div>

      {/* 2. Rutas de Instalación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Anaconda (Full) */}
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2 opacity-60">
          <div className="flex items-center gap-2 text-slate-400 font-semibold font-mono text-xs">
            <CheckCircle2 size={16} />
            <span>Anaconda (Full Distribution)</span>
          </div>
          <p className="text-xs text-slate-500 font-sans leading-relaxed">
            If you installed the massive 500MB+ Anaconda distribution, Jupyter Notebooks are <strong>automatically installed</strong> in your default base environment. You can skip installation.
          </p>
        </div>

        {/* Miniconda (Tu caso) */}
        <div className="p-4 bg-slate-950 border border-emerald-500/30 rounded-xl space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500/20" />
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <Terminal size={16} />
            <span>Miniconda / Pip Users</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Since Miniconda is bare-bones, you must install it manually. You can use <code className="text-emerald-300">conda install jupyter notebook</code> or <code className="text-emerald-300">pip install notebook</code>.
          </p>
        </div>
      </div>

      {/* 3. Simulación de Instalación y Ejecución */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-emerald-400" size={15} />
          <span>Terminal: Setup & Launch</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates verifying your conda installation, downloading the Jupyter packages, and finally spinning up the local web server to open the interface.
        </p>

        <RunnablePythonCode
          code={`import os
import time

print("--- 1. Verifying Conda ---")
print("$ conda --version")
print("conda 23.9.0\\n")

print("--- 2. Installing Jupyter Notebook ---")
print("$ conda install jupyter notebook")
print("Collecting package metadata... done\\nSolving environment... done\\nInstalling packages: jupyter, notebook, ipykernel... done.\\n")

print("--- 3. Launching the Server ---")
print("$ jupyter notebook")
print("[I 20:16:00.000 NotebookApp] Serving notebooks from local directory: C:\\\\Users\\\\MarioNZ\\\\Projects")
print("[I 20:16:00.000 NotebookApp] Jupyter Notebook is running at:")
print("[I 20:16:00.000 NotebookApp] http://localhost:8888/?token=abcdef1234567890")
print("[I 20:16:00.000 NotebookApp] Use Control-C to stop this server and shut down all kernels.")`}
          output={jupyterOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <Play size={16} className="shrink-0 text-cyan-400" />
          <span><strong>The Launch Command:</strong> Running <code className="text-cyan-300">jupyter notebook</code> in your terminal will automatically open a new tab in your default web browser pointing to <code>localhost:8888</code>.</span>
        </div>
        
        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <AlertCircle size={16} className="shrink-0 text-amber-400" />
          <span><strong>Keep the terminal open!</strong> The terminal is the actual "server". If you close the terminal window, your Jupyter web tab will lose its connection and stop working.</span>
        </div>
      </div>

    </div>
  );
}