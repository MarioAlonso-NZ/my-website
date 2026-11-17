'use client';

import React, { useState } from 'react';
import { FileJson, FileOutput, Terminal, HelpCircle, CheckCircle2, XCircle, Code2, AlertCircle } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ConvertingNotebooks() {
  // Estados para el Quiz
  const [qSelected, setQSelected] = useState<number | null>(null);
  const [qSubmitted, setQSubmitted] = useState(false);

  // --- Datos del Quiz ---
  const qOptions = [".pdf", ".tex", ".docx", ".html"];
  const qCorrectAnswer = 2; // ".docx"

  const handleQSubmit = () => {
    if (qSelected !== null) setQSubmitted(true);
  };

  const convertOutput = `[NbConvertApp] Converting notebook mynotebook.ipynb to html
[NbConvertApp] Writing 324152 bytes to mynotebook.html
Success!`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <FileOutput className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Converting Notebooks (nbconvert)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Notebooks are just big <strong>JSON files</strong> with the extension <code className="text-slate-300">.ipynb</code>. Because they are structured JSON, Jupyter comes with a utility called <code>nbconvert</code> to easily translate them into other formats for sharing.
        </p>
      </div>

      {/* 2. Formatos Soportados */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <FileJson size={16} />
            <span>Supported Output Formats</span>
          </div>
          <p className="text-xs text-slate-400 font-sans">
            You can convert your analysis into various formats depending on your audience:
          </p>
          <ul className="text-xs font-mono text-slate-400 space-y-1 bg-slate-900 p-3 rounded-lg border border-slate-800">
            <li>• HTML (Great for non-programmers)</li>
            <li>• LaTeX / PDF (Academic papers)</li>
            <li>• Reveal.js (HTML Slideshows)</li>
            <li>• Markdown (Blogs and wikis)</li>
            <li>• Executable Script (.py)</li>
          </ul>
        </div>

        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-3 flex flex-col justify-center">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
            <div className="space-y-1">
              <span className="text-amber-400 font-semibold font-mono text-xs block">Pip vs Conda Note</span>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                If you ever need to install a package that is <em>not</em> available in the Anaconda repository (e.g., <code>nbconvert</code> if missing, or specific niche APIs), you can safely use <code className="bg-slate-950 px-1 rounded text-amber-300">pip install package_name</code> inside your conda environment!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Simulación de Terminal */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Terminal className="text-emerald-400" size={15} />
          <span>Terminal Execution: Converting to HTML</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          The general syntax is <code className="text-emerald-300">jupyter nbconvert --to FORMAT notebook.ipynb</code>. This command is run from your standard terminal, not inside the notebook cell.
        </p>

        <RunnablePythonCode
          code={`import os

print("$ pip install nbconvert")
print("Requirement already satisfied: nbconvert in c:\\\\users\\\\marionz\\\\miniconda3...\\n")

print("$ jupyter nbconvert --to html mynotebook.ipynb")
print("[NbConvertApp] Converting notebook mynotebook.ipynb to html")
print("[NbConvertApp] Writing 324152 bytes to mynotebook.html")
print("Success!")`}
          output={convertOutput}
        />
      </div>

      {/* 4. Interactive Quiz */}
      <div className="pt-4">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
          <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center gap-2">
            <HelpCircle size={16} className="text-emerald-400" />
            <h4 className="font-semibold text-white text-sm">Knowledge Check</h4>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-slate-300">
              Which of the following is <strong>not</strong> a supported output file format to which you can convert a given Notebook file?
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
                  <div key={idx} onClick={() => !qSubmitted && setQSelected(idx)} className={`p-3 border rounded-lg transition-colors flex items-center justify-between font-mono text-sm ${style}`}>
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
                {qSelected === qCorrectAnswer ? "Correct! While you can convert to HTML, PDF, Markdown, and LaTeX, Microsoft Word (.docx) is not natively supported by nbconvert." : "Incorrect. Try again! Look for the proprietary Microsoft format."}
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}