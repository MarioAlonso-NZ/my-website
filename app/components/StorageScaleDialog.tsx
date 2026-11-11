"use client";

import React, { useState, useEffect } from "react";
import { Database, HardDrive, Server, Info, X } from "lucide-react";

export default function StorageScaleDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
      >
        <Info size={14} />
        View Size Scale
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          {/* 
            Added: flex flex-col max-h-[85vh] 
            This makes the modal take up at most 85% of the screen height
          */}
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header (Stays Fixed) */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Database className="text-cyan-400" size={20} />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Data Size Scale</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body (Scrollable) */}
            {/* Added: overflow-y-auto to make this section scrollable */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <p className="text-sm text-slate-400 mb-8">
                In computer science, data sizes scale by a factor of <strong className="text-cyan-400">1,024</strong> (not 1,000). This is why the Python code divides by 1024 to convert KB to MB.
              </p>

              {/* CLEAN VERTICAL TIMELINE */}
              <div className="relative border-l-2 border-slate-700/50 ml-5 space-y-8 pb-2">
                
                {/* Bytes */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-slate-400 shadow-sm">
                    <span className="text-xs font-bold">B</span>
                  </div>
                  <div className="ml-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <h3 className="font-semibold text-slate-200 text-sm">Bytes (B)</h3>
                    <p className="text-xs text-slate-400 mt-1">Base unit (e.g., a single character of text).</p>
                  </div>
                </div>

                {/* Kilobytes */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-green-400 shadow-sm">
                    <span className="text-xs font-bold">KB</span>
                  </div>
                  <div className="ml-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <h3 className="font-semibold text-slate-200 text-sm">Kilobytes (KB)</h3>
                    <p className="text-xs text-slate-400 mt-1">1 KB = <strong className="text-green-400">1,024</strong> Bytes. (e.g., a short email).</p>
                  </div>
                </div>

                {/* Megabytes */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-purple-400 shadow-sm">
                    <HardDrive size={16} />
                  </div>
                  <div className="ml-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <h3 className="font-semibold text-slate-200 text-sm">Megabytes (MB)</h3>
                    <p className="text-xs text-slate-400 mt-1">1 MB = <strong className="text-purple-400">1,024</strong> KB. (e.g., a high-res photo).</p>
                  </div>
                </div>

                {/* Gigabytes */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-orange-400 shadow-sm">
                    <Server size={16} />
                  </div>
                  <div className="ml-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <h3 className="font-semibold text-slate-200 text-sm">Gigabytes (GB)</h3>
                    <p className="text-xs text-slate-400 mt-1">1 GB = <strong className="text-orange-400">1,024</strong> MB. (e.g., an HD movie).</p>
                  </div>
                </div>

                {/* Terabytes (Added for extra scroll testing) */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-rose-400 shadow-sm">
                    <Server size={16} />
                  </div>
                  <div className="ml-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <h3 className="font-semibold text-slate-200 text-sm">Terabytes (TB)</h3>
                    <p className="text-xs text-slate-400 mt-1">1 TB = <strong className="text-rose-400">1,024</strong> GB. (e.g., a large hard drive).</p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Footer (Stays Fixed) */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end shrink-0">
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
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