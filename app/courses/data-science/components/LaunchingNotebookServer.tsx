'use client';

import React, { useState } from 'react';
import { Play, Server, Power, FolderTree, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function LaunchingNotebookServer() {
  // Estados para el Quiz
  const [qSelected, setQSelected] = useState<number | null>(null);
  const [qSubmitted, setQSubmitted] = useState(false);

  // --- Datos del Quiz ---
  const qOptions = ["Yes", "No"];
  const qCorrectAnswer = 0; // "Yes"

  const handleQSubmit = () => {
    if (qSelected !== null) setQSubmitted(true);
  };

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Server className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Launching & Managing the Notebook Server
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Learn how to start the Jupyter web interface from your project directory, integrate your Conda environments, and safely shut down the background processes.
        </p>
      </div>

      {/* 2. Core Workflow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Launching */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <Play size={16} />
            <span>1. Start the Server</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Navigate to your project folder using <code className="text-slate-300">cd</code>, then run the launch command. The dashboard will open at <code className="text-slate-300">localhost:8888</code>.</p>
          <div className="space-y-1">
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">cd path/to/project</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">jupyter notebook</code>
          </div>
        </div>

        {/* Conda Integration */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <FolderTree size={16} />
            <span>2. Conda Kernels</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">To make your isolated Conda environments show up in Jupyter's "New" menu, install the kernels package.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-cyan-300 font-mono text-xs">conda install nb_conda_kernels</code>
        </div>

        {/* Shutting Down */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
            <Power size={16} />
            <span>3. Shut Down</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Save your work in the browser, then go back to your terminal window and press <strong>Control + C</strong> twice to kill the server.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-rose-300 font-mono text-xs">Ctrl + C (twice)</code>
        </div>

      </div>

      {/* 3. Interactive Quiz */}
      <div className="pt-4">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
          <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center gap-2">
            <HelpCircle size={16} className="text-emerald-400" />
            <h4 className="font-semibold text-white text-sm">Knowledge Check</h4>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-slate-300">
              Can we start multiple Notebook servers at the same time?
            </p>
            <div className="space-y-2">
              {qOptions.map((option, idx) => {
                const isSelected = qSelected === idx;
                const isCorrect = idx === qCorrectAnswer;
                
                let style = "border-slate-700 bg-slate-950 hover:bg-slate-900 text-slate-300 cursor-pointer";
                if (qSubmitted) {
                  if (isCorrect) style = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                  else if (isSelected && !isCorrect) style = "border-rose-500 bg-rose-500/10 text-rose-300";
                  else style = "border-slate-800 bg-slate-950 text-slate-600 opacity-50";
                } else if (isSelected) {
                  style = "border-emerald-500 bg-emerald-500/5 text-emerald-400";
                }

                return (
                  <div key={idx} onClick={() => !qSubmitted && setQSelected(idx)} className={`p-3 border rounded-lg transition-colors flex items-center justify-between text-sm ${style}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-emerald-500' : 'border-slate-500'} ${(qSubmitted && isCorrect) ? 'border-emerald-500 bg-emerald-500' : ''} ${(qSubmitted && isSelected && !isCorrect) ? 'border-rose-500 bg-rose-500' : ''}`}>
                        {isSelected && !qSubmitted && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                      </div>
                      <span>{option}</span>
                    </div>
                    {qSubmitted && isCorrect && <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />}
                    {qSubmitted && isSelected && !isCorrect && <XCircle size={18} className="text-rose-500 shrink-0" />}
                  </div>
                );
              })}
            </div>
            {!qSubmitted ? (
              <button onClick={handleQSubmit} disabled={qSelected === null} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white text-sm font-semibold rounded-lg">Submit</button>
            ) : (
              <div className={`p-4 rounded-lg text-sm ${qSelected === qCorrectAnswer ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
                {qSelected === qCorrectAnswer ? "Correct! If port 8888 is occupied, Jupyter will automatically increment and start the new server on port 8889, then 8890, and so on." : "Incorrect. You actually can! Jupyter will just use the next available port (like 8889)."}
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}