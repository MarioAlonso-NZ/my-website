'use client';

import React, { useState } from 'react';
import { PackageSearch, PackagePlus, PackageMinus, RefreshCw, HelpCircle, CheckSquare, Square, CheckCircle2, XCircle } from 'lucide-react';

export default function ManagingPackages() {
  // Estados para el Quiz 1 (Multi-select)
  const [q1Selected, setQ1Selected] = useState<number[]>([]);
  const [q1Submitted, setQ1Submitted] = useState(false);
  
  // Estados para el Quiz 2 (Single-select)
  const [q2Selected, setQ2Selected] = useState<number | null>(null);
  const [q2Submitted, setQ2Submitted] = useState(false);

  // --- Datos del Quiz 1 ---
  const q1Options = [
    "conda install numpy",
    "conda install pandas",
    "conda install numpy pandas"
  ];
  // ¡Todas las opciones son válidas para instalar esos paquetes!
  const q1CorrectAnswers = [0, 1, 2]; 

  const toggleQ1Option = (index: number) => {
    if (q1Submitted) return;
    setQ1Selected(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleQ1Submit = () => {
    if (q1Selected.length > 0) setQ1Submitted(true);
  };

  const isQ1FullyCorrect = q1CorrectAnswers.every(ans => q1Selected.includes(ans)) && q1Selected.length === q1CorrectAnswers.length;

  // --- Datos del Quiz 2 ---
  const q2Options = [
    "The system must have pip already installed on it.",
    "The system must have any version of Python and conda package manager already installed on it (using either Miniconda or Anaconda).",
    "The system must have Jupyter already installed on it."
  ];
  const q2CorrectAnswer = 1;

  const handleQ2Submit = () => {
    if (q2Selected !== null) setQ2Submitted(true);
  };

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <PackageSearch className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Managing Packages with Conda
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Conda shines at package management because it automatically resolves and installs dependencies. For example, if you install SciPy, Conda will automatically install NumPy if it isn't already there.
        </p>
      </div>

      {/* 2. Cheat Sheet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Install */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <PackagePlus size={16} />
            <span>Install Packages</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Installs one or multiple packages, resolving dependencies.</p>
          <div className="space-y-1">
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">conda install numpy</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">conda install numpy scipy pandas</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">conda install numpy=1.10</code>
          </div>
        </div>

        {/* Remove */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
            <PackageMinus size={16} />
            <span>Remove Packages</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Uninstalls a package from the active environment.</p>
          <code className="block bg-slate-900 px-2 py-1 rounded text-rose-300 font-mono text-xs">conda remove package_name</code>
        </div>

        {/* Update */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <RefreshCw size={16} />
            <span>Update Packages</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Updates specific packages or the entire environment.</p>
          <div className="space-y-1">
            <code className="block bg-slate-900 px-2 py-1 rounded text-cyan-300 font-mono text-xs">conda update package_name</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-cyan-300 font-mono text-xs">conda update --all</code>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <PackageSearch size={16} />
            <span>Search Packages</span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-2">Finds available versions of a package. Use quotes for wildcards.</p>
          <div className="space-y-1">
            <code className="block bg-slate-900 px-2 py-1 rounded text-purple-300 font-mono text-xs">conda search search_term</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-purple-300 font-mono text-xs">conda search '*beautifulsoup*'</code>
          </div>
        </div>
      </div>

      {/* 3. Interactive Quizzes */}
      <div className="space-y-6 pt-4">
        
        {/* Quiz 1 (Multi-select) */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
          <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center gap-2">
            <HelpCircle size={16} className="text-emerald-400" />
            <h4 className="font-semibold text-white text-sm">Question 1 of 2</h4>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-slate-300">
              Which of these commands would you use to install the packages NumPy and Pandas with Conda? <em>(More than one might be correct - select all that apply)</em>
            </p>
            <div className="space-y-2">
              {q1Options.map((option, idx) => {
                const isSelected = q1Selected.includes(idx);
                const isCorrect = q1CorrectAnswers.includes(idx);
                
                let style = "border-slate-700 bg-slate-950 hover:bg-slate-900 text-slate-300 cursor-pointer";
                if (q1Submitted) {
                  if (isSelected && isCorrect) style = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                  else if (isSelected && !isCorrect) style = "border-rose-500 bg-rose-500/10 text-rose-300";
                  else if (!isSelected && isCorrect) style = "border-emerald-500/50 bg-slate-950 text-emerald-500/70 border-dashed";
                  else style = "border-slate-800 bg-slate-950 text-slate-600 opacity-50";
                } else if (isSelected) {
                  style = "border-emerald-500 bg-emerald-500/5 text-emerald-400";
                }

                return (
                  <div key={idx} onClick={() => toggleQ1Option(idx)} className={`p-3 border rounded-lg transition-colors flex items-center gap-3 font-mono text-xs ${style}`}>
                    {isSelected ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>{option}</span>
                  </div>
                );
              })}
            </div>
            {!q1Submitted ? (
              <button onClick={handleQ1Submit} disabled={q1Selected.length === 0} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white text-sm font-semibold rounded-lg">Submit</button>
            ) : (
              <div className={`p-4 rounded-lg text-sm ${isQ1FullyCorrect ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'}`}>
                {isQ1FullyCorrect ? "Correct! All of these commands will successfully install NumPy and Pandas." : "Partially correct. Actually, ALL of these options are valid ways to install the packages!"}
              </div>
            )}
          </div>
        </div>

        {/* Quiz 2 (Single-select) */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
          <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center gap-2">
            <HelpCircle size={16} className="text-emerald-400" />
            <h4 className="font-semibold text-white text-sm">Question 2 of 2</h4>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-slate-300">
              What are the prerequisites to run the command <code className="text-emerald-300 bg-emerald-500/10 px-1 rounded">conda install package_name</code> that will install a package?
            </p>
            <div className="space-y-2">
              {q2Options.map((option, idx) => {
                const isSelected = q2Selected === idx;
                const isCorrect = idx === q2CorrectAnswer;
                
                let style = "border-slate-700 bg-slate-950 hover:bg-slate-900 text-slate-300 cursor-pointer";
                if (q2Submitted) {
                  if (isCorrect) style = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                  else if (isSelected && !isCorrect) style = "border-rose-500 bg-rose-500/10 text-rose-300";
                  else style = "border-slate-800 bg-slate-950 text-slate-600 opacity-50";
                } else if (isSelected) {
                  style = "border-emerald-500 bg-emerald-500/5 text-emerald-400";
                }

                return (
                  <div key={idx} onClick={() => !q2Submitted && setQ2Selected(idx)} className={`p-3 border rounded-lg transition-colors flex items-center justify-between ${style}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-emerald-500' : 'border-slate-500'} ${(q2Submitted && isCorrect) ? 'border-emerald-500 bg-emerald-500' : ''} ${(q2Submitted && isSelected && !isCorrect) ? 'border-rose-500 bg-rose-500' : ''}`}>
                        {isSelected && !q2Submitted && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                      </div>
                      <span className="text-sm">{option}</span>
                    </div>
                    {q2Submitted && isCorrect && <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />}
                    {q2Submitted && isSelected && !isCorrect && <XCircle size={18} className="text-rose-500 shrink-0" />}
                  </div>
                );
              })}
            </div>
            {!q2Submitted ? (
              <button onClick={handleQ2Submit} disabled={q2Selected === null} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white text-sm font-semibold rounded-lg">Submit</button>
            ) : (
              <div className={`p-4 rounded-lg text-sm ${q2Selected === q2CorrectAnswer ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
                {q2Selected === q2CorrectAnswer ? "Correct! You only need Python and the conda package manager installed." : "Incorrect. Try again!"}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}