'use client';

import React, { useState } from 'react';
import Link from 'next/link'; import { LineChart, Package, BookOpen, Link as LinkIcon } from 'lucide-react';

// #region Section 1
import AnacondaDemonstration from '@/app/courses/data-science/components/AnacondaDemonstration';
import WhatIsAnaconda from '@/app/courses/data-science/components/WhatIsAnaconda'; // Importa el nuevo componente
import InstallingAnaconda from '@/app/courses/data-science/components/InstallingAnaconda';
import ManagingPackages from '@/app/courses/data-science/components/ManagingPackages';
import ManagingEnvironments from '@/app/courses/data-science/components/ManagingEnvironments';
import MoreEnvironmentActions from '@/app/courses/data-science/components/MoreEnvironmentActions';
// #endregion

// #region Section 2
import WhatIsJupyterNotebook from './components/WhatIsJupyterNotebook';
import InstallingJupyter from './components/InstallingJupyter';
import LaunchingNotebookServer from './components/LaunchingNotebookServer';
import NotebookInterface from './components/NotebookInterface';
import MarkdownCells from './components/MarkdownCells';
import MagicKeywords from './components/MagicKeywords';
import ConvertingNotebooks from './components/ConvertingNotebooks';
import JupyterWorkspaceOverview from './components/JupyterWorkspaceOverview';
// #endregion

// #region Section 3
import NumpyInstructorsOverview from './components/NumpyInstructorsOverview';
import WhyUseNumpy from './components/WhyUseNumpy';
import CreatingSavingNdarrays from './components/CreatingSavingNdarrays';
import BuiltinFunctionsNdarrays from './components/BuiltinFunctionsNdarrays';
import AccessDeleteInsertNdarrays from './components/AccessDeleteInsertNdarrays';
import SlicingNdarrays from './components/SlicingNdarrays';
import BooleanSetSortNdarrays from './components/BooleanSetSortNdarrays';
import ArithmeticBroadcastingNdarrays from './components/ArithmeticBroadcastingNdarrays';
import NumpyGlossary from './components/NumpyGlossary';
import NumpyMiniProject from './components/NumpyMiniProject';
import MeanNormalizationDataSeparation from './components/MeanNormalizationDataSeparation';
// #endregion

// #region section 4
import IntroductionToPandas from './components/pandas/IntroductionToPandas';
import CreatingPandasSeries from './components/pandas/CreatingPandasSeries';
import AccessingDeletingPandasSeries from './components/pandas/AccessingDeletingPandasSeries';
import ArithmeticOperationsPandasSeries from './components/pandas/ArithmeticOperationsPandasSeries';
import SunPlanetsPractice from './components/pandas/SunPlanetsPractice';
// #endregion

export default function DataScienceCoursePage() {
    // #region First section
    const [isAnacondaOpen, setIsAnacondaOpen] = useState(false); // Puedes dejarlo en false para que se abra por defecto al testear
    const [isAnacondaDemoOpen, setIsAnacondaDemoOpen] = useState(false); // Puedes dejarlo en false para que se abra por defecto al testear
    const [isWhatIsAnaconda, setIsWhatIsAnaconda] = useState(false)
    const [isAnacondaInstall, setIsAnacondaInstall] = useState(false)
    const [isPackageManagerOpen, setIsPackageManagerOpen] = useState(false)
    const [isEnvManagerOpen, setIsEnvManagerOpen] = useState(false)
    const [isMoreEnvManager, setIsMoreEnvManager] = useState(false)
    // #endregion

    // #region Second section
    const [isSection2Open, setIsSection2Open] = useState(false)
    const [isWhatIsJNOpen, setIsWhatIsJNOpen] = useState(false)
    const [isInstallJupyter, setIsInstallJupyter] = useState(false)
    const [isLaunchNotebookServerOpen, setIsLaunchNotebookServerOpen] = useState(false)
    const [isNotebookInterfaceOpen, setIsNotebookInterfaceOpen] = useState(false)
    const [isMarkdownCellsOpen, setIsMarkdownCellsOpen] = useState(false)
    const [isMargicKeywordsOpen, setIsMagicKeywordsOpen] = useState(false)
    const [isNotebookConvertOpen, setIsNotebookConvertOpen] = useState(false)
    const [isJupyterWorkspaceOverviewOpen, setIsJupyterWorkspaceOverviewOpen] = useState(false)
    // #endregion

    // #region Third section
    const [isNumpyOpen, setIsNumpyOpen] = useState(false)
    const [isNumpyInstructorOpen, setIsNumpyInstructorOpen] = useState(false)
    const [isWhyUseNumpyOpen, setIsWhyUseNumpyOpen] = useState(false)
    const [isCreatingSavingNdarraysOpen, setIsCreatingSavingNdarraysOpen] = useState(false)
    const [isBuiltinOpen, setIsBuiltinOpen] = useState(false)
    const [isAccessDeleteInsertNdarraysOpen, setIsAccessDeleteInsertNdarraysOpen] = useState(false)
    const [isSlicingOpen, setIsSlicingOpen] = useState(false)
    const [isBoolOpen, setIsBoolOpen] = useState(false)
    const [isArithmeticBroadcastingNdarraysOpen, setIsArithmeticBroadcastingNdarraysOpen] = useState(false)
    const [isGlossaryOpen, setIsGlossaryOpen] = useState(false)
    const [isProjectOpen, setIsProjectOpen] = useState(false)
    const [isMeanNormOpen, setIsMeanNormOpen] = useState(false)
    // #endregion

    // #region Fourth section
    const [isPandasOpen, setIsPandasOpen] = useState(false)
    const [isPandasIntroOpen, setIsPandasIntroOpen] = useState(false)
    const [isPandasSeriesOpen, setIsPandasSeriesOpen] = useState(false)
    const [isAccessDelOpen, setIsAccessDelOpen] = useState(false)
    const [isArithmeticOpsOpen, setIsArithmeticOpsOpen] = useState(false)
    const [isSunPlanetsOpen, setIsSunPlanetsOpen] = useState(false)
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

                                {/* 1.3 Installing Anaconda */}
                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsAnacondaInstall(!isAnacondaInstall)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.3.</span>
                                            <span className="font-semibold text-white text-lg">Anaconda Installation</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isAnacondaInstall ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isAnacondaInstall && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <InstallingAnaconda />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsPackageManagerOpen(!isPackageManagerOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.4.</span>
                                            <span className="font-semibold text-white text-lg">Managing Packages</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isPackageManagerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isPackageManagerOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <ManagingPackages />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsAnacondaInstall(!isAnacondaInstall)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.3.</span>
                                            <span className="font-semibold text-white text-lg">Anaconda Installation</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isAnacondaInstall ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isAnacondaInstall && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <InstallingAnaconda />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsEnvManagerOpen(!isEnvManagerOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.4.</span>
                                            <span className="font-semibold text-white text-lg">Managing Environments</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isEnvManagerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isEnvManagerOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <ManagingEnvironments />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsMoreEnvManager(!isMoreEnvManager)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.5.</span>
                                            <span className="font-semibold text-white text-lg">More about managing Environments</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isMoreEnvManager ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isMoreEnvManager && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <MoreEnvironmentActions />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Módulo 2: Jupyter */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-12">
                        <button
                            onClick={() => setIsSection2Open(!isSection2Open)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-base font-bold">
                                    2
                                </div>
                                <span className="text-xl font-bold text-white tracking-tight">Jupyter Lab</span>
                            </div>
                            <span
                                className="text-slate-400 text-sm transform transition-transform duration-200"
                                style={{ transform: isSection2Open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                ▼
                            </span>
                        </button>

                        {isSection2Open && (

                            <div className="p-6 space-y-6 bg-slate-950/40">

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsWhatIsJNOpen(!isWhatIsJNOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.1.</span>
                                            <span className="font-semibold text-white text-lg">What is Jupyter Notebook</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isWhatIsJNOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isWhatIsJNOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <WhatIsJupyterNotebook />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsInstallJupyter(!isInstallJupyter)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.2.</span>
                                            <span className="font-semibold text-white text-lg">Install Jupyter Notebook</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isInstallJupyter ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isInstallJupyter && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <InstallingJupyter />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsLaunchNotebookServerOpen(!isLaunchNotebookServerOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.3.</span>
                                            <span className="font-semibold text-white text-lg">Launching a Notebook Server</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isLaunchNotebookServerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isLaunchNotebookServerOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <LaunchingNotebookServer />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsLaunchNotebookServerOpen(!isLaunchNotebookServerOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.3.</span>
                                            <span className="font-semibold text-white text-lg">Launching a Notebook Server</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isLaunchNotebookServerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isLaunchNotebookServerOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <LaunchingNotebookServer />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsNotebookInterfaceOpen(!isNotebookInterfaceOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.5.</span>
                                            <span className="font-semibold text-white text-lg">Notebook Interface</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isNotebookInterfaceOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isNotebookInterfaceOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <NotebookInterface />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsMarkdownCellsOpen(!isMarkdownCellsOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.6.</span>
                                            <span className="font-semibold text-white text-lg">Markdown cells</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isMarkdownCellsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isMarkdownCellsOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <MarkdownCells />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsMagicKeywordsOpen(!isMargicKeywordsOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.6.</span>
                                            <span className="font-semibold text-white text-lg">Magic Keywords</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isMargicKeywordsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isMargicKeywordsOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <MagicKeywords />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsNotebookConvertOpen(!isNotebookConvertOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.8.</span>
                                            <span className="font-semibold text-white text-lg">Converting a Slideshow</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isNotebookConvertOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isNotebookConvertOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <ConvertingNotebooks />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsJupyterWorkspaceOverviewOpen(!isJupyterWorkspaceOverviewOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">2.9.</span>
                                            <span className="font-semibold text-white text-lg">Jupyter Workspace Overview</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isJupyterWorkspaceOverviewOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isJupyterWorkspaceOverviewOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <JupyterWorkspaceOverview />
                                        </div>
                                    )}
                                </div>

                            </div>
                        )}
                    </div>

                    {/* Módulo 3: Numpy */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-12">
                        <button
                            onClick={() => setIsNumpyOpen(!isNumpyOpen)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-base font-bold">
                                    3
                                </div>
                                <span className="text-xl font-bold text-white tracking-tight">Numpy</span>
                            </div>
                            <span
                                className="text-slate-400 text-sm transform transition-transform duration-200"
                                style={{ transform: isNumpyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                ▼
                            </span>
                        </button>

                        {isNumpyOpen && (

                            <div className="p-6 space-y-6 bg-slate-950/40">
                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsNumpyInstructorOpen(!isNumpyInstructorOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">1.1.</span>
                                            <span className="font-semibold text-white text-lg">Numpy Instructors</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isNumpyInstructorOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isNumpyInstructorOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <NumpyInstructorsOverview />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsWhyUseNumpyOpen(!isWhyUseNumpyOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.2.</span>
                                            <span className="font-semibold text-white text-lg">Why to use numpy</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isWhyUseNumpyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isWhyUseNumpyOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <WhyUseNumpy />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsCreatingSavingNdarraysOpen(!isCreatingSavingNdarraysOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.3.</span>
                                            <span className="font-semibold text-white text-lg">Creating and Saving Ndarrays</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isCreatingSavingNdarraysOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isCreatingSavingNdarraysOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <CreatingSavingNdarrays />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsAccessDeleteInsertNdarraysOpen(!isAccessDeleteInsertNdarraysOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.6.</span>
                                            <span className="font-semibold text-white text-lg">Delete, Insert and append ndarrays</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isAccessDeleteInsertNdarraysOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isAccessDeleteInsertNdarraysOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <AccessDeleteInsertNdarrays />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsBuiltinOpen(!isBuiltinOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.6.</span>
                                            <span className="font-semibold text-white text-lg">Ndarrays Built-in functions</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isBuiltinOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isBuiltinOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <BuiltinFunctionsNdarrays />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsAccessDeleteInsertNdarraysOpen(!isAccessDeleteInsertNdarraysOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.6.</span>
                                            <span className="font-semibold text-white text-lg">Delete, Insert and append ndarrays</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isAccessDeleteInsertNdarraysOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isAccessDeleteInsertNdarraysOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <AccessDeleteInsertNdarrays />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsSlicingOpen(!isSlicingOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.10.</span>
                                            <span className="font-semibold text-white text-lg">Slicing ndarrays</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isSlicingOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isSlicingOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <SlicingNdarrays />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsBoolOpen(!isBoolOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.12.</span>
                                            <span className="font-semibold text-white text-lg">Sort</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isBoolOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isBoolOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <BooleanSetSortNdarrays />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsArithmeticBroadcastingNdarraysOpen(!isArithmeticBroadcastingNdarraysOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.13.</span>
                                            <span className="font-semibold text-white text-lg">Broadcasting</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isArithmeticBroadcastingNdarraysOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isArithmeticBroadcastingNdarraysOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <ArithmeticBroadcastingNdarrays />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsGlossaryOpen(!isGlossaryOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.14.</span>
                                            <span className="font-semibold text-white text-lg">Glossary</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isGlossaryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isGlossaryOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <NumpyGlossary />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsProjectOpen(!isProjectOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.15.</span>
                                            <span className="font-semibold text-white text-lg">Project</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isProjectOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isProjectOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <NumpyMiniProject />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsMeanNormOpen(!isMeanNormOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">3.17.</span>
                                            <span className="font-semibold text-white text-lg">Project</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isMeanNormOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isMeanNormOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <MeanNormalizationDataSeparation />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-12">
                        <button
                            onClick={() => setIsPandasOpen(!isPandasOpen)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-base font-bold">
                                    4
                                </div>
                                <span className="text-xl font-bold text-white tracking-tight">Pandas</span>
                            </div>
                            <span
                                className="text-slate-400 text-sm transform transition-transform duration-200"
                                style={{ transform: isPandasOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                ▼
                            </span>
                        </button>

                        {isPandasOpen && (
                            <div className="p-6 space-y-6 bg-slate-950/40">

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsPandasIntroOpen(!isPandasIntroOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">4.1.</span>
                                            <span className="font-semibold text-white text-lg">Pandas Intro</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isPandasIntroOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isPandasIntroOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <IntroductionToPandas />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsPandasSeriesOpen(!isPandasSeriesOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">4.2.</span>
                                            <span className="font-semibold text-white text-lg">Pandas Series</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isPandasSeriesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isPandasSeriesOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <CreatingPandasSeries />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsAccessDelOpen(!isAccessDelOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">4.3.</span>
                                            <span className="font-semibold text-white text-lg">Access and Deleting Pandas Series</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isAccessDelOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isAccessDelOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <AccessingDeletingPandasSeries />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsArithmeticOpsOpen(!isArithmeticOpsOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">4.4.</span>
                                            <span className="font-semibold text-white text-lg">Arihtmetic operations</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isArithmeticOpsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isArithmeticOpsOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <ArithmeticOperationsPandasSeries />
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                                    <button
                                        onClick={() => setIsSunPlanetsOpen(!isSunPlanetsOpen)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-emerald-400 font-mono font-bold text-lg">4.5.</span>
                                            <span className="font-semibold text-white text-lg">Sun planets practice</span>
                                        </div>
                                        <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isSunPlanetsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            ▼
                                        </span>
                                    </button>

                                    {isSunPlanetsOpen && (

                                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                            {/* Instanciamos nuestro nuevo componente aquí */}
                                            <SunPlanetsPractice />
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