'use client';

import React, { useState } from 'react';
import Link from 'next/link'; import { LineChart, Package, BookOpen, Link as LinkIcon } from 'lucide-react';
import AnacondaDemonstration from '@/app/courses/data-science/components/AnacondaDemonstration';
import WhatIsAnaconda from '@/app/courses/data-science/components/WhatIsAnaconda'; // Importa el nuevo componente

export default function DataScienceCoursePage() {
    const [isAnacondaOpen, setIsAnacondaOpen] = useState(true); // Puedes dejarlo en true para que se abra por defecto al testear
    const [isAnacondaDemoOpen, setIsAnacondaDemoOpen] = useState(true); // Puedes dejarlo en true para que se abra por defecto al testear
    const [isWhatIsAnaconda, setIsWhatIsAnaconda] = useState(true)

    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans p-8 selection:bg-emerald-500/30">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header del Curso 3 ... (Mantenlo igual) ... */}
                <header className="space-y-4">
                    <Link href="/" className="text-xs font-mono text-emerald-400 hover:underline">
                        &larr; Back to Jop's Knowledge Arcade
                    </Link>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wide uppercase">
                        Course 3 of 5
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Numpy, Pandas, Matplotlib
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
                                <span className="text-xl font-bold text-white tracking-tight">Anaconda</span>
                            </div>
                            <span
                                className="text-slate-400 text-sm transform transition-transform duration-200"
                                style={{ transform: isAnacondaOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                ▼
                            </span>
                        </button>

                        {isAnacondaOpen && (

                            <div className="p-6 space-y-6 bg-slate-950/40">

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsAnacondaDemoOpen(!isAnacondaDemoOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.1.</span>
                                            <span className="font-semibold text-white text-lg">Anaconda Demonstration</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isAnacondaDemoOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isAnacondaDemoOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <AnacondaDemonstration />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsWhatIsAnaconda(!isWhatIsAnaconda)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.2.</span>
                                            <span className="font-semibold text-white text-lg">What is Anaconda</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isWhatIsAnaconda ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isWhatIsAnaconda && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <WhatIsAnaconda />
                                        </div>
                                    )}
                                </div>


                            </div>
                        )}
                    </div>

                </main>
            </div>
        </div>
    );
}