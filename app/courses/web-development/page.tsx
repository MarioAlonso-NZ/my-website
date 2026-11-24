'use client';

import React, { useState } from 'react';
import Link from 'next/link'; import { LineChart, Package, BookOpen, Link as LinkIcon } from 'lucide-react';
import CORSSimulator from './components/backend/CORSSimulator';
import OriginAndSecurityQuiz from './components/backend/OriginAndSecurityQuiz';

// #region Section 1
// #endregion

export default function DataScienceCoursePage() {
    // #region
    const [isWebDevOpen, setIsWebOpen] = useState(false)
    const [isCORSOpen, setIsCORSOpen] = useState(false)
    const [isQuizOpen, setIsQuizOpen] = useState(false)
    // #endregion

    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans p-8 selection:bg-emerald-500/30">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header del Curso 3 ... (Mantenlo igual) ... */}
                <header className="space-y-4">
                    <Link href="/" className="text-xs font-mono text-emerald-400 hover:underline">
                        &larr; Back to Jop's Knowledge Arcade
                    </Link>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wide uppercase">
                        Web Devlopment
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Backend
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Backend
                    </p>
                </header>

                {/* Contenedor Principal de Módulos */}
                <main className="space-y-8">

                    {/* Módulo 1: Anaconda */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-12">
                        <button
                            onClick={() => setIsWebOpen(!isWebDevOpen)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-base font-bold">
                                    1
                                </div>
                                <span className="text-xl font-bold text-white tracking-tight">Web Development</span>
                            </div>
                            <span
                                className="text-slate-400 text-sm transform transition-transform duration-200"
                                style={{ transform: isWebDevOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                ▼
                            </span>
                        </button>

                        {isWebDevOpen && (

                            <div className="p-6 space-y-6 bg-slate-950/40">

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsWebOpen(!isWebDevOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.1.</span>
                                            <span className="font-semibold text-white text-lg"></span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isWebDevOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isWebDevOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <CORSSimulator />
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 space-y-6 bg-slate-950/40">

                                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                        <button
                                            onClick={() => setIsQuizOpen(!isQuizOpen)}
                                            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-emerald-400 font-mono font-bold text-lg">1.1.</span>
                                                <span className="font-semibold text-white text-lg"></span>
                                            </div>
                                            <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                                ▼
                                            </span>
                                        </button>

                                        {isQuizOpen && (

                                            <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                                {/* Instanciamos nuestro nuevo componente aquí */}
                                                <OriginAndSecurityQuiz />
                                            </div>
                                        )}
                                    </div>

                                </div>

                            </div>

                        )}
                    </div>

                </main>
            </div>
        </div>
    );
}