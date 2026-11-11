'use client';

import React, { useState } from 'react';
import { PackageOpen, Minimize, Layers, Box, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function WhatIsAnaconda() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quizOptions = [
    "Python, Conda, and its dependencies",
    "Python, Conda, and its dependencies, Jupyter",
    "Python, Conda, and its dependencies, Numpy, and Pandas",
    "Python, Conda, and its dependencies, and Spyder"
  ];

  const correctAnswerIndex = 0; // "Python, Conda, and its dependencies"

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <PackageOpen className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            What is Anaconda Distribution?
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          A software distribution and package manager that simplifies data science workflows by isolating environments and managing complex dependencies (like C/C++ bindings for Python math libraries).
        </p>
      </div>

      {/* 2. Anaconda vs Miniconda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <PackageOpen size={64} />
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <PackageOpen size={16} />
            <span>Anaconda (Full Distribution)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            A large download (~500 MB) that comes pre-packaged with <strong>Anaconda Navigator</strong> (GUI), Python, conda, and over 160 scientific packages (Numpy, Pandas, etc.) ready out of the box.
          </p>
        </div>

        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Minimize size={64} />
          </div>
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <Minimize size={16} />
            <span>Miniconda (Minimalist)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            A lightweight version that installs <strong>only conda and Python</strong>. It lacks preinstalled packages, saving bandwidth and storage. You install what you need manually using <code className="text-slate-300 font-mono">conda install</code>.
          </p>
        </div>
      </div>

      {/* 3. Conda vs Pip */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          Package Managers: Conda vs Pip
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
              <Box size={16} />
              <span>pip (Python Package Index)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              The default manager for general Python use. It installs packages from PyPI. It handles <strong>only packages</strong>, not environments.
            </p>
          </div>

          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
              <Layers size={16} />
              <span>conda (Anaconda Repository)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Focuses on data science. Installs <strong>precompiled packages</strong> (like Numpy compiled with the MKL library for faster math). It handles <strong>both packages AND environments</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Interactive Quiz */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden mt-6">
        <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center gap-2">
          <HelpCircle size={16} className="text-emerald-400" />
          <h4 className="font-semibold text-white text-sm">Knowledge Check</h4>
        </div>
        <div className="p-5 space-y-4">
          <p className="text-sm text-slate-300 font-medium">
            What all things get installed when you install Miniconda?
          </p>
          
          <div className="space-y-2">
            {quizOptions.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === correctAnswerIndex;
              
              let optionStyle = "border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 cursor-pointer";
              
              if (isSubmitted) {
                if (isCorrect) {
                  optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-300 cursor-default";
                } else if (isSelected && !isCorrect) {
                  optionStyle = "border-rose-500 bg-rose-500/10 text-rose-300 cursor-default";
                } else {
                  optionStyle = "border-slate-800 bg-slate-950 text-slate-500 cursor-default opacity-50";
                }
              } else if (isSelected) {
                optionStyle = "border-emerald-500 bg-emerald-500/5 text-emerald-400";
              }

              return (
                <div
                  key={index}
                  onClick={() => !isSubmitted && setSelectedAnswer(index)}
                  className={`p-3 border rounded-lg transition-colors flex items-center justify-between ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 
                      ${isSelected ? 'border-emerald-500' : 'border-slate-500'} 
                      ${(isSubmitted && isCorrect) ? 'border-emerald-500 bg-emerald-500' : ''}
                      ${(isSubmitted && isSelected && !isCorrect) ? 'border-rose-500 bg-rose-500' : ''}`}
                    >
                      {isSelected && !isSubmitted && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                    </div>
                    <span className="text-sm">{option}</span>
                  </div>
                  {isSubmitted && isCorrect && <CheckCircle2 size={18} className="text-emerald-500" />}
                  {isSubmitted && isSelected && !isCorrect && <XCircle size={18} className="text-rose-500" />}
                </div>
              );
            })}
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="mt-4 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Submit
            </button>
          ) : (
            <div className={`mt-4 p-4 rounded-lg text-sm ${selectedAnswer === correctAnswerIndex ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300' : 'bg-rose-500/10 border border-rose-500/20 text-rose-300'}`}>
              {selectedAnswer === correctAnswerIndex 
                ? "Correct! Miniconda is a minimalist distribution that only includes Python, conda, and their direct dependencies. You install additional packages like Jupyter or Numpy manually."
                : "Incorrect. Try again! Remember that Miniconda is the lightweight version designed to omit heavy data science packages."}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}