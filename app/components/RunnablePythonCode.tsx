"use client";

import React, { useState } from "react";
import { Play, Loader2 } from "lucide-react";

type RunnableProps = {
  code: string;
  output: string;
};

export default function RunnablePythonCode({ code, output }: RunnableProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    // Simulate a tiny delay to make it feel like it's compiling
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 800);
  };

  return (
    <div className="space-y-2">
      {/* The Code Block */}
      <div className="relative">
        <pre className="bg-[#121824] border border-slate-800 rounded-t-xl p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
          {code}
        </pre>
        
        {/* The Run Button */}
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="absolute top-2 right-2 flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded transition-colors border border-slate-700 disabled:opacity-50"
        >
          {isRunning ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Play size={14} className="text-green-400" />
          )}
          {isRunning ? "Compiling..." : "Run Code"}
        </button>
      </div>

      {/* The Output Console */}
      {hasRun && (
        <div className="bg-black/50 border border-slate-800 border-t-0 rounded-b-xl p-4 font-mono text-xs text-slate-300">
          <div className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider font-bold">Console Output</div>
          <div className="text-green-400 whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </div>
  );
}