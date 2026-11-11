'use client';

// #region Section 1
import React, { useState } from 'react';
import Link from 'next/link';
import ArithmeticOperators from '@/app/components/ArithmeticOperators';
import ArithmeticOperatorsExercise from '@/app/components/ArithmeticOperatorsExercise';
import VariablesAndAssignment from '@/app/components/VariablesAndAssignment';
import VariablesAndAssignmentExercise from '@/app/components/VariablesAndAssignmentExercise';
import BooleansAndComparisons from '@/app/components/BooleansAndComparisons';
import StringMethods from '@/app/components/StringMethods';
import StringSplitAndSentiment from '@/app/components/StringSplitAndSentiment';
import DataStructuresIntro from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/DataStructuresIntro';
// #endregion

// #region Section 2
import ListsAndMembership from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/ListsAndMembership';
import MutabilityAndOrder from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/MutabilityAndOrder';
import ListMethods from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/ListMethods';
import Tuples from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/Tuples';
import Sets from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/Sets';
import Dictionaries from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/Dictionaries';
import DictionariesExercise from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/DictionariesExercise';
import CompoundDataStructures from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/CompoundDataStructures';
import PracticeAIDataStructures from '@/app/courses/AWS-AI-Programmer/modules/data-structures/components/PracticeAIDataStructures';
// #endregion

// #region Section 3
import ForLoops from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/ForLoops';
import AIForLoopsQuiz from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/AIForLoopsQuiz';
import IteratingDictionaries from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/IteratingDictionaries';
import IteratingDictionariesQuiz from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/IteratingDictionariesQuiz';
import WhileLoopsOptimization from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/WhileLoopsOptimization';
import MoreWhileLoopsQuiz from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/MoreWhileLoopsQuiz';
import BreakContinue from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/BreakContinue';
import EarlyStoppingQuiz from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/EarlyStoppingQuiz';
import TweetFeatureSummary from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/TweetFeatureSummary';
import ZipAndEnumerate from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/ZipAndEnumerate';
import ZipEnumerateQuiz from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/ZipEnumerateQuiz';
import ListComprehensions from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/ListComprehensions';
import AIListComprehensionsQuiz from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/AIListComprehensionsQuiz';
import OscarPracticeQuestions from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/OscarPracticeQuestions';
import MorePracticeQuestions from '@/app/courses/AWS-AI-Programmer/modules/control-flow/components/MorePracticeQuestions';
// #endregion

// #region Section 4
import VariableScope from '@/app/courses/AWS-AI-Programmer/modules/functions/components/VariableScope';
import DocumentationQuiz from '@/app/courses/AWS-AI-Programmer/modules/functions/components/DocumentationQuiz';
import LambdaExpressions from '@/app/courses/AWS-AI-Programmer/modules/functions/components/LambdaExpressions';
import AILambdaQuiz from '@/app/courses/AWS-AI-Programmer/modules/functions/components/AILambdaQuiz';
// #endregion

// #region Section 5
import ErrorsAndExceptions from '@/app/courses/AWS-AI-Programmer/modules/scripting/components/ErrorsAndExceptions';
import HandlingErrors from '@/app/courses/AWS-AI-Programmer/modules/scripting/components/HandlingErrors';
import ReadingAndWritingFiles from '@/app/courses/AWS-AI-Programmer/modules/scripting/components/ReadingAndWritingFiles';
import ReadingWritingFilesQuiz from '@/app/courses/AWS-AI-Programmer/modules/scripting/components/ReadingWritingFilesQuiz';
import ImportingLocalScripts from '@/app/courses/AWS-AI-Programmer/modules/scripting/components/ImportingLocalScripts';
import StandardLibraryQuiz from '@/app/courses/AWS-AI-Programmer/modules/scripting/components/StandardLibraryQuiz';
import ImportingTechniques from '@/app/courses/AWS-AI-Programmer/modules/scripting/components/ImportingTechniques';
// #endregion

// #region Section 6
import ClassAndObjectBasics from '@/app/courses/AWS-AI-Programmer/modules/oop/components/ClassAndObjectBasics';
import OOPSyntaxPart1 from '@/app/courses/AWS-AI-Programmer/modules/oop/components/OOPSyntaxPart1';
import GaussianClass from '@/app/courses/AWS-AI-Programmer/modules/oop/components/GaussianClass';
import MagicMethodsExercise from '@/app/courses/AWS-AI-Programmer/modules/oop/components/MagicMethodsExercise';
import InheritanceProbabilityDistributions from '@/app/courses/AWS-AI-Programmer/modules/oop/components/InheritanceProbabilityDistributions';
import ModularPackages from '@/app/courses/AWS-AI-Programmer/modules/oop/components/ModularPackages';
import VirtualEnvironments from '@/app/courses/AWS-AI-Programmer/modules/oop/components/VirtualEnvironments';
import BinomialClassExercise from '@/app/courses/AWS-AI-Programmer/modules/oop/components/BinomialClassExercise';
import DeployingToPyPi from '@/app/courses/AWS-AI-Programmer/modules/oop/components/DeployingToPyPi';
// #endregion

// #region section 7
import TimingCode from '@/app/courses/AWS-AI-Programmer/modules/project/components/TimingCode';
import CommandLineArgs from '@/app/courses/AWS-AI-Programmer/modules/project/components/CommandLineArgs';
import MutableRefresher from '@/app/courses/AWS-AI-Programmer/modules/project/components/MutableRefresher';
import CreatingPetImageLabels from '@/app/courses/AWS-AI-Programmer/modules/project/components/CreatingPetImageLabels';
import ClassifyingImages from '@/app/courses/AWS-AI-Programmer/modules/project/components/ClassifyingImages';
import ClassifyingLabelsAsDogs from '@/app/courses/AWS-AI-Programmer/modules/project/components/ClassifyingLabelsAsDogs';
import CalculatingResults from '@/app/courses/AWS-AI-Programmer/modules/project/components/CalculatingResults';
import PrintingResults from '@/app/courses/AWS-AI-Programmer/modules/project/components/PrintingResults';
import ClassifyUploadedImages from '@/app/courses/AWS-AI-Programmer/modules/project/components/ClassifyUploadedImages';
import FinalResultsTable from '@/app/courses/AWS-AI-Programmer/modules/project/components/FinalResultsTable';

// #endregion

export default function PythonOperatorsPage() {
    // #region Section 1
    const [isMainOpen, setIsMainOpen] = useState(false);
    const [isArithmeticOpen, setIsArithmeticOpen] = useState(false);
    const [isArithmeticExerciseOpen, setIsArithmeticExerciseOpen] = useState(false);
    const [isVariablesOpen, setIsVariablesOpen] = useState(false);
    const [isVariablesExerciseOpen, setIsVariablesExerciseOpen] = useState(false);
    const [isBooleansOpen, setIsBooleansOpen] = useState(false);
    const [isStringMethodsOpen, setIsStringMethodsOpen] = useState(false);
    const [isStringSplitOpen, setIsStringSplitOpen] = useState(false);
    // #endregion

    // #region Section 2
    const [isSection2Open, setIsSection2Open] = useState(false);
    const [isListsOpen, setIsListsOpen] = useState(false);
    const [isMutabilityOpen, setIsMutabilityOpen] = useState(false);
    const [isListMethodsOpen, setIsListMethodsOpen] = useState(false);
    const [isTuplesOpen, setIsTuplesOpen] = useState(false);
    const [isSetsOpen, setIsSetsOpen] = useState(false);
    const [isDictOpen, setIsDictOpen] = useState(false);
    const [isDictExerciseOpen, setIsDictExerciseOpen] = useState(false);
    const [isCompoundOpen, setIsCompoundOpen] = useState(false);
    const [isPracticeOpen, setIsPracticeOpen] = useState(false);
    // #endregion

    // #region Section 3
    const [isControlFlowOpen, setIsControlFlowOpen] = useState(false);
    const [isForLoopsOpen, setIsForLoopsOpen] = useState(false);
    const [isForLoopsQuizOpen, setIsForLoopsQuizOpen] = useState(false);
    const [isIterDictOpen, setIsIterDictOpen] = useState(false);
    const [isIterDictQuizOpen, setIsIterDictQuizOpen] = useState(false);
    const [isWhileLoopsOpen, setIsWhileLoopsOpen] = useState(false);
    const [isMoreWhileLoopsOpen, setIsMoreWhileLoopsOpen] = useState(false);
    const [isBreakContinueOpen, setIsBreakContinueOpen] = useState(false);
    const [isEarlyStoppingOpen, setIsEarlyStoppingOpen] = useState(false);
    const [isTweetSummaryOpen, setIsTweetSummaryOpen] = useState(false);
    const [isZipEnumOpen, setIsZipEnumOpen] = useState(false);
    const [isZipQuizOpen, setIsZipQuizOpen] = useState(false);
    const [isListCompsOpen, setIsListCompsOpen] = useState(false);
    const [isListCompsQuizOpen, setIsListCompsQuizOpen] = useState(false);
    const [isOscarPracticeOpen, setIsOscarPracticeOpen] = useState(false);
    const [isMorePracticeOpen, setIsMorePracticeOpen] = useState(false);
    // #endregion

    // #region Section 4
    const [isFunctionsOpen, setIsFunctionsOpen] = useState(false);
    const [isScopeOpen, setIsScopeOpen] = useState(false);
    const [isDocQuizOpen, setIsDocQuizOpen] = useState(false);
    const [isLambdaOpen, setIsLambdaOpen] = useState(false);
    const [isLambdaQuizOpen, setIsLambdaQuizOpen] = useState(false);
    // #endregion

    // #region Section 5
    const [isScriptingOpen, setIsScriptingOpen] = useState(false);
    const [isErrorsExceptionsOpen, setIsErrorsExceptionsOpen] = useState(false);
    const [isHandlingErrorsOpen, setIsHandlingErrorsOpen] = useState(false);
    const [isFilesOpen, setIsFilesOpen] = useState(false);
    const [isFilesQuizOpen, setIsFilesQuizOpen] = useState(false);
    const [isImportingScriptsOpen, setIsImportingScriptsOpen] = useState(false);
    const [isStdLibQuizOpen, setIsStdLibQuizOpen] = useState(false);
    const [isImportTechniquesOpen, setIsImportTechniquesOpen] = useState(false);
    // #endregion

    // #region Section 6
    const [isOOPOpen, setIsOOPOpen] = useState(false);
    const [isBasicsOpen, setIsBasicsOpen] = useState(false);
    const [isOOPSyntaxPart1Open, setIsOOPSyntaxPart1Open] = useState(false);
    const [isGaussianOpen, setIsGaussianOpen] = useState(false);
    const [isMagicMethodsOpen, setIsMagicMethodsOpen] = useState(false);
    const [isInheritanceProbOpen, setIsInheritanceProbOpen] = useState(false);
    const [isModularPackagesOpen, setIsModularPackagesOpen] = useState(false);
    const [isVirtualEnvOpen, setIsVirtualEnvOpen] = useState(false);
    const [isBinomialOpen, setIsBinomialOpen] = useState(false);
    const [isDeployingOpen, setIsDeployingOpen] = useState(false);
    // #endregion

    // #region Section 7
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isTimingCodeOpen, setIsTimingCodeOpen] = useState(false);
    const [isCommandLineArgsOpen, setIsCommandLineArgsOpen] = useState(false);
    const [isMutableRefresherOpen, setIsMutableRefresherOpen] = useState(false);
    const [isCreatingLabelsOpen, setIsCreatingLabelsOpen] = useState(false);
    const [isClassifyingImagesOpen, setIsClassifyingImagesOpen] = useState(false);
    const [isClassifyingLabelsAsDogsOpen, setIsClassifyingLabelsAsDogsOpen] = useState(false);
    const [isCalculatingResultsOpen, setIsCalculatingResultsOpen] = useState(false);
    const [isPrintingResultsOpen, setIsPrintingResultsOpen] = useState(false);
    const [isClassifyUploadedOpen, setIsClassifyUploadedOpen] = useState(false);
    const [isFinalResultsOpen, setIsFinalResultsOpen] = useState(false);

    // #endregion

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 max-w-4xl mx-auto font-sans relative">

            {/* Navegación y Cabecera */}
            <div className="mb-8">
                <Link href="/" className="text-xs font-mono text-cyan-400 hover:underline">
                    &larr; Back to Jop's Knowledge Arcade
                </Link>
                <div className="mt-4 inline-block bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold">
                    AI & Machine Learning / Udacity Nanodegree
                </div>
                <h1 className="text-4xl font-extrabold mt-3 tracking-tight">Python for AI</h1>
                <p className="text-slate-400 text-sm mt-1">Foundational knowledge module and operators archive.</p>
            </div>

            {/* CONTAINER SECTION 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Cabecera del Acordeón Principal */}
                <button
                    onClick={() => setIsMainOpen(!isMainOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-base font-bold">
                            1
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Data Types and Operators</span>
                    </div>
                    <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isMainOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        ▼
                    </span>
                </button>

                {/* Contenido condicional principal */}
                {isMainOpen && (
                    <div className="p-6 space-y-6 bg-slate-950/40">

                        {/* 1.1. Arithmetic Operators */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsArithmeticOpen(!isArithmeticOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">1.1.</span>
                                    <span className="font-semibold text-white text-lg">Arithmetic Operators</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isArithmeticOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isArithmeticOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <ArithmeticOperators />
                                </div>
                            )}
                        </div>

                        {/* 1.2. Arithmetic Operators Exercise */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsArithmeticExerciseOpen(!isArithmeticExerciseOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">1.2.</span>
                                    <span className="font-semibold text-white text-lg">Arithmetic Operators Exercise</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isArithmeticExerciseOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isArithmeticExerciseOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <ArithmeticOperatorsExercise />
                                </div>
                            )}
                        </div>

                        {/* 1.3. Variables and Assignment Operators */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsVariablesOpen(!isVariablesOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">1.3.</span>
                                    <span className="font-semibold text-white text-lg">Variables and Assignment Operators</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isVariablesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isVariablesOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <VariablesAndAssignment />
                                </div>
                            )}
                        </div>

                        {/* 1.4. Variables and Assignment Operators */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsVariablesExerciseOpen(!isVariablesExerciseOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">1.4.</span>
                                    <span className="font-semibold text-white text-lg">Variables and Assignment Operators Exercise</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isVariablesExerciseOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isVariablesExerciseOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <VariablesAndAssignmentExercise />
                                </div>
                            )}
                        </div>

                        {/* 1.5. Booleans, Comparassion & Logical Operators */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsBooleansOpen(!isBooleansOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">1.5.</span>
                                    <span className="font-semibold text-white text-lg">Booleans, Comparison & Logical Operators (Model Performance)</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isBooleansOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isBooleansOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <BooleansAndComparisons />
                                </div>
                            )}
                        </div>

                        {/* 1.6. AI and String Methods */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsStringMethodsOpen(!isStringMethodsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">1.6.</span>
                                    <span className="font-semibold text-white text-lg">AI and String Methods (NLP Text Processing)</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isStringMethodsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isStringMethodsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <StringMethods />
                                </div>
                            )}
                        </div>

                        {/* 1.7. AI Text Sentiment Analysis */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsStringSplitOpen(!isStringSplitOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">1.7.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and String Split (Text & Sentiment Analysis)</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isStringSplitOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isStringSplitOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <StringSplitAndSentiment />
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </div>

            <br />

            {/* CONTAINER SECTION 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Cabecera del Acordeón Principal */}
                <button
                    onClick={() => setIsSection2Open(!isSection2Open)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-base font-bold">
                            2
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Data Structures for AI programmers</span>
                    </div>
                    <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isSection2Open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        ▼
                    </span>
                </button>

                {/* FIXED: Added the isSection2Open conditional wrapper */}
                {isSection2Open && (
                    <div className="p-6 space-y-6 bg-slate-950/40">
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsListsOpen(!isListsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.1.</span>
                                    <span className="font-semibold text-white text-lg">Lists and Membership Operators</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isListsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isListsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4">
                                    <ListsAndMembership />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsMutabilityOpen(!isMutabilityOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.2.</span>
                                    <span className="font-semibold text-white text-lg">Mutability and Order</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isMutabilityOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isMutabilityOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <MutabilityAndOrder />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsListMethodsOpen(!isListMethodsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.3.</span>
                                    <span className="font-semibold text-white text-lg">List Methods</span>
                                </div>
                                <span className="text-slate-400 text-sm transform transition-transform duration-200" style={{ transform: isListMethodsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </button>

                            {isListMethodsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ListMethods />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsTuplesOpen(!isTuplesOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.4.</span>
                                    <span className="font-semibold text-white text-lg">Tuples</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isTuplesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isTuplesOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <Tuples />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsSetsOpen(!isSetsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.6.</span>
                                    <span className="font-semibold text-white text-lg">Sets</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isSetsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isSetsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <Sets />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsDictOpen(!isDictOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.7.</span>
                                    <span className="font-semibold text-white text-lg">Dictionaries and Identity Operators</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isDictOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isDictOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <Dictionaries />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsDictExerciseOpen(!isDictExerciseOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.8.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI, Dictionaries, and Identity Operators (Model Accuracies)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isDictExerciseOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isDictExerciseOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <DictionariesExercise />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsCompoundOpen(!isCompoundOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.9.</span>
                                    <span className="font-semibold text-white text-lg">Compound Data Structures</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isCompoundOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isCompoundOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <CompoundDataStructures />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-mono font-bold text-lg">2.10.</span>
                                    <span className="font-semibold text-white text-lg">Practice: AI and Data Structures (Lab)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isPracticeOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isPracticeOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <PracticeAIDataStructures />
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </div>

            {/* CONTAINER SECTION 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mt-6">

                {/* Cabecera del Acordeón Principal - Módulo 3 */}
                <button
                    onClick={() => setIsControlFlowOpen(!isControlFlowOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-base font-bold">
                            3
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Using Control Flow in AI Programming</span>
                    </div>
                    <span
                        className="text-slate-400 text-sm transform transition-transform duration-200"
                        style={{ transform: isControlFlowOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        ▼
                    </span>
                </button>

                {/* Contenido del Módulo 3 */}
                {isControlFlowOpen && (
                    <div className="p-6 space-y-6 bg-slate-950/40">

                        {/* 3.1. For Loops */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsForLoopsOpen(!isForLoopsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.1.</span>
                                    <span className="font-semibold text-white text-lg">For Loops</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isForLoopsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isForLoopsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ForLoops />
                                </div>
                            )}
                        </div>

                        {/* 3.2. Quiz: AI and For Loops */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsForLoopsQuizOpen(!isForLoopsQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.2.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and For Loops (Jupyter Lab)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isForLoopsQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isForLoopsQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <AIForLoopsQuiz />
                                </div>
                            )}
                        </div>

                        {/* 3.3. Iterating Dictionaries */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsIterDictOpen(!isIterDictOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.3.</span>
                                    <span className="font-semibold text-white text-lg">Iterating Through Dictionaries with For Loops</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isIterDictOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isIterDictOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <IteratingDictionaries />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsIterDictQuizOpen(!isIterDictQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.4.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and Iterating Through Dictionaries (Jupyter Lab)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isIterDictQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isIterDictQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <IteratingDictionariesQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsWhileLoopsOpen(!isWhileLoopsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.5.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and While Loops (Optimization & Gradients)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isWhileLoopsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isWhileLoopsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <WhileLoopsOptimization />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsMoreWhileLoopsOpen(!isMoreWhileLoopsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.6.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: More on While Loops (Batch Processing)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isMoreWhileLoopsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isMoreWhileLoopsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <MoreWhileLoopsQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsBreakContinueOpen(!isBreakContinueOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.7.</span>
                                    <span className="font-semibold text-white text-lg">Break and Continue (Cargo Loading Problem)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isBreakContinueOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isBreakContinueOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <BreakContinue />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsEarlyStoppingOpen(!isEarlyStoppingOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.8.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI, Break, and Continue (Early Stopping)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isEarlyStoppingOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isEarlyStoppingOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <EarlyStoppingQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsTweetSummaryOpen(!isTweetSummaryOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.9.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: More on Break and Continue (Tweet Feature Summary)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isTweetSummaryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isTweetSummaryOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <TweetFeatureSummary />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsZipEnumOpen(!isZipEnumOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.10.</span>
                                    <span className="font-semibold text-white text-lg">Zip and Enumerate (Iterators & Primes Playground)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isZipEnumOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isZipEnumOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ZipAndEnumerate />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsZipQuizOpen(!isZipQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.11.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI, Zip, and Enumerate (Jupyter Lab)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isZipQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isZipQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ZipEnumerateQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsListCompsOpen(!isListCompsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.12.</span>
                                    <span className="font-semibold text-white text-lg">List Comprehensions</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isListCompsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isListCompsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ListComprehensions />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsListCompsQuizOpen(!isListCompsQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.13.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and List Comprehensions (Jupyter Lab)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isListCompsQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isListCompsQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <AIListComprehensionsQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsOscarPracticeOpen(!isOscarPracticeOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.14.</span>
                                    <span className="font-semibold text-white text-lg">Practice Questions: Oscar Nominations & Winners (1931–2010)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isOscarPracticeOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isOscarPracticeOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <OscarPracticeQuestions />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsMorePracticeOpen(!isMorePracticeOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">3.15.</span>
                                    <span className="font-semibold text-white text-lg">More Practice Questions (Model Performance & Averages)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isMorePracticeOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isMorePracticeOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <MorePracticeQuestions />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Section 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mt-6">

                {/* Cabecera del Acordeón Principal - Módulo 4 */}
                <button
                    onClick={() => setIsFunctionsOpen(!isFunctionsOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-base font-bold">
                            4
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Using Python Functions in AI Programming</span>
                    </div>
                    <span
                        className="text-slate-400 text-sm transform transition-transform duration-200"
                        style={{ transform: isFunctionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        ▼
                    </span>
                </button>

                {/* Contenido del Módulo 4 */}
                {isFunctionsOpen && (
                    <div className="p-6 space-y-6 bg-slate-950/40">

                        {/* 4.1 Variable Scope */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsScopeOpen(!isScopeOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">4.1.</span>
                                    <span className="font-semibold text-white text-lg">Variable Scope</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isScopeOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isScopeOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <VariableScope />
                                </div>
                            )}
                        </div>


                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsDocQuizOpen(!isDocQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">4.2.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and Documentation (Readable Time Lab)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isDocQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isDocQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <DocumentationQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsLambdaOpen(!isLambdaOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">4.3.</span>
                                    <span className="font-semibold text-white text-lg">Lambda Expressions</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isLambdaOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isLambdaOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <LambdaExpressions />
                                </div>
                            )}
                        </div>

                        {/* Insert code here */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsLambdaQuizOpen(!isLambdaQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">4.4.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and Lambda Expressions (Jupyter Lab)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isLambdaQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isLambdaQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <AILambdaQuiz />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Section 5 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mt-6">
                {/* Cabecera del Acordeón Principal - Módulo 5 */}
                <button
                    onClick={() => setIsScriptingOpen(!isScriptingOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-base font-bold">
                            5
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Python Scripting for AI Programming</span>
                    </div>
                    <span
                        className="text-slate-400 text-sm transform transition-transform duration-200"
                        style={{ transform: isScriptingOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        ▼
                    </span>
                </button>

                {/* Contenido del Módulo 5 */}
                {isScriptingOpen && (
                    <div className="p-6 space-y-6 bg-slate-950/40">

                        {/* 5.1 Errors and Exceptions */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsErrorsExceptionsOpen(!isErrorsExceptionsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">5.1.</span>
                                    <span className="font-semibold text-white text-lg">Errors and Exceptions</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isErrorsExceptionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isErrorsExceptionsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ErrorsAndExceptions />
                                </div>
                            )}
                        </div>

                        {/* 5.2  */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsHandlingErrorsOpen(!isHandlingErrorsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">5.2.</span>
                                    <span className="font-semibold text-white text-lg">Handling Errors (try, except, else, finally)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isHandlingErrorsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isHandlingErrorsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <HandlingErrors />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsFilesQuizOpen(!isFilesQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">5.4.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and Reading/Writing Files (Scientist List)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isFilesQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isFilesQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ReadingWritingFilesQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsFilesOpen(!isFilesOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">5.5.</span>
                                    <span className="font-semibold text-white text-lg">Reading and Writing Files (Context Managers & with)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isFilesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isFilesOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ReadingAndWritingFiles />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsImportingScriptsOpen(!isImportingScriptsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">5.5.</span>
                                    <span className="font-semibold text-white text-lg">Importing Local Scripts (Modules & __name__)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isImportingScriptsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isImportingScriptsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ImportingLocalScripts />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsStdLibQuizOpen(!isStdLibQuizOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">5.6.</span>
                                    <span className="font-semibold text-white text-lg">Quiz: AI and the Standard Library (math & random)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isStdLibQuizOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isStdLibQuizOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <StandardLibraryQuiz />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsImportTechniquesOpen(!isImportTechniquesOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">5.7.</span>
                                    <span className="font-semibold text-white text-lg">Techniques for Importing Modules & Packages</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isImportTechniquesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isImportTechniquesOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ImportingTechniques />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Section 6 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mt-6">

                {/* Cabecera del Acordeón Principal - Módulo 6 */}
                <button
                    onClick={() => setIsOOPOpen(!isOOPOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-base font-bold">
                            6
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Introduction to Object-Oriented Python for AI Programming</span>
                    </div>
                    <span
                        className="text-slate-400 text-sm transform transition-transform duration-200"
                        style={{ transform: isOOPOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        ▼
                    </span>
                </button>

                {/* Contenido del Módulo 6 */}
                {isOOPOpen && (
                    <div className="p-6 space-y-6 bg-slate-950/40">

                        {/* 6.1 Class, Object, Method, and Attribute */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsBasicsOpen(!isBasicsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.1.</span>
                                    <span className="font-semibold text-white text-lg">Class, Object, Method, and Attribute</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isBasicsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isBasicsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ClassAndObjectBasics />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsOOPSyntaxPart1Open(!isOOPSyntaxPart1Open)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.3.</span>
                                    <span className="font-semibold text-white text-lg">Exercise: OOP Syntax and AI - Part 1</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isOOPSyntaxPart1Open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isOOPSyntaxPart1Open && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <OOPSyntaxPart1 />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsGaussianOpen(!isGaussianOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.4.</span>
                                    <span className="font-semibold text-white text-lg">A Gaussian Class (Math & Probability)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isGaussianOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isGaussianOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <GaussianClass />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsMagicMethodsOpen(!isMagicMethodsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.6.</span>
                                    <span className="font-semibold text-white text-lg">Exercise: AI and Magic Methods (__add__, __repr__)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isMagicMethodsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isMagicMethodsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <MagicMethodsExercise />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsInheritanceProbOpen(!isInheritanceProbOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.8.</span>
                                    <span className="font-semibold text-white text-lg">AI and Inheritance (Matplotlib Integration)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isInheritanceProbOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isInheritanceProbOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <InheritanceProbabilityDistributions />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsModularPackagesOpen(!isModularPackagesOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.9.</span>
                                    <span className="font-semibold text-white text-lg">Organizing Modules & Making a Package</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isModularPackagesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isModularPackagesOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ModularPackages />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsVirtualEnvOpen(!isVirtualEnvOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.10.</span>
                                    <span className="font-semibold text-white text-lg">Virtual Environments (venv & Conda)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isVirtualEnvOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isVirtualEnvOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <VirtualEnvironments />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsBinomialOpen(!isBinomialOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.11.</span>
                                    <span className="font-semibold text-white text-lg">Exercise: AI and Binomial Classes</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isBinomialOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isBinomialOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <BinomialClassExercise />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsDeployingOpen(!isDeployingOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">6.12.</span>
                                    <span className="font-semibold text-white text-lg">Deploying Code to PyPi (sdist & wheels)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isDeployingOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isDeployingOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <DeployingToPyPi />
                                </div>
                            )}
                        </div>


                    </div>
                )}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mt-6 mb-12">

                {/* Cabecera del Acordeón Principal - Módulo 7 */}
                <button
                    onClick={() => setIsProjectOpen(!isProjectOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-900 hover:bg-slate-800/60 transition border-b border-slate-800/80"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-base font-bold">
                            7
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Project: Using a Pre-trained Image Classifier to Identify Dog Breeds</span>
                    </div>
                    <span
                        className="text-slate-400 text-sm transform transition-transform duration-200"
                        style={{ transform: isProjectOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        ▼
                    </span>
                </button>

                {/* Contenido del Módulo 7 */}
                {isProjectOpen && (
                    <div className="p-6 space-y-6 bg-slate-950/40">

                        {/* 7.1 Timing Code */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsTimingCodeOpen(!isTimingCodeOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.1.</span>
                                    <span className="font-semibold text-white text-lg">Timing Code (#TODO: 0)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isTimingCodeOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isTimingCodeOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <TimingCode />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsCommandLineArgsOpen(!isCommandLineArgsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.2.</span>
                                    <span className="font-semibold text-white text-lg">Command Line Arguments (#TODO: 1)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isCommandLineArgsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isCommandLineArgsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <CommandLineArgs />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsMutableRefresherOpen(!isMutableRefresherOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.3.</span>
                                    <span className="font-semibold text-white text-lg">Refresher: Mutable Data Types</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isMutableRefresherOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isMutableRefresherOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <MutableRefresher />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsCreatingLabelsOpen(!isCreatingLabelsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.4.</span>
                                    <span className="font-semibold text-white text-lg">Creating Pet Image Labels (#TODO: 2)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isCreatingLabelsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isCreatingLabelsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <CreatingPetImageLabels />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsClassifyingImagesOpen(!isClassifyingImagesOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.5.</span>
                                    <span className="font-semibold text-white text-lg">Classifying Images (#TODO: 3)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isClassifyingImagesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isClassifyingImagesOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ClassifyingImages />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsClassifyingLabelsAsDogsOpen(!isClassifyingLabelsAsDogsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.6.</span>
                                    <span className="font-semibold text-white text-lg">Classifying Labels as Dogs (#TODO: 4)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isClassifyingLabelsAsDogsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isClassifyingLabelsAsDogsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ClassifyingLabelsAsDogs />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsCalculatingResultsOpen(!isCalculatingResultsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.7.</span>
                                    <span className="font-semibold text-white text-lg">Calculating Results (#TODO: 5)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isCalculatingResultsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isCalculatingResultsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <CalculatingResults />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsPrintingResultsOpen(!isPrintingResultsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.8.</span>
                                    <span className="font-semibold text-white text-lg">Printing Results (#TODO: 6)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isPrintingResultsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isPrintingResultsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <PrintingResults />
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsClassifyUploadedOpen(!isClassifyUploadedOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-cyan-400 font-mono font-bold text-lg">7.9.</span>
                                    <span className="font-semibold text-white text-lg">Classify Uploaded Images (Final Step)</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isClassifyUploadedOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isClassifyUploadedOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <ClassifyUploadedImages />
                                </div>
                            )}
                        </div>


                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-4">
                            <button
                                onClick={() => setIsFinalResultsOpen(!isFinalResultsOpen)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-amber-400 font-mono font-bold text-lg">7.10.</span>
                                    <span className="font-semibold text-white text-lg">Final Results & Model Comparison</span>
                                </div>
                                <span
                                    className="text-slate-400 text-sm transform transition-transform duration-200"
                                    style={{ transform: isFinalResultsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            {isFinalResultsOpen && (
                                <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 text-slate-300 text-sm leading-relaxed space-y-4 bg-slate-950/50">
                                    <FinalResultsTable />
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </div>

        </main >
    );
}