'use client';

import React from 'react';
import { Database, Users, BrainCircuit, Rocket } from 'lucide-react';

export default function NumpyInstructorsOverview() {
  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Header: What is NumPy? */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Database className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Introduction to NumPy
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Python offers many libraries to work with, one of which is <strong>NumPy</strong>. It provides highly optimized support for large amounts of multidimensional data and mathematical operations, which serves as the foundation for almost all other data science tools.
        </p>
      </div>

      {/* 2. Meet the Instructors */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2 flex items-center gap-2">
          <Users size={16} /> Meet Your Instructors
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Instructor: Juno Lee */}
          <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <BrainCircuit size={80} />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg">
                JL
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Juno Lee</h4>
                <span className="text-xs text-cyan-400 font-mono">Data Scientist</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed relative z-10">
              Juno specializes in building neural networks to analyze and categorize product images. She has extensive experience creating recommendation systems to personalize shopping experiences and developing tools to generate deep insights into user behavior.
            </p>
          </div>

          {/* Instructor: Juan Delgado */}
          <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Rocket size={80} />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg">
                JD
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Juan Delgado</h4>
                <span className="text-xs text-purple-400 font-mono">Computational Physicist</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed relative z-10">
              Holding a Masters in Astronomy, Juan previously worked at NASA developing space instruments. He brings deep expertise in writing high-performance software to analyze massive amounts of scientific data using advanced machine learning techniques.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}