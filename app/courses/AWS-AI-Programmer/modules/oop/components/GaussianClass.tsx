'use client';

import React, { useState } from 'react';
import { Type, Heading, Link as LinkIcon, Code2, Sigma, Play, Edit3, BookOpen } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css'; // Importante: CSS requerido para renderizar correctamente

export default function MarkdownCells() {
  const [isRendered, setIsRendered] = useState(true);

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Type className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Writing Narrative: Markdown Cells
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Markdown is a formatting syntax that allows you to include links, style text, and format math equations. As with code cells, you press <strong>Shift + Enter</strong> to render the Markdown into formatted text.
        </p>
      </div>

      {/* 2. Interactive Markdown Simulator */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden shadow-inner mb-8">
        <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <BookOpen size={14} className="text-emerald-400" /> Interactive Cell Simulator
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRendered(false)}
              className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold transition-colors ${!isRendered ? 'bg-slate-800 text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Edit3 size={14} /> Edit (Raw)
            </button>
            <button
              onClick={() => setIsRendered(true)}
              className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold transition-colors ${isRendered ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Play size={14} /> Shift + Enter (Render)
            </button>
          </div>
        </div>

        <div className="p-5 min-h-[160px] bg-[#1E1E1E]">
          {!isRendered ? (
            <div className="font-mono text-sm text-slate-300 whitespace-pre text-wrap">
              <span className="text-cyan-400">### Data Analysis Summary</span><br /><br />
              Based on the dataset, we found a **strong correlation**. You can view the full documentation at [Udacity's home page](https://www.udacity.com).<br /><br />
              To initialize the model, we used `import requests`.<br /><br />
              The normalization formula applied was:<br />
              <span className="text-amber-300">{"$$ y = \\frac{a}{b + c} $$"}</span>
            </div>
          ) : (
            <div className="prose prose-invert prose-sm max-w-none">
              <h3 className="text-xl font-bold text-white mb-3 mt-0">Data Analysis Summary</h3>
              <p className="mb-3">
                Based on the dataset, we found a <strong>strong correlation</strong>. You can view the full documentation at <a href="#" className="text-cyan-400 hover:underline">Udacity's home page</a>.
              </p>
              <p className="mb-3">
                To initialize the model, we used <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-300">import requests</code>.
              </p>
              <p className="mb-0">The normalization formula applied was:</p>
              {/* Aquí usamos react-katex para el bloque matemático */}
              <div className="text-center py-2 text-slate-200 text-lg">
                <BlockMath math="y = \frac{a}{b + c}" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Markdown Syntax Cheat Sheet */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          Markdown Syntax Cheat Sheet
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Headers */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
              <Heading size={16} />
              <span>Headers (#)</span>
            </div>
            <p className="text-xs text-slate-400 font-sans mb-2">Use the pound/hash symbol before text. The number of symbols dictates the header level (1-6).</p>
            <code className="block bg-slate-900 px-2 py-1 rounded text-slate-300 font-mono text-xs"># Header 1 (h1)</code>
            <code className="block bg-slate-900 px-2 py-1 rounded text-slate-300 font-mono text-xs">## Header 2 (h2)</code>
          </div>

          {/* Emphasis */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
              <Type size={16} />
              <span>Emphasis (* or _)</span>
            </div>
            <p className="text-xs text-slate-400 font-sans mb-2">Wrap text in asterisks or underscores to add styling.</p>
            <div className="flex gap-2">
              <code className="bg-slate-900 px-2 py-1 rounded text-slate-300 font-mono text-xs">*italic*</code>
              <code className="bg-slate-900 px-2 py-1 rounded text-slate-300 font-mono text-xs">**bold**</code>
            </div>
          </div>

          {/* Links */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
              <LinkIcon size={16} />
              <span>Links [text](url)</span>
            </div>
            <p className="text-xs text-slate-400 font-sans mb-2">Enclose the clickable text in square brackets, followed immediately by the URL in parentheses.</p>
            <code className="block bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono text-xs">[Udacity](https://www.udacity.com)</code>
          </div>

          {/* Code */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
              <Code2 size={16} />
              <span>Code Blocks (` ` `)</span>
            </div>
            <p className="text-xs text-slate-400 font-sans mb-2">Use single backticks for `inline code` and triple backticks for multi-line blocks.</p>
            <code className="block bg-slate-900 px-2 py-1 rounded text-amber-300 font-mono text-xs">`import pandas as pd`</code>
          </div>

        </div>
      </div>

      {/* 4. Math Expressions (LaTeX) */}
      <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-4 mt-4">
        <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
          <Sigma size={16} />
          <span>Math Expressions (LaTeX & MathJax)</span>
        </div>
        <p className="text-xs text-slate-400 font-sans leading-relaxed">
          Jupyter uses MathJax to render LaTeX symbols. Wrap LaTeX code in single dollar signs <code className="text-slate-200 bg-slate-800 px-1 rounded">$y = mx + b$</code> for inline equations like this: <span className="text-rose-300 font-bold ml-1"><InlineMath math="y = mx + b" /></span>, or double dollar signs <code>$$ ... $$</code> to center it on its own block line. This is heavily used by data scientists to explain statistical models.
        </p>

        {/* Ejemplo adicional de BlockMath para darle más sabor a Data Science */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex justify-center text-rose-200">
          <BlockMath math="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" />
        </div>
      </div>

    </div>
  );
}