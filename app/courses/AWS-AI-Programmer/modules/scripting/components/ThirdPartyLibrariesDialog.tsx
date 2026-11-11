'use client';

import React, { useState, useEffect } from 'react';
import { Package, Terminal, FileCode, CheckCircle2, X, ExternalLink, Cpu, Globe, BarChart2 } from 'lucide-react';

export default function ThirdPartyLibrariesDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const popularLibraries = [
    { name: 'NumPy', category: 'Data Science / AI', desc: 'Fundamental package for scientific computing with N-dimensional arrays and linear algebra.' },
    { name: 'pandas', category: 'Data Science / AI', desc: 'High-performance data manipulation, Series, and DataFrames.' },
    { name: 'Matplotlib / ggplot', category: 'Data Visualization', desc: '2D plotting libraries producing publication-quality figures and visual analytics.' },
    { name: 'requests', category: 'Web & APIs', desc: 'Simple, elegant HTTP library for sending requests to web services and APIs.' },
    { name: 'Beautiful Soup', category: 'Web Scraping', desc: 'HTML and XML parser used to extract structured data from web pages.' },
    { name: 'Flask / Django', category: 'Web Frameworks', desc: 'Lightweight (Flask) and full-featured (Django) frameworks for backend applications and APIs.' },
    { name: 'pytest', category: 'Testing', desc: 'Robust testing framework extending Python assertions and test fixtures.' },
    { name: 'Pillow', category: 'Computer Vision', desc: 'Python Imaging Library adding image loading, manipulation, and transformations.' },
    { name: 'IPython', category: 'Environment', desc: 'Enhanced interactive Python shell and kernel foundation for Jupyter Notebooks.' }
  ];

  return (
    <>
      {/* Botón Disparador */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
      >
        <Package size={14} />
        Third-Party Libraries & pip Guide
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Package className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    Third-Party Libraries & Package Management
                  </h2>
                  <p className="text-xs text-slate-400">
                    Installing packages with pip, pinning dependencies, and standard AI ecosystem libraries
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              
              {/* 1. pip & Anaconda Overview */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Package Managers: pip and Anaconda
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Python includes <code className="text-cyan-300 font-mono">pip</code> by default to download and install packages from PyPI (Python Package Index). Anaconda is a common alternative geared toward data science that manages both Python and non-Python system dependencies.
                </p>

                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono text-xs">
                  <div className="text-slate-400 font-sans">Install any package by name in terminal:</div>
                  <pre className="text-cyan-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
pip install package_name
# Example: pip install numpy pandas requests
                  </pre>
                </div>
              </div>

              {/* 2. requirements.txt Specification */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
                  Managing Dependencies with requirements.txt
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pinning versions guarantees reproducibility across team environments and cloud deployments, avoiding breaking changes between releases.
                </p>

                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300 font-sans">
                    <FileCode size={14} className="text-purple-400" />
                    <span>Sample requirements.txt:</span>
                  </div>
                  <pre className="text-purple-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
beautifulsoup4==4.5.1
bs4==0.0.1
pytz==2016.7
requests==2.11.1
numpy&gt;=1.24.0
pandas&gt;=2.0.0
                  </pre>
                  <div className="text-slate-400 font-sans pt-1">Install all dependencies at once:</div>
                  <pre className="text-emerald-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
pip install -r requirements.txt
                  </pre>
                </div>
              </div>

              {/* 3. Essential Third-Party Packages Table */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  Essential AI & Data Engineering Packages
                </span>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <th className="py-2 px-3">Package</th>
                        <th className="py-2 px-3">Category</th>
                        <th className="py-2 px-3">Primary Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {popularLibraries.map((lib) => (
                        <tr key={lib.name} className="hover:bg-slate-900/30 transition">
                          <td className="py-2 px-3 text-cyan-400 font-bold">{lib.name}</td>
                          <td className="py-2 px-3 text-slate-400">{lib.category}</td>
                          <td className="py-2 px-3 text-slate-300">{lib.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}