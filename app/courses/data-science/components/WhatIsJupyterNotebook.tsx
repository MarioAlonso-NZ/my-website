'use client';

import React from 'react';
import { BookOpen, Code2, LineChart, Cpu, Globe, Server, ArrowRightLeft } from 'lucide-react';

export default function WhatIsJupyterNotebook() {
  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <BookOpen className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            What is a Jupyter Notebook?
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          A powerful web application that allows you to combine explanatory narrative text, mathematical equations, executable code, and rich visualizations all in a single, easily sharable document.
        </p>
      </div>

      {/* 2. Literate Programming & The Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Literate Programming */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <BookOpen size={16} />
            <span>Literate Programming</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Instead of writing code for computers and hiding documentation in separate files, notebooks allow you to write a <strong>human-readable narrative alongside the code</strong>. It's like writing an interactive book where the math and charts actually run.
          </p>
          <div className="flex gap-2 text-xs text-slate-500 font-mono bg-slate-900 p-2 rounded-lg border border-slate-800">
            <Code2 size={14} className="text-emerald-400" /> + <LineChart size={14} className="text-cyan-400" /> = Interactive Data
          </div>
        </div>

        {/* The Acronym */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
            <Globe size={16} />
            <span>Language Agnostic (Ju-Pyt-R)</span>
          </div>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Originally called "IPython Notebooks", the project was renamed to <strong>Jupyter</strong> because it evolved to support multiple languages beyond Python. The name is a combination of its three core languages:
          </p>
          <ul className="text-xs font-mono text-slate-400 space-y-1 bg-slate-900 p-2 rounded-lg border border-slate-800">
            <li><span className="text-emerald-400 font-bold">Ju</span>lia</li>
            <li><span className="text-cyan-400 font-bold">Pyt</span>hon</li>
            <li><span className="text-purple-400 font-bold">R</span></li>
          </ul>
        </div>
      </div>

      {/* 3. The Architecture (Visual Flow) */}
      <div className="space-y-4 pt-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          How Notebooks Work: The Architecture
        </span>
        <p className="text-xs text-slate-400 font-sans">
          The code you type in the browser doesn't run in the browser. It is sent to a backend "Kernel" that executes it and returns the result.
        </p>

        {/* Diagrama interactivo/visual */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-slate-950 border border-slate-800 p-6 rounded-xl gap-4">
          
          {/* Web App */}
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Globe size={24} />
            </div>
            <span className="text-sm font-bold text-white">Browser (Web App)</span>
            <span className="text-xs text-slate-500">Where you type code and view plotted charts.</span>
          </div>

          <ArrowRightLeft className="text-slate-600 hidden md:block" size={24} />

          {/* Server */}
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3 text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Server size={24} />
            </div>
            <span className="text-sm font-bold text-white">Notebook Server</span>
            <span className="text-xs text-slate-500">Saves your <code className="text-slate-400">.ipynb</code> file and routes messages.</span>
          </div>

          <ArrowRightLeft className="text-slate-600 hidden md:block" size={24} />

          {/* Kernel */}
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Cpu size={24} />
            </div>
            <span className="text-sm font-bold text-white">Kernel (IPython)</span>
            <span className="text-xs text-slate-500">The background engine that actually executes the Python code.</span>
          </div>

        </div>
      </div>

    </div>
  );
}