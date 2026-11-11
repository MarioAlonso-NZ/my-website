'use client';

import React from 'react';

export default function DataStructuresIntro() {
  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
      
      {/* Introducción */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-base"># Introduction to Data Structures</h3>
        <p className="text-xs text-slate-400">
          Data structures are containers or collections of data that organize and group data types together in different ways[: 5]. We can think of data structures as file folders that have organized files of data inside them[: 5].
        </p>
      </div>

      {/* Por qué los necesitamos (Ejemplo del NASDAQ / Vanguard) */}
      <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">Why Do We Need Data Structures?</h4>
        <p className="text-xs text-slate-300">
          Imagine We own stock in Microsoft and want to store its ticker symbol:
        </p>
        <pre className="bg-[#121824] border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
{`microsoft = "MSFT"
print(microsoft)  # Output: MSFT`}
        </pre>
        <p className="text-xs text-slate-400 leading-relaxed">
          Now imagine We manage an index fund like the <a href="https://institutional.vanguard.com/investments/product-details/fund/0033" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Vanguard Institutional Index Fund</a> which holds stock for over 500 companies[: 5, 6]. Creating 500+ individual string variables is <span className="text-rose-400 font-semibold">not ideal</span>[: 5]. 
        </p>
        <p className="text-xs text-slate-300 font-semibold">
          This is where data structures like <span className="text-cyan-400">Lists</span> come to the rescue!
        </p>
      </div>

    </div>
  );
}