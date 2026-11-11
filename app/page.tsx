import React from 'react';
import Link from 'next/link';
import { LineChart } from 'lucide-react';

export default function ArcadeHomeCards() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16 max-w-5xl mx-auto font-sans flex flex-col justify-center">
      {/* Cabecera */}
      <div className="text-center mb-12">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-widest font-semibold border border-cyan-500/20">
          Jop's Knowledge Arcade
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4">
          Elige tu camino de aprendizaje
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
          Selecciona una tecnología para explorar sus módulos, notas y conceptos interactivos.
        </p>
      </div>

      {/* Contenedor de las dos tarjetas (React y Python) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">

        {/* TARJETA 1: REACT */}
        <Link href="/courses/react" className="group">
          <div className="bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-3xl p-8 shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-cyan-500/10 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl font-bold mb-6 border border-cyan-500/20 group-hover:scale-110 transition">
              ⚛️
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
              React
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Componentes, hooks, renderizado interactivo y arquitectura frontend moderna.
            </p>
            <span className="mt-auto text-xs font-mono text-cyan-400 font-semibold flex items-center">
              Explorar módulos &rarr;
            </span>
          </div>
        </Link>

        {/* TARJETA 2: PYTHON */}
        <Link href="/courses/AWS-AI-Programmer" className="group">
          <div className="bg-slate-900 border border-slate-800 hover:border-purple-500 rounded-3xl p-8 shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-purple-500/10 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-3xl font-bold mb-6 border border-purple-500/20 group-hover:scale-110 transition">
              🐍
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition">
              Python
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Fundamentos de programación, estructuras de datos, IA y machine learning con Udacity.
            </p>
            <span className="mt-auto text-xs font-mono text-purple-400 font-semibold flex items-center">
              Explorar módulos &rarr;
            </span>
          </div>
        </Link>

        {/* Tarjeta 3: Data Science (Numpy, Pandas, Matplotlib) */}
        {/* Added w-full and h-full to fit seamlessly into responsive grids */}
        <div className="w-full h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-colors flex flex-col items-center text-center group">

          <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
            <LineChart className="text-emerald-400" size={32} />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Data Science</h2>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
            Data analysis, manipulation, and statistical visualization using Numpy, Pandas, Matplotlib, and Seaborn with Udacity.
          </p>

          <a
            href="/courses/data-science"
            className="text-emerald-400 font-mono text-sm font-semibold hover:text-emerald-300 flex items-center gap-2"
          >
            Explore modules <span className="text-lg">→</span>
          </a>
        </div>

      </div>
    </main>
  );
}