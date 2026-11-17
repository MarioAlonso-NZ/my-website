'use client';

import React, { useState } from 'react';
import Link from 'next/link'; import { LineChart, Package, BookOpen, Link as LinkIcon } from 'lucide-react';

export default function DataScienceCoursePage() {
    const [isAnacondaOpen, setIsAnacondaOpen] = useState(true); // Puedes dejarlo en true para que se abra por defecto al testear
    const [isAnacondaDemoOpen, setIsAnacondaDemoOpen] = useState(true); // Puedes dejarlo en true para que se abra por defecto al testear
    const [isWhatIsAnaconda, setIsWhatIsAnaconda] = useState(true)
    const [isAnacondaInstall, setIsAnacondaInstall] = useState(true)

    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans p-8 selection:bg-emerald-500/30">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header del Curso 3 ... (Mantenlo igual) ... */}
                <header className="space-y-4">
                    <Link href="/" className="text-xs font-mono text-emerald-400 hover:underline">
                        &larr; Back to Jop's Knowledge Arcade
                    </Link>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wide uppercase">
                        Problem Solving
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Algorithm Quest
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Learn to manage environments with Anaconda and analyze, manipulate, and visualize statistical data using industry-standard libraries.
                    </p>
                </header>

                {/* Contenedor Principal de Módulos */}
                <main className="space-y-8">

                    {/* Módulo 1: Anaconda */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-12">
                        <button
                            onClick={() => setIsAnacondaOpen(!isAnacondaOpen)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-base font-bold">
                                    1
                                </div>
                                <span className="text-xl font-bold text-white tracking-tight">Foundations</span>
                            </div>
                            <span
                                className="text-slate-400 text-sm transform transition-transform duration-200"
                                style={{ transform: isAnacondaOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                ▼
                            </span>
                        </button>

                        {/* {isAnacondaOpen && (

                        
                        )} */}
                    </div>

                </main>
            </div>
        </div>
    );
}