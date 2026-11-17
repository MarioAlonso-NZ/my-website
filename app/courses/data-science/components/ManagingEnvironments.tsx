'use client';

import React, { useState } from 'react';
import { Server, PlayCircle, StopCircle, List, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function ManagingEnvironments() {
  // Estados para el Quiz
  const [qSelected, setQSelected] = useState<number | null>(null);
  const [qSubmitted, setQSubmitted] = useState(false);

  // --- Datos del Quiz ---
  const qOptions = [
    "conda env create -n data python=3.6 numpy pandas",
    "conda create data python=3.6 numpy pandas",
    "conda create -n data python=3.6",
    "conda create -n data python=3.6 numpy pandas"
  ];
  const qCorrectAnswer = 3; // "conda create -n data python=3.6 numpy pandas"

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
            Managing Environments
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Environments are isolated sandboxes. You can install specific versions of Python and different packages in each environment without them interfering with one another.
        </p>
      </div>

      {/* 2. Cheat Sheet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Create */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <Server size={16} />
            <span>Create Environment</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Build a new sandbox. Use <code className="text-emerald-300">-n</code> for the name, optionally specify a Python version, and list initial packages.</p>
          <div className="space-y-1">
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">conda create -n my_env</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">conda create -n my_env python=3.7</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">conda create -n my_env python=3.7 numpy Keras</code>
          </div>
        </div>

        {/* Activate */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <PlayCircle size={16} />
            <span>Activate Environment</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Enter the sandbox. Your terminal prompt will change to show the environment name, like <code className="text-cyan-300">(my_env) $</code>.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-cyan-300 font-mono text-xs">conda activate my_env</code>
        </div>

        {/* List */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <List size={16} />
            <span>List Installed Packages</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">View everything installed inside the <strong>currently active</strong> environment.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-purple-300 font-mono text-xs">conda list</code>
        </div>

        {/* Deactivate */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
            <StopCircle size={16} />
            <span>Deactivate Environment</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Leave the current environment and return to the <code className="text-rose-300">(base)</code> environment.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-rose-300 font-mono text-xs">conda deactivate</code>
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
              What command would you use to create an environment named <code className="text-emerald-300 bg-emerald-500/10 px-1 rounded">data</code> installed with Python 3.6, numpy, and pandas?
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
                  <div key={idx} onClick={() => !qSubmitted && setQSelected(idx)} className={`p-3 border rounded-lg transition-colors flex items-center justify-between font-mono text-xs ${style}`}>
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
                {qSelected === qCorrectAnswer ? "Correct! You use 'conda create -n' followed by the name, then the python version, and finally any packages you want." : "Incorrect. Remember that the '-n' flag is required to specify the environment name!"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}