'use client';

import React from 'react';
import { Share, Download, ListTree, Trash2, FileJson, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function MoreEnvironmentActions() {

  // Salida simulada de la terminal para exportar y listar entornos
  const envActionsOutput = `--- 1. Listing Environments ---
$ conda env list
# conda environments:
#
base                  *  C:\\Users\\MarioNZ\\miniconda3
data                     C:\\Users\\MarioNZ\\miniconda3\\envs\\data
tea_facts                C:\\Users\\MarioNZ\\miniconda3\\envs\\tea_facts

--- 2. Exporting Environment ---
$ conda activate data
(data) $ conda env export > environment.yaml

--- 3. Verifying Export ---
(data) $ cat environment.yaml
name: data
channels:
  - defaults
dependencies:
  - numpy=1.26.0
  - pandas=2.1.1
  - python=3.10.13
prefix: C:\\Users\\MarioNZ\\miniconda3\\envs\\data`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Share className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            More Environment Actions (Sharing & Cleanup)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Learn how to share your exact project setup with others using YAML files, list your existing environments, and remove the ones you no longer need.
        </p>
      </div>

      {/* 2. Advanced Commands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Export Environment */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <FileJson size={16} />
            <span>Export / Save (YAML)</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Saves your current environment dependencies to a file to share via GitHub.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">conda env export &gt; environment.yaml</code>
        </div>

        {/* Import Environment */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <Download size={16} />
            <span>Import / Create from File</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Builds an exact replica of an environment using a shared YAML file.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-cyan-300 font-mono text-xs">conda env create -f environment.yaml</code>
        </div>

        {/* List Environments */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <ListTree size={16} />
            <span>List All Environments</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Shows all environments. The active one has an asterisk (<code className="text-slate-300">*</code>) next to it.</p>
          <div className="space-y-1">
            <code className="block bg-slate-900 px-2 py-1 rounded text-purple-300 font-mono text-xs">conda env list</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-purple-300 font-mono text-xs">conda info --envs</code>
          </div>
        </div>

        {/* Remove Environment */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
            <Trash2 size={16} />
            <span>Remove Environment</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Deletes an environment you no longer use to free up disk space.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-rose-300 font-mono text-xs">conda env remove -n env_name</code>
        </div>

      </div>

      {/* 3. Simulación de Exportación */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-emerald-400" size={15} />
          <span>Terminal Execution: Exporting a Workspace</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates checking our available environments, activating one, and exporting it to a <code className="text-emerald-300 font-mono">environment.yaml</code> file for collaboration.
        </p>

        <RunnablePythonCode
          code={`import os

print("--- 1. Listing Environments ---")
print("$ conda env list")
print("# conda environments:\\n#")
print("base                  *  C:\\\\Users\\\\MarioNZ\\\\miniconda3")
print("data                     C:\\\\Users\\\\MarioNZ\\\\miniconda3\\\\envs\\\\data")
print("tea_facts                C:\\\\Users\\\\MarioNZ\\\\miniconda3\\\\envs\\\\tea_facts\\n")

print("--- 2. Exporting Environment ---")
print("$ conda activate data")
print("(data) $ conda env export > environment.yaml\\n")

print("--- 3. Verifying Export ---")
print("(data) $ cat environment.yaml")
print("name: data")
print("channels:")
print("  - defaults")
print("dependencies:")
print("  - numpy=1.26.0")
print("  - pandas=2.1.1")
print("  - python=3.10.13")
print("prefix: C:\\\\Users\\\\MarioNZ\\\\miniconda3\\\\envs\\\\data")`}
          output={envActionsOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Bonus Tip: If you only want to see the packages inside a specific environment without activating it, you can run <code className="text-emerald-300">conda list -n env_name</code>.</span>
        </div>
      </div>

    </div>
  );
}