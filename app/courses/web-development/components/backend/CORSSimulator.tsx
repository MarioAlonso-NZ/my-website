"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Monitor, Globe, Server, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

// Helper for animation delays
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Scenario = "allowed" | "blocked" | "preflight";

export default function CORSSimulator() {
  const [scenario, setScenario] = useState<Scenario>("allowed");
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const isCancelled = useRef(false);

  const resetSimulation = () => {
    setIsRunning(false);
    setStep(0);
    setLogs([]);
    isCancelled.current = true;
  };

  const handleScenarioChange = (newScenario: Scenario) => {
    if (isRunning) return; // Prevent changing mid-run
    setScenario(newScenario);
    resetSimulation();
  };

  useEffect(() => {
    return () => {
      isCancelled.current = true; // Cleanup
    };
  }, []);

  const runSimulation = async () => {
    resetSimulation();
    setIsRunning(true);
    isCancelled.current = false;

    const addLog = (msg: string) => {
      if (!isCancelled.current) setLogs((prev) => [...prev, msg]);
    };

    // Step 1: React initiates request
    setStep(1);
    addLog("→ React initiates fetch() request to http://localhost:3000/api/users");
    await sleep(800);
    if (isCancelled.current) return;

    // Step 2: Browser sends request (Preflight logic)
    if (scenario === "preflight") {
      setStep(2);
      addLog("→ Browser detects non-simple request. Sending OPTIONS (Preflight) request.");
      addLog(`  Header: Origin: http://localhost:5173`);
      await sleep(1000);
      if (isCancelled.current) return;

      setStep(3); // Goes to Express
      addLog("← Express responds to OPTIONS with 204 No Content");
      addLog(`  Header: Access-Control-Allow-Origin: http://localhost:5173`);
      addLog(`  Header: Access-Control-Allow-Methods: POST`);
      await sleep(1000);
      if (isCancelled.current) return;
      
      setStep(2); // Back to browser
      addLog("✓ Browser approves preflight. Sending actual POST request.");
      await sleep(800);
      if (isCancelled.current) return;
    }

    // Step 3: Request hits Express
    setStep(3);
    addLog(`→ Express receives ${scenario === "preflight" ? "POST" : "GET"} request.`);
    addLog(`  Header: Origin: http://localhost:5173`);
    await sleep(1000);
    if (isCancelled.current) return;

    // Step 4: Express responds
    setStep(4);
    if (scenario === "blocked") {
      addLog("← Express responds with data, but WRONG CORS headers.");
      addLog("  Header: Access-Control-Allow-Origin: http://api.example.com");
    } else {
      addLog("← Express responds with data + CORRECT CORS headers.");
      addLog("  Header: Access-Control-Allow-Origin: http://localhost:5173");
    }
    await sleep(1000);
    if (isCancelled.current) return;

    // Step 5: Browser checks and forwards (or blocks)
    setStep(5);
    if (scenario === "blocked") {
      addLog("🚫 Browser BLOCKS the response. Origin mismatch.");
      addLog("  Error: Access to fetch at 'http://localhost:3000/api/users' from origin 'http://localhost:5173' has been blocked by CORS policy.");
    } else {
      addLog("✅ Browser allows response. Forwarding data to React.");
    }
    
    setIsRunning(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8 font-sans">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
          <Globe className="text-cyan-400" size={24} /> 
          How CORS Works Under the Hood
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          CORS is a browser security mechanism. It prevents a malicious website from reading data from your backend. 
          Select a scenario to see how the browser evaluates the headers.
        </p>
      </div>

      {/* Scenario Selectors */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => handleScenarioChange("allowed")}
          disabled={isRunning}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors border ${
            scenario === "allowed" 
              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50" 
              : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
          }`}
        >
          Scenario 1: Allowed
        </button>
        <button
          onClick={() => handleScenarioChange("blocked")}
          disabled={isRunning}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors border ${
            scenario === "blocked" 
              ? "bg-rose-500/20 text-rose-300 border-rose-500/50" 
              : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
          }`}
        >
          Scenario 2: Blocked
        </button>
        <button
          onClick={() => handleScenarioChange("preflight")}
          disabled={isRunning}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors border ${
            scenario === "preflight" 
              ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50" 
              : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
          }`}
        >
          Scenario 3: Preflight (OPTIONS)
        </button>
      </div>

      {/* The Visual Diagram */}
      <div className="relative mt-8 bg-slate-950 border border-slate-800 rounded-xl p-6 overflow-hidden">
        <div className="flex justify-between items-center relative z-10">
          
          {/* React */}
          <div className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
            step === 1 ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.3)]" : "border-slate-700 bg-slate-800"
          }`}>
            <Monitor size={32} className={step === 1 ? "text-cyan-400" : "text-slate-400"} />
            <span className="text-sm font-bold text-white mt-2">React App</span>
            <span className="text-[10px] font-mono text-slate-400">localhost:5173</span>
          </div>

          {/* Connector 1 */}
          <div className="flex-1 flex flex-col items-center relative h-10">
            <ArrowRight className={`absolute transition-all duration-500 ${
              step === 1 ? "text-cyan-400 translate-x-4" : 
              step === 5 ? "text-emerald-400 -translate-x-4" : 
              step === 5 && scenario === "blocked" ? "text-rose-400" : "text-slate-700"
            }`} />
          </div>

          {/* Browser */}
          <div className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
            (step === 1 || step === 5) ? "border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]" : "border-slate-700 bg-slate-800"
          }`}>
            <Globe size={32} className={(step === 1 || step === 5) ? "text-purple-400" : "text-slate-400"} />
            <span className="text-sm font-bold text-white mt-2">Browser</span>
            <span className="text-[10px] font-mono text-slate-400">CORS Check</span>
          </div>

          {/* Connector 2 */}
          <div className="flex-1 flex flex-col items-center relative h-10">
            <ArrowRight className={`absolute transition-all duration-500 ${
              step === 2 ? "text-cyan-400 translate-x-4" : 
              step === 4 ? "text-yellow-400 -translate-x-4" : "text-slate-700"
            }`} />
          </div>

          {/* Express */}
          <div className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
            (step === 3 || step === 4) ? "border-yellow-500 bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "border-slate-700 bg-slate-800"
          }`}>
            <Server size={32} className={(step === 3 || step === 4) ? "text-yellow-400" : "text-slate-400"} />
            <span className="text-sm font-bold text-white mt-2">Express</span>
            <span className="text-[10px] font-mono text-slate-400">localhost:3000</span>
          </div>

        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center">
        <button
          onClick={isRunning ? resetSimulation : runSimulation}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-colors ${
            isRunning 
              ? "bg-slate-700 hover:bg-slate-600 text-white" 
              : "bg-cyan-600 hover:bg-cyan-500 text-white"
          }`}
        >
          {isRunning ? <RotateCcw size={18} /> : <Play size={18} />}
          {isRunning ? "Stop Simulation" : "Send Request"}
        </button>
      </div>

      {/* Console Log */}
      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs h-48 overflow-y-auto flex flex-col gap-1 shadow-inner">
        <div className="text-slate-500 mb-2 border-b border-slate-800 pb-2">Network & Console Log</div>
        {logs.length === 0 && <div className="text-slate-600 italic">Waiting to initiate request...</div>}
        {logs.map((log, i) => {
          let color = "text-slate-300";
          if (log.includes("🚫")) color = "text-rose-400 font-bold";
          if (log.includes("✅") || log.includes("✓")) color = "text-emerald-400 font-bold";
          if (log.includes("Header:")) color = "text-cyan-300 ml-4";
          if (log.includes("→")) color = "text-purple-300";
          
          return (
            <div key={i} className={`${color} whitespace-pre-wrap animate-in fade-in slide-in-from-left-2 duration-300`}>
              {log}
            </div>
          );
        })}
      </div>

    </div>
  );
}