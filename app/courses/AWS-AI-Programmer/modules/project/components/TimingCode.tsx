'use client';

import React from 'react';
import { Timer, Code2, Calculator, CheckCircle2, Play } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function TimingCode() {

  // Salida calculada simulando la ejecución del bloque de tiempo
  const timingOutput = `Starting the classification process...
[Simulating image processing...]
Process completed.

Total Elapsed Runtime: 75.00034 in seconds.
Total Elapsed Runtime: 0:1:15`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Timer className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            #TODO: 0 - Timing Code (Program Runtime Measurement)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Timing your program allows you to compare the computational costs associated with using different algorithms (like ResNet, AlexNet, or VGG) to classify pet images.
        </p>
      </div>

      {/* 2. Conceptos Clave: Time Module y Formateo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* time & sleep */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Play size={16} />
            <span>time() and sleep()</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            We import only the functions we need to save memory. <code className="text-slate-300 font-mono">time()</code> records the current timestamp, and <code className="text-slate-300 font-mono">sleep()</code> pauses execution to simulate long-running classification tasks.
          </p>
          <pre className="text-purple-300 bg-slate-900 p-2 rounded-lg border border-slate-800 overflow-x-auto text-xs font-mono">
{`from time import time, sleep
start_time = time()
sleep(75) # Simulate work
end_time = time()
tot_time = end_time - start_time`}
          </pre>
        </div>

        {/* Formatting Time */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <Calculator size={16} />
            <span>Formatting hh:mm:ss</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
            Using modulo (<code className="text-slate-300 font-mono">%</code>) for remainders and the <code className="text-slate-300 font-mono">int()</code> function to truncate decimals, we can convert total seconds into hours, minutes, and seconds.
          </p>
          <pre className="text-emerald-300 bg-slate-900 p-2 rounded-lg border border-slate-800 overflow-x-auto text-xs font-mono">
{`hours = int((tot_time / 3600))
minutes = int(((tot_time % 3600) / 60))
seconds = int(((tot_time % 3600) % 60))`}
          </pre>
        </div>

      </div>

      {/* 3. Implementación del Proyecto */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: check_images.py (Timing Block)</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates the exact code you need to place inside your <code className="text-cyan-300 font-mono">main()</code> function in the project workspace to satisfy <code className="text-cyan-300 font-mono">#TODO: 0</code>.
        </p>

        <RunnablePythonCode
          code={`# Imports time() and sleep() functions from time module
from time import time, sleep

def main():
    # Sets start time
    start_time = time()
    print("Starting the classification process...")
    
    # Replace sleep(75) below with code you want to time
    print("[Simulating image processing...]")
    # sleep(75) -> Simulated directly to avoid locking the UI
    tot_time = 75.00034 
    
    print("Process completed.\\n")
    
    # Sets end time (simulated)
    # end_time = time()
    
    # Computes overall runtime in seconds
    # tot_time = end_time - start_time
    
    # Prints overall runtime in seconds
    print("Total Elapsed Runtime:", tot_time, "in seconds.")
    
    # Prints overall runtime in format hh:mm:ss
    hours = int((tot_time / 3600))
    minutes = int(((tot_time % 3600) / 60))
    seconds = int(((tot_time % 3600) % 60))
    
    print("Total Elapsed Runtime:", str(hours) + ":" + str(minutes) + ":" + str(seconds))

if __name__ == "__main__":
    main()`}
          output={timingOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Note: Using int() truncates the seconds (e.g., 4.9 seconds becomes 4). If you prefer rounding to the nearest second, use the round() function instead.</span>
        </div>
      </div>

    </div>
  );
}