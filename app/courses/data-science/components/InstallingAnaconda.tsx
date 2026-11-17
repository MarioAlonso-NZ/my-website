'use client';

import React from 'react';
import { Download, Monitor, TerminalSquare, ShieldAlert, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function InstallingAnaconda() {

  // Salida simulada de la actualización del entorno base
  const updateOutput = `--- Updating Base Environment ---
$ conda update conda
$ conda update --all

Collecting package metadata (current_repodata.json): done
Solving environment: done

## Package Plan ##
  environment location: C:\\Users\\MarioNZ\\miniconda3

The following packages will be UPDATED:
  certifi            pkgs/main::certifi-2023.7.22-py310haa95532_0 --> pkgs/main::certifi-2023.11.17-py310haa95532_0
  openssl            pkgs/main::openssl-3.0.10-h2bbff1b_2 --> pkgs/main::openssl-3.0.12-h2bbff1b_0
  python             pkgs/main::python-3.10.13-he1021f5_0 --> pkgs/main::python-3.10.14-he1021f5_0

Proceed ([y]/n)? y

Downloading and Extracting Packages:
Preparing transaction: done
Verifying transaction: done
Executing transaction: done`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Download className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Installing Anaconda (Local vs Workspace)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          While Udacity provides in-browser Workspaces for all projects, installing Anaconda locally allows you to develop data science projects offline on your own machine.
        </p>
      </div>

      {/* 2. Udacity Workspaces vs Local Install */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Monitor size={16} />
            <span>Udacity Workspaces (Optional)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Local installation is <strong>OPTIONAL</strong>. Udacity provides integrated Jupyter notebooks directly in the classroom browser, eliminating the need to configure your local machine if you prefer not to.
          </p>
        </div>

        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <TerminalSquare size={16} />
            <span>What comes with Anaconda?</span>
          </div>
          <ul className="text-xs text-slate-400 leading-relaxed font-sans list-disc list-inside space-y-1">
            <li><strong>Anaconda Navigator:</strong> Desktop GUI for environments.</li>
            <li><strong>conda:</strong> The command-line utility.</li>
            <li><strong>Python:</strong> Base Python installation.</li>
            <li><strong>Anaconda Prompt:</strong> Pre-configured terminal (Windows).</li>
            <li><strong>Spyder:</strong> Scientific IDE + 300 pre-installed packages.</li>
          </ul>
        </div>
      </div>

      {/* 3. Mejores Prácticas: Actualizar el entorno */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-emerald-400" size={15} />
          <span>Best Practice: Update Default Packages</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Immediately after installation, the default packages might be out of date. To prevent future conflicts, run these commands in your newly configured CLI to update the base environment.
        </p>

        <RunnablePythonCode
          code={`import os

print("--- Updating Base Environment ---")
print("$ conda update conda")
print("$ conda update --all\\n")

print("Collecting package metadata (current_repodata.json): done")
print("Solving environment: done\\n")

print("## Package Plan ##")
print("  environment location: C:\\\\Users\\\\MarioNZ\\\\miniconda3\\n")

print("The following packages will be UPDATED:")
print("  certifi            pkgs/main::certifi-2023.7.22... --> pkgs/main::certifi-2023.11.17...")
print("  openssl            pkgs/main::openssl-3.0.10... --> pkgs/main::openssl-3.0.12...")
print("  python             pkgs/main::python-3.10.13... --> pkgs/main::python-3.10.14...\\n")

print("Proceed ([y]/n)? y\\n")
print("Downloading and Extracting Packages:")
print("Preparing transaction: done\\nVerifying transaction: done\\nExecuting transaction: done")`}
          output={updateOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <ShieldAlert size={16} className="shrink-0 text-amber-400" />
          <span>Note on pip: In modern versions of Anaconda/Miniconda, both conda and pip are included by default. You do not need to run <code className="text-amber-300">conda install pip</code> anymore!</span>
        </div>
      </div>

    </div>
  );
}