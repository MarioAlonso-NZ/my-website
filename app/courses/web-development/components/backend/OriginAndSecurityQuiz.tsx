"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, XCircle } from "lucide-react";

// --- QUIZ DATA ---
const quizQuestions = [
  {
    id: 1,
    url1: "http://localhost:3000",
    url2: "http://localhost:5173",
    isSameOrigin: false,
    explanation: "The ports are different (3000 vs 5173).",
  },
  {
    id: 2,
    url1: "https://app.example.com",
    url2: "https://app.example.com/api/users",
    isSameOrigin: true,
    explanation: "The path doesn't define an origin. Protocol, hostname, and port match.",
  },
  {
    id: 3,
    url1: "https://app.example.com",
    url2: "http://app.example.com",
    isSameOrigin: false,
    explanation: "The protocols are different (HTTPS vs HTTP).",
  },
  {
    id: 4,
    url1: "https://app.example.com",
    url2: "https://api.example.com",
    isSameOrigin: false,
    explanation: "The hostnames are different (app vs api).",
  },
];

export default function OriginAndSecurityQuiz() {
  // State to track user answers: { questionId: boolean }
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const handleSelect = (id: number, answer: boolean) => {
    // Prevent changing the answer once selected
    if (answers[id] !== undefined) return;
    
    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
    }));
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-8 font-sans">
      
      {/* 1. THE SECURITY NOTE TEXT */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="text-cyan-400" size={24} />
          <h3 className="text-xl font-bold text-white">The True Purpose of CORS</h3>
        </div>
        
        <div className="text-slate-300 leading-relaxed space-y-4 text-sm md:text-base">
          <p>
            It controls whether browser JavaScript from one origin can <strong className="text-white">access responses</strong> from another origin.
          </p>
          <p className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-400">
            <strong className="text-cyan-300">Important Distinction:</strong> Another website generally <em>cannot</em> simply read the cookies of another website through JavaScript. Cookie protections, including <code className="text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded">HttpOnly</code>, <code className="text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded">Secure</code>, and <code className="text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded">SameSite</code>, are separate security mechanisms. Furthermore, CORS is <strong className="text-rose-400">not</strong> a replacement for CSRF protection.
          </p>
        </div>
      </div>

      {/* 2. THE INTERACTIVE QUIZ */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
        <h3 className="text-lg font-bold text-white mb-6">Test Your Knowledge: Origins</h3>
        
        <div className="space-y-6">
          {quizQuestions.map((q) => {
            const hasAnswered = answers[q.id] !== undefined;
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.isSameOrigin;

            return (
              <div key={q.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                <h4 className="font-bold text-white text-sm mb-3">Question {q.id}</h4>
                
                {/* URLs */}
                <div className="flex flex-col gap-1 font-mono text-sm text-cyan-300 mb-4">
                  <div className="bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 inline-block w-fit">
                    {q.url1}
                  </div>
                  <span className="text-slate-500 text-xs px-3">versus</span>
                  <div className="bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 inline-block w-fit">
                    {q.url2}
                  </div>
                </div>

                {/* Radio Options */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <label className={`flex items-center gap-2 cursor-pointer ${hasAnswered ? 'cursor-not-allowed opacity-50' : 'hover:text-white'} text-slate-300 text-sm transition-colors`}>
                    <input 
                      type="radio" 
                      name={`question-${q.id}`} 
                      disabled={hasAnswered}
                      checked={userAnswer === true}
                      onChange={() => handleSelect(q.id, true)}
                      className="w-4 h-4 accent-cyan-500"
                    />
                    Same origin
                  </label>
                  
                  <label className={`flex items-center gap-2 cursor-pointer ${hasAnswered ? 'cursor-not-allowed opacity-50' : 'hover:text-white'} text-slate-300 text-sm transition-colors`}>
                    <input 
                      type="radio" 
                      name={`question-${q.id}`} 
                      disabled={hasAnswered}
                      checked={userAnswer === false}
                      onChange={() => handleSelect(q.id, false)}
                      className="w-4 h-4 accent-cyan-500"
                    />
                    Different origins
                  </label>
                </div>

                {/* Feedback Area */}
                {hasAnswered && (
                  <div className={`mt-4 p-3 rounded-lg text-sm flex items-start gap-2 border ${
                    isCorrect 
                      ? "bg-emerald-950/30 border-emerald-900/50 text-emerald-300" 
                      : "bg-rose-950/30 border-rose-900/50 text-rose-300"
                  }`}>
                    {isCorrect ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <XCircle size={18} className="shrink-0 mt-0.5" />}
                    <div>
                      <strong className="block">{isCorrect ? "Correct!" : "Incorrect."}</strong>
                      <span className="text-slate-400">{q.explanation}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
          <span>{answeredCount} of {quizQuestions.length} answered.</span>
          {answeredCount === quizQuestions.length && (
            <span className="text-emerald-400 font-bold">Quiz Complete! 🎉</span>
          )}
        </div>
      </div>

    </div>
  );
}